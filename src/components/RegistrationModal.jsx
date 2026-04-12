import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowLeft, CheckCircle2, LoaderCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ticketTypes } from "../lib/constants";
import { hasEmailJsConfig, sendTicketEmail } from "../lib/email";
import { hasSupabaseConfig, supabase } from "../lib/supabase";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  college: "",
  ticket_type: ticketTypes[0].id,
};

function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function sanitizePhone(value) {
  return value.replace(/[^\d+\s()-]/g, "");
}

function buildAttendee(formData) {
  return {
    ...formData,
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim(),
    college: formData.college.trim(),
  };
}

function validateAttendee(attendee) {
  if (!attendee.name || !attendee.email || !attendee.phone || !attendee.college) {
    return "Please fill in all details before continuing.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(attendee.email)) {
    return "Please enter a valid email address.";
  }

  if (attendee.phone.replace(/\D/g, "").length < 10) {
    return "Please enter a valid phone number.";
  }

  return "";
}

function createTicketId() {
  return `TEDX-${Date.now()}`;
}

function persistSuccessPayload(payload) {
  try {
    sessionStorage.setItem("tedx_success", JSON.stringify(payload));
  } catch (error) {
    console.error("[registration] Could not persist success payload:", error);
  }
}

function buildRegistrationPayload({ attendee, paymentStatus, paymentMethod, paymentId, ticketId }) {
  return {
    name: attendee.name,
    email: attendee.email,
    phone: attendee.phone,
    college: attendee.college,
    ticket_type: attendee.ticket_type,
    payment_status: paymentStatus,
    payment_method: paymentMethod,
    payment_id: paymentId ?? null,
    ticket_id: ticketId,
  };
}

async function insertRegistration(payload) {
  const { data, error } = await supabase.from("registrations").insert([payload]).select().single();

  if (error) {
    console.error("[registration] Supabase insert failed:", error);
    throw new Error(error.message || "Registration could not be saved.");
  }

  return data;
}

function StepShell({ title, description, children }) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <div className="border-b border-white/10 px-6 py-6 md:px-8">
        <p className="font-body text-xs uppercase tracking-[0.7em] text-red-300/65">Register</p>
        <h3 className="mt-4 font-display text-3xl font-black uppercase text-white">{title}</h3>
        <p className="mt-3 max-w-xl font-body text-sm leading-7 text-white/65">{description}</p>
      </div>
      <div className="px-6 py-8 md:px-8">{children}</div>
    </motion.div>
  );
}

export default function RegistrationModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [loadingMode, setLoadingMode] = useState("");
  const [error, setError] = useState("");
  const [successData, setSuccessData] = useState(null);

  const selectedTicket = useMemo(
    () => ticketTypes.find((ticket) => ticket.id === formData.ticket_type) || ticketTypes[0],
    [formData.ticket_type],
  );

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormState);
      setStep("form");
      setLoading(false);
      setLoadingMode("");
      setError("");
      setSuccessData(null);
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleFieldChange(key, value) {
    const nextValue = key === "phone" ? sanitizePhone(value) : value;
    setFormData((current) => ({ ...current, [key]: nextValue }));
  }

  function validateAndGetAttendee() {
    const attendee = buildAttendee(formData);
    const validationError = validateAttendee(attendee);

    if (validationError) {
      setError(validationError);
      window.alert(validationError);
      return null;
    }

    setError("");
    setFormData(attendee);
    return attendee;
  }

  function handleContinue(event) {
    event.preventDefault();

    const attendee = validateAndGetAttendee();
    if (!attendee) {
      return;
    }

    setStep("payment");
  }

  async function finalizeSuccessfulRegistration({ attendee, paymentId }) {
    const ticketId = createTicketId();
    const registrationPayload = buildRegistrationPayload({
      attendee,
      paymentStatus: "paid",
      paymentMethod: "razorpay",
      paymentId,
      ticketId,
    });
    const registration = await insertRegistration(registrationPayload);

    if (hasEmailJsConfig()) {
      await sendTicketEmail({
        name: attendee.name,
        email: attendee.email,
        ticketId,
      });
    } else {
      console.error("[email] Missing EmailJS env vars");
    }

    const payload = {
      name: attendee.name,
      email: attendee.email,
      ticketId,
      paymentStatus: "paid",
    };

    persistSuccessPayload(payload);
    setSuccessData(registration);
    return registration;
  }

  async function saveQrRegistration(attendee) {
    const ticketId = createTicketId();
    const registrationPayload = buildRegistrationPayload({
      attendee,
      paymentStatus: "pending",
      paymentMethod: "qr",
      paymentId: null,
      ticketId,
    });

    const registration = await insertRegistration(registrationPayload);
    persistSuccessPayload({
      name: attendee.name,
      email: attendee.email,
      ticketId,
      paymentStatus: "pending",
    });
    setSuccessData(registration);

    return registration;
  }

  async function handleRazorpayPayment() {
    const attendee = validateAndGetAttendee();
    if (!attendee) {
      return;
    }

    if (!hasSupabaseConfig() || !supabase) {
      const configError = "Supabase is not configured correctly.";
      console.error("[registration]", configError);
      setError(configError);
      window.alert(configError);
      return;
    }

    const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!key) {
      const keyError = "Razorpay key is missing. Please check VITE_RAZORPAY_KEY_ID.";
      console.error("[registration]", keyError);
      setError(keyError);
      window.alert(keyError);
      return;
    }

    setLoading(true);
    setLoadingMode("razorpay");
    setError("");

    try {
      const loaded = await loadRazorpay();

      if (!loaded) {
        throw new Error("Razorpay failed to load. Please refresh and try again.");
      }

      const options = {
        key,
        amount: selectedTicket.amount * 100,
        currency: "INR",
        name: "TEDx MSRIT",
        description: `${selectedTicket.label} Ticket`,
        handler: async (response) => {
          try {
            const paymentId = response?.razorpay_payment_id;

            if (!paymentId) {
              throw new Error("Payment succeeded but no payment ID was returned.");
            }

            const registration = await finalizeSuccessfulRegistration({
              attendee,
              paymentId,
            });

            const successMessage = "Payment successful. Your ticket has been generated.";
            window.alert(successMessage);
            setStep("success");
            navigate("/success", { state: registration });
          } catch (completionError) {
            console.error("[registration] Razorpay success flow failed:", completionError);
            const message = completionError.message || "Could not complete registration.";
            setError(message);
            window.alert(message);
          } finally {
            setLoading(false);
            setLoadingMode("");
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setLoadingMode("");
          },
        },
        prefill: {
          name: attendee.name,
          email: attendee.email,
          contact: attendee.phone,
        },
        notes: {
          college: attendee.college,
          ticket_type: attendee.ticket_type,
        },
        theme: {
          color: "#E50914",
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.failed", (response) => {
        console.error("[registration] Razorpay payment failed:", response?.error);
        const message =
          response?.error?.description || "Payment failed. Please try again or use the QR option.";
        setError(message);
        setLoading(false);
        setLoadingMode("");
        window.alert(message);
      });

      paymentObject.open();
    } catch (paymentError) {
      console.error("[registration] Razorpay error:", paymentError);
      const message = paymentError.message || "Payment error. Please try again.";
      setError(message);
      window.alert(message);
      setLoading(false);
      setLoadingMode("");
    }
  }

  async function handleQrPayment() {
    const attendee = validateAndGetAttendee();
    if (!attendee) {
      return;
    }

    if (!hasSupabaseConfig() || !supabase) {
      const configError = "Supabase is not configured correctly.";
      console.error("[registration]", configError);
      setError(configError);
      window.alert(configError);
      return;
    }

    setLoading(true);
    setLoadingMode("qr");
    setError("");

    try {
      await saveQrRegistration(attendee);
      const message = "Payment will be verified manually.";
      window.alert(message);
      setStep("success");
    } catch (qrError) {
      console.error("[registration] QR payment error:", qrError);
      const message = qrError.message || "QR payment could not be saved.";
      setError(message);
      window.alert(message);
    } finally {
      setLoading(false);
      setLoadingMode("");
    }
  }

  function resetAndClose() {
    setFormData(initialFormState);
    setStep("form");
    setLoading(false);
    setLoadingMode("");
    setError("");
    setSuccessData(null);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[90] overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-md md:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              className="relative my-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/90 shadow-glow-strong"
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={resetAndClose}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:text-white"
                aria-label="Close registration"
              >
                <X className="h-4 w-4" />
              </button>

              {error ? (
                <div className="mx-6 mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-body text-sm text-red-100/90 md:mx-8">
                  {error}
                </div>
              ) : null}

              <AnimatePresence mode="wait" initial={false}>
                {step === "form" ? (
                  <StepShell
                    title="Reserve your TEDx ticket"
                    description="Fill in your details first, then complete your payment using Razorpay or the QR fallback."
                  >
                    <form onSubmit={handleContinue}>
                      <div className="grid gap-5 md:grid-cols-2">
                        {[
                          { key: "name", label: "Full Name", type: "text" },
                          { key: "email", label: "Email", type: "email" },
                          { key: "phone", label: "Phone", type: "text" },
                          { key: "college", label: "College", type: "text" },
                        ].map((field) => (
                          <label key={field.key} className="block">
                            <span className="font-body text-xs uppercase tracking-[0.35em] text-white/45">
                              {field.label}
                            </span>
                            <input
                              required
                              type={field.type}
                              value={formData[field.key]}
                              onChange={(event) => handleFieldChange(field.key, event.target.value)}
                              inputMode={field.key === "phone" ? "numeric" : undefined}
                              autoComplete={field.key === "phone" ? "tel-national" : undefined}
                              maxLength={field.key === "phone" ? 15 : undefined}
                              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 font-body text-white outline-none transition focus:border-red-500/40"
                            />
                          </label>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {ticketTypes.map((ticket) => (
                          <button
                            key={ticket.id}
                            type="button"
                            onClick={() =>
                              setFormData((current) => ({
                                ...current,
                                ticket_type: ticket.id,
                              }))
                            }
                            className={`rounded-[1.5rem] border p-5 text-left transition ${
                              formData.ticket_type === ticket.id
                                ? "border-red-500/40 bg-red-600/10 shadow-glow"
                                : "border-white/10 bg-white/[0.04]"
                            }`}
                          >
                            <p className="font-display text-2xl font-black uppercase text-white">
                              {ticket.label}
                            </p>
                            <p className="mt-2 font-body text-sm text-white/60">{ticket.description}</p>
                            <p className="mt-4 font-body text-sm uppercase tracking-[0.3em] text-red-200">
                              INR {ticket.amount}
                            </p>
                          </button>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-body text-xs uppercase tracking-[0.35em] text-white/45">
                            Selected ticket
                          </p>
                          <p className="mt-2 font-display text-3xl font-black uppercase text-white">
                            {selectedTicket.label}
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-full border border-red-500/30 bg-red-600 px-7 py-4 font-body text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-red-500"
                        >
                          Continue to Payment
                        </button>
                      </div>
                    </form>
                  </StepShell>
                ) : null}

                {step === "payment" ? (
                  <StepShell
                    title="Complete payment"
                    description="Choose your preferred payment method below."
                  >
                    <div className="grid items-stretch gap-6 md:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                        <p className="font-display text-2xl font-black uppercase text-white">
                          Order Summary
                        </p>
                        <div className="mt-6 space-y-4 font-body text-sm text-white/72">
                          <div className="flex items-center justify-between gap-4">
                            <span>Name</span>
                            <span className="text-right text-white">{formData.name}</span>
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <span>Email</span>
                            <span className="break-all text-right text-white">{formData.email}</span>
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <span>Phone</span>
                            <span className="text-right text-white">{formData.phone}</span>
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <span>College</span>
                            <span className="break-all text-right text-white">{formData.college}</span>
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <span>Ticket</span>
                            <span className="text-right text-white">{selectedTicket.label}</span>
                          </div>
                          <div className="border-t border-white/10 pt-4">
                            <p className="font-body text-xs uppercase tracking-[0.35em] text-white/45">
                              Amount
                            </p>
                            <p className="mt-2 font-display text-4xl font-black uppercase text-white">
                              INR {selectedTicket.amount}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                          <button
                            type="button"
                            onClick={handleRazorpayPayment}
                            disabled={loading}
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-red-500/30 bg-red-600 px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {loading && loadingMode === "razorpay" ? (
                              <LoaderCircle className="h-4 w-4 animate-spin" />
                            ) : null}
                            {loading && loadingMode === "razorpay" ? "Processing..." : "Pay with Razorpay"}
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setError("");
                              setStep("form");
                            }}
                            disabled={loading}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.24em] text-white/75 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                          </button>
                        </div>
                      </div>

                      <div className="flex min-h-[100%] flex-col rounded-[1.5rem] border border-red-500/40 bg-black p-6 text-center">
                        <h3 className="font-display text-2xl font-black uppercase text-white">QR Payment</h3>
                        <div className="mt-6 flex flex-1 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                          <img
                            src="/qr.png"
                            alt="UPI QR"
                            className="tedx-qr-image h-auto w-full max-w-[260px] rounded-lg"
                          />
                        </div>
                        <p className="mt-5 font-body text-xs uppercase tracking-[0.35em] text-white/45">
                          UPI ID
                        </p>
                        <p className="mt-2 break-all font-body text-base font-semibold text-white">
                          taejaswineepj@oksbi
                        </p>
                        <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-left font-body text-sm text-amber-100/90">
                          Manual verification will be done after you submit this payment.
                        </div>
                        <button
                          type="button"
                          onClick={handleQrPayment}
                          disabled={loading}
                          className="mt-6 inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {loading && loadingMode === "qr" ? (
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                          ) : null}
                          {loading && loadingMode === "qr" ? "Saving..." : "I Paid via QR"}
                        </button>
                      </div>
                    </div>
                  </StepShell>
                ) : null}

                {step === "success" && successData ? (
                  <StepShell
                    title="Registration saved"
                    description={
                      successData.payment_status === "paid"
                        ? "Your registration has been confirmed and your ticket is ready."
                        : "Your registration is saved. Payment will be verified manually."
                    }
                  >
                    <div className="rounded-[1.5rem] border border-emerald-500/20 bg-emerald-500/10 p-6">
                      <div className="flex items-center gap-3 text-emerald-200">
                        {successData.payment_status === "paid" ? (
                          <CheckCircle2 className="h-6 w-6" />
                        ) : (
                          <AlertCircle className="h-6 w-6" />
                        )}
                        <p className="font-display text-2xl font-black uppercase">
                          {successData.payment_status === "paid" ? "Success" : "Pending verification"}
                        </p>
                      </div>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                          <p className="font-body text-xs uppercase tracking-[0.4em] text-white/45">
                            Ticket ID
                          </p>
                          <p className="mt-3 break-all font-body text-sm text-white/85">
                            {successData.ticket_id}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                          <p className="font-body text-xs uppercase tracking-[0.4em] text-white/45">
                            Payment status
                          </p>
                          <p className="mt-3 break-all font-body text-sm uppercase text-white/85">
                            {successData.payment_status}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={resetAndClose}
                        className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/[0.12]"
                      >
                        Close
                      </button>
                    </div>
                  </StepShell>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
