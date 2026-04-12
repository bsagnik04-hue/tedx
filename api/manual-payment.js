import { handleMethod, sendJson } from "./_lib/config.js";
import { finalizeRegistration } from "./_lib/registrations.js";

export default async function handler(request, response) {
  if (!handleMethod(request, response, "POST")) {
    return;
  }

  try {
    const { attendee, ticketType } = request.body || {};

    if (
      !attendee?.name ||
      !attendee?.email ||
      !attendee?.phone ||
      !attendee?.college ||
      !attendee?.ticket_type
    ) {
      return sendJson(response, 400, { error: "Attendee details are required." });
    }

    const registration = await finalizeRegistration({
      attendee,
      ticketType,
      paymentStatus: "manual_paid",
      paymentId: `manual-${Date.now()}`,
    });

    return sendJson(response, 200, {
      success: true,
      registration,
    });
  } catch (error) {
    return sendJson(response, 500, {
      error: error.message || "Unable to confirm manual payment.",
    });
  }
}
