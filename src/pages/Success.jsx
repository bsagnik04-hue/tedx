import { Link, useLocation } from "react-router-dom";

function getSuccessPayload() {
  try {
    const rawValue = sessionStorage.getItem("tedx_success");
    return rawValue ? JSON.parse(rawValue) : null;
  } catch (error) {
    console.error("[success] Could not read success payload:", error);
    return null;
  }
}

export default function Success() {
  const location = useLocation();
  const statePayload = location.state
    ? {
        name: location.state.name,
        email: location.state.email,
        paymentStatus: location.state.payment_status,
      }
    : null;
  const payload = statePayload || getSuccessPayload();
  const isPending = ["pending", "pending_verification"].includes(payload?.paymentStatus);

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white md:px-10">
      <div className="mx-auto w-[min(94%,920px)]">
        <Link
          to="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 font-body text-xs uppercase tracking-[0.32em] text-white/70 transition hover:text-white"
        >
          Back to site
        </Link>

        <div className="mt-10 rounded-[2rem] border border-emerald-500/20 bg-white/[0.04] p-8 md:p-10">
          <p className="font-body text-xs uppercase tracking-[0.7em] text-red-300/65">Success</p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase sm:text-5xl md:text-6xl">
            {isPending ? "Registration received" : "Registration confirmed"}
          </h1>
          <p className="mt-5 max-w-2xl font-body text-base leading-8 text-gray-300">
            Your payment has been received and is currently under review. Your ticket will be sent
            to your registered email address after successful verification.
          </p>

          {payload ? (
            <div className="mt-10">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-6">
                <p className="font-body text-xs uppercase tracking-[0.35em] text-gray-300">
                  Payment status
                </p>
                <p className="mt-3 break-all font-body text-sm uppercase text-white">
                  UNDER VERIFICATION
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] border border-amber-500/20 bg-amber-500/10 px-5 py-4 font-body text-sm text-amber-100/90">
              Ticket details were not found in this browser session.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
