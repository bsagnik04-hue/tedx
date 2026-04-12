import emailjs from "@emailjs/browser";

function getEmailConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };
}

export function hasEmailJsConfig() {
  const { serviceId, templateId, publicKey } = getEmailConfig();
  return Boolean(serviceId && templateId && publicKey);
}

export async function sendTicketEmail({ name, email, ticketId }) {
  const { serviceId, templateId, publicKey } = getEmailConfig();

  if (!serviceId || !templateId || !publicKey) {
    console.error("[email] Missing EmailJS env vars");
    throw new Error("Email service is not configured.");
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        name,
        email,
        ticket_id: ticketId,
      },
      publicKey,
    );
  } catch (error) {
    console.error("[email] EmailJS send failed:", error);
    throw new Error("Confirmation email could not be sent.");
  }
}
