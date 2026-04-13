import { useEffect, useMemo, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowLeft, CheckCircle2, LoaderCircle, X, UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ticketTypes } from "../lib/constants";
import { hasSupabaseConfig, supabase } from "../lib/supabase";
import jsPDF from "jspdf";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  college: "",
  ticket_type: ticketTypes[0].id,
};

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
  const [error, setError] = useState("");
  const [successData, setSuccessData] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [screenshotFile, setScreenshotFile] = useState(null);
  const fileInputRef = useRef(null);

  const selectedTicket = useMemo(
    () => ticketTypes.find((ticket) => ticket.id === formData.ticket_type) || ticketTypes[0],
    [formData.ticket_type],
  );

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormState);
      setStep("form");
      setLoading(false);
      setError("");
      setSuccessData(null);
      setPaymentMethod("");
      setTransactionId("");
      setScreenshotFile(null);
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

  async function generateAndDownloadPDF(registration, fileObj) {
    try {
      const doc = new jsPDF();
  
      // 🎯 TITLE
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(229, 9, 20);
      doc.text("TEDx MSRIT Ticket", 20, 25);
  
      // 📦 BOX DRAW FUNCTION
      const drawBox = (label, value, y) => {
        doc.setDrawColor(220);
        doc.setFillColor(245, 245, 245);
        doc.roundedRect(20, y - 6, 170, 16, 3, 3, "FD");
  
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(label.toUpperCase(), 24, y);
  
        doc.setFont("helvetica", "normal");
        doc.setTextColor(20);
        doc.text(String(value || "-"), 90, y);
      };
  
      // 📄 CONTENT
      let y = 45;
  
      drawBox("Ticket ID", registration.ticket_id, y); y += 18;
      drawBox("Name", registration.name, y); y += 18;
      drawBox("Email", registration.email, y); y += 18;
      drawBox("Phone", registration.phone, y); y += 18;
      drawBox("College", registration.college, y); y += 18;
      drawBox("Ticket Type", registration.ticket_type, y); y += 18;
      drawBox("Payment Status", registration.payment_status, y); y += 18;
  
      // 🔥 IMPORTANT FIELDS ADDED
      drawBox("Payment Method", registration.payment_method, y); y += 18;
      drawBox("Transaction ID", registration.payment_id, y); y += 22;
  
      // 🖼 SCREENSHOT IMAGE
      if (fileObj) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(50);
        doc.text("Payment Screenshot", 20, y);
  
        const reader = new FileReader();
        reader.readAsDataURL(fileObj);
  
        await new Promise((res) => {
          reader.onload = res;
        });
  
        const imgData = reader.result;
  
        const img = new Image();
        img.src = imgData;
  
        await new Promise((res) => {
          img.onload = res;
        });
  
        let width = img.width;
        let height = img.height;
        const ratio = height / width;
  
        width = 160;
        height = width * ratio;
  
        if (height > 120) {
          height = 120;
          width = height / ratio;
        }
  
        doc.addImage(imgData, "JPEG", 20, y + 10, width, height);
      }
  
      // 💾 SAVE PDF
      doc.save(`TEDx_MSRIT_Ticket_${registration.ticket_id}.pdf`);
  
    } catch (err) {
      console.error("[pdf generation]", err);
    }
  }

  async function handlePaymentSubmit() {
    const attendee = validateAndGetAttendee();
    if (!attendee) return;

    if (!paymentMethod) {
      const err = "Please select a payment method.";
      setError(err);
      window.alert(err);
      return;
    }

    if (!transactionId.trim()) {
      const err = "Please enter the transaction ID.";
      setError(err);
      window.alert(err);
      return;
    }

    if (!screenshotFile) {
      const err = "Please upload a payment screenshot first.";
      setError(err);
      window.alert(err);
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
    setError("");

    try {
      const ticketId = createTicketId();
      let screenshotUrl = null;

      // 1. Upload screenshot
      const fileExt = screenshotFile.name.split('.').pop();
      const uniqueName = `${ticketId}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { data: storageData, error: storageError } = await supabase.storage
        .from('payments')
        .upload(uniqueName, screenshotFile);

      if (storageError) {
        throw new Error("Screenshot upload failed: " + storageError.message);
      }

      const { data: { publicUrl } } = supabase.storage
        .from('payments')
        .getPublicUrl(uniqueName);

      screenshotUrl = publicUrl;

      // 2. Insert into database
      const registrationPayload = {
        name: attendee.name,
        email: attendee.email,
        phone: attendee.phone,
        college: attendee.college,
        ticket_type: attendee.ticket_type,
        payment_status: "pending_verification",
        ticket_id: ticketId,
        screenshot_url: screenshotUrl,
        payment_method: paymentMethod,   // ✅ FIXED
        payment_id: transactionId
      };

      const registration = await insertRegistration(registrationPayload);

      // 3. Generate PDF
      await generateAndDownloadPDF(registration, screenshotFile);

      const message = "Payment submitted. Your ticket PDF is downloading.";
      window.alert(message);

      setSuccessData(registration);
      setStep("success");

    } catch (err) {
      console.error("[registration] submission error:", err);
      const message = err.message || "Registration could not be saved.";
      setError(message);
      window.alert(message);
    } finally {
      setLoading(false);
    }
  }

  function resetAndClose() {
    setFormData(initialFormState);
    setStep("form");
    setLoading(false);
    setError("");
    setSuccessData(null);
    setPaymentMethod("");
    setTransactionId("");
    setScreenshotFile(null);
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
                    description="Fill in your details first, then complete your payment via UPI."
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
                            className={`rounded-[1.5rem] border p-5 text-left transition ${formData.ticket_type === ticket.id
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
                    description="Scan the QR code to pay, then upload the screenshot."
                  >
                    <div className="grid items-stretch gap-6 md:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 h-full">
                        <p className="font-display text-2xl font-black uppercase text-white">
                          Order Summary
                        </p>
                        <div className="mt-6 space-y-4 font-body text-sm text-white/72 mb-8">
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

                        <div className="mt-auto space-y-4">
                          <div className="space-y-4">
                            <div>
                              <p className="mb-3 font-body text-xs uppercase tracking-[0.35em] text-white/45">
                                App Used
                              </p>
                              <div className="flex gap-2">
                                {["Google Pay", "Paytm", "PhonePe"].map((method) => (
                                  <label key={method} className="flex-1 cursor-pointer">
                                    <div className={`rounded-xl border px-3 py-2 text-center font-body text-xs text-white transition ${paymentMethod === method ? "border-red-500/40 bg-red-600/10 shadow-glow" : "border-white/10 bg-white/[0.04] hover:bg-white/10"
                                      }`}>
                                      <input
                                        type="radio"
                                        name="paymentMethod"
                                        value={method}
                                        checked={paymentMethod === method}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="sr-only"
                                      />
                                      {method}
                                    </div>
                                  </label>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="mb-2 font-body text-xs uppercase tracking-[0.35em] text-white/45">
                                Transaction ID
                              </p>
                              <input
                                type="text"
                                placeholder="Enter Transaction ID"
                                value={transactionId}
                                onChange={(e) => setTransactionId(e.target.value)}
                                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 font-body text-sm text-white outline-none transition focus:border-red-500/40 hover:bg-white/[0.08]"
                              />
                            </div>
                          </div>

                          <div
                            className="border-2 border-dashed border-white/20 rounded-2xl p-6 text-center hover:bg-white/5 transition cursor-pointer"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <input
                              type="file"
                              accept="image/*"
                              ref={fileInputRef}
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  setScreenshotFile(e.target.files[0]);
                                }
                              }}
                            />
                            <div className="flex flex-col items-center gap-3">
                              <UploadCloud className="w-8 h-8 text-white/50" />
                              <div className="text-sm font-body text-white/70">
                                {screenshotFile ? (
                                  <span className="text-emerald-400">{screenshotFile.name}</span>
                                ) : (
                                  "Click to upload payment screenshot"
                                )}
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setError("");
                              setStep("form");
                            }}
                            disabled={loading}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-white/75 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                          </button>
                        </div>
                      </div>

                      <div className="flex min-h-[100%] flex-col rounded-[1.5rem] border border-red-500/40 bg-black p-6 text-center">
                        <h3 className="font-display text-2xl font-black uppercase text-white">UPI Payment</h3>
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
                          onClick={handlePaymentSubmit}
                          disabled={loading || !screenshotFile}
                          className="mt-6 inline-flex items-center justify-center gap-3 rounded-full border border-red-500/30 bg-red-600 px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {loading ? (
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                          ) : null}
                          {loading ? "Submitting..." : "Submit Payment"}
                        </button>
                      </div>
                    </div>
                  </StepShell>
                ) : null}

                {step === "success" && successData ? (
                  <StepShell
                    title="Registration saved"
                    description="Your registration is saved. Payment will be verified manually."
                  >
                    <div className="rounded-[1.5rem] border border-emerald-500/20 bg-emerald-500/10 p-6">
                      <div className="flex items-center gap-3 text-emerald-200">
                        <AlertCircle className="h-6 w-6" />
                        <p className="font-display text-2xl font-black uppercase">
                          Pending verification
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
