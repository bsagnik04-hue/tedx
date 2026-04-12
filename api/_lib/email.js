import { Resend } from "resend";
import { getEnv } from "./config.js";

let resend;

function getResend() {
  if (!resend) {
    resend = new Resend(getEnv("EMAIL_API_KEY"));
  }

  return resend;
}

export async function sendConfirmationEmail({ attendee, registration, qrCodeUrl, ticketType }) {
  const client = getResend();
  const fromEmail = getEnv("EMAIL_FROM");

  await client.emails.send({
    from: fromEmail,
    to: attendee.email,
    subject: "TEDx Registration Confirmed",
    html: `
      <div style="font-family: Arial, sans-serif; background: #050505; color: #ffffff; padding: 32px;">
        <h1 style="font-size: 28px; margin-bottom: 12px;">TEDx MSRIT Registration Confirmed</h1>
        <p style="color: rgba(255,255,255,0.8); line-height: 1.6;">
          Hi ${attendee.name}, your registration is confirmed. We cannot wait to welcome you to Reverie.
        </p>
        <div style="margin: 24px 0; padding: 20px; border: 1px solid rgba(255,255,255,0.12); border-radius: 16px;">
          <p><strong>Registration ID:</strong> ${registration.id}</p>
          <p><strong>Ticket Type:</strong> ${ticketType}</p>
          <p><strong>Payment Status:</strong> Paid</p>
        </div>
        <p style="margin-bottom: 12px;">Show this QR at entry:</p>
        <img src="${qrCodeUrl}" alt="TEDx QR Ticket" style="width: 180px; height: 180px; background: #ffffff; padding: 12px; border-radius: 16px;" />
      </div>
    `,
  });
}
