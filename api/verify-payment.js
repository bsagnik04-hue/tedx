import crypto from "node:crypto";
import { getEnv, handleMethod, sendJson } from "./_lib/config.js";
import { finalizeRegistration } from "./_lib/registrations.js";

export default async function handler(request, response) {
  if (!handleMethod(request, response, "POST")) {
    return;
  }

  try {
    const {
      ticketType,
      attendee,
      razorpay_order_id: orderId,
      razorpay_payment_id: paymentId,
      razorpay_signature: signature,
    } = request.body || {};

    if (
      !orderId ||
      !paymentId ||
      !signature ||
      !attendee?.name ||
      !attendee?.email ||
      !attendee?.phone ||
      !attendee?.college ||
      !attendee?.ticket_type
    ) {
      return sendJson(response, 400, { error: "Missing payment verification data." });
    }

    const secret = getEnv("RAZORPAY_KEY_SECRET");
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    if (generatedSignature !== signature) {
      return sendJson(response, 400, { error: "Payment signature verification failed." });
    }

    const registration = await finalizeRegistration({
      attendee,
      ticketType,
      paymentStatus: "paid",
      paymentId,
    });

    return sendJson(response, 200, {
      success: true,
      registration,
    });
  } catch (error) {
    return sendJson(response, 500, { error: error.message || "Unable to verify payment." });
  }
}
