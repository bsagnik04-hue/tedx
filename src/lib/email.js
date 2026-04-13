import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_5c30jtp";
const TEMPLATE_ID = "template_gax7n5k";

export function hasEmailJsConfig() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
  return Boolean(publicKey);
}

export async function sendTicketEmail({ name, email, ticketId }) {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

  if (!publicKey) {
    console.error("[email] Missing EmailJS env vars");
    throw new Error("Email service is not configured.");
  }

  console.log("Sending email...", {
    name,
    email,
    ticket_id: ticketId,
  });

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name,
        email,
        ticket_id: ticketId,
      },
    );

    console.log("Email success", response);
    console.log("Email sent successfully", response);
    return response;
  } catch (error) {
    console.error("Email error", error);
    console.error("[email] Email failed", error);
    throw new Error("Confirmation email could not be sent.");
  }
}
