import Razorpay from "razorpay";
import { getEnv, handleMethod, sendJson } from "./_lib/config.js";

const razorpay = new Razorpay({
  key_id: getEnv("RAZORPAY_KEY_ID"),
  key_secret: getEnv("RAZORPAY_KEY_SECRET"),
});

export default async function handler(request, response) {
  if (!handleMethod(request, response, "POST")) {
    return;
  }

  try {
    const { amount, receipt } = request.body || {};

    if (!amount) {
      return sendJson(response, 400, { error: "Amount is required." });
    }

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: receipt || `tedx-${Date.now()}`,
    });

    return sendJson(response, 200, { order });
  } catch (error) {
    return sendJson(response, 500, { error: error.message || "Unable to create order." });
  }
}
