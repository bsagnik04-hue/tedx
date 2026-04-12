import { useState } from "react";
import { fetchAdminRegistrations } from "../lib/api";
import { paymentStatusLabel } from "../lib/constants";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchAdminRegistrations(password);
      setRegistrations(data.registrations || []);
    } catch (dashboardError) {
      setError(dashboardError.message || "Could not load registrations.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white md:px-10">
      <div className="mx-auto w-[min(94%,1200px)]">
        <a
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 font-body text-xs uppercase tracking-[0.32em] text-white/70 transition hover:text-white"
        >
          Back to site
        </a>

        <div className="mt-10 max-w-3xl">
          <p className="font-body text-xs uppercase tracking-[0.7em] text-red-300/65">Admin</p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase sm:text-5xl md:text-6xl">
            Registration dashboard
          </h1>
          <p className="mt-5 font-body text-base leading-8 text-white/68">
            This page stays visually aligned with the existing site while pulling registrations
            securely through a serverless API route.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1fr_auto]"
        >
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Admin password"
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 font-body text-white outline-none transition focus:border-red-500/40"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full border border-red-500/30 bg-red-600 px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.25em] transition hover:bg-red-500 disabled:opacity-60"
          >
            {loading ? "Loading" : "Unlock"}
          </button>
        </form>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-body text-sm text-red-100">
            {error}
          </div>
        ) : null}

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-white/[0.03]">
                <tr className="font-body text-xs uppercase tracking-[0.35em] text-white/45">
                  <th className="px-5 py-4 text-left">Name</th>
                  <th className="px-5 py-4 text-left">Email</th>
                  <th className="px-5 py-4 text-left">Ticket</th>
                  <th className="px-5 py-4 text-left">Payment</th>
                  <th className="px-5 py-4 text-left">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {registrations.length ? (
                  registrations.map((registration) => (
                    <tr key={registration.id} className="font-body text-sm text-white/78">
                      <td className="px-5 py-4">{registration.name}</td>
                      <td className="px-5 py-4">{registration.email}</td>
                      <td className="px-5 py-4">{registration.ticket_type}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75">
                          {paymentStatusLabel[registration.payment_status] || registration.payment_status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {new Date(registration.created_at).toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-5 py-10 text-center font-body text-sm text-white/45">
                      No registrations loaded yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
