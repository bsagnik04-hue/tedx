import QRCode from "qrcode";
import { sendConfirmationEmail } from "./email.js";
import { getSupabaseAdmin } from "./supabaseAdmin.js";

function buildEntryQrPayload({ registrationId, paymentId, attendeeEmail, paymentStatus }) {
  return JSON.stringify({
    registrationId,
    paymentId,
    attendee: attendeeEmail,
    paymentStatus,
  });
}

export async function finalizeRegistration({ attendee, ticketType, paymentStatus, paymentId }) {
  const supabase = getSupabaseAdmin();

  const { data: registration, error: insertError } = await supabase
    .from("registrations")
    .insert({
      name: attendee.name,
      email: attendee.email,
      phone: attendee.phone,
      college: attendee.college,
      ticket_type: attendee.ticket_type,
      payment_status: paymentStatus,
    })
    .select("*")
    .single();

  if (insertError) {
    throw new Error(insertError.message || "Unable to save registration.");
  }

  const qrCodeUrl = await QRCode.toDataURL(
    buildEntryQrPayload({
      registrationId: registration.id,
      paymentId,
      attendeeEmail: attendee.email,
      paymentStatus,
    }),
    { margin: 1, width: 280 },
  );

  const { data: updatedRegistration, error: updateError } = await supabase
    .from("registrations")
    .update({
      qr_code_url: qrCodeUrl,
    })
    .eq("id", registration.id)
    .select("*")
    .single();

  if (updateError) {
    throw new Error(updateError.message || "Unable to attach QR code.");
  }

  await sendConfirmationEmail({
    attendee,
    registration: updatedRegistration,
    qrCodeUrl,
    ticketType,
  });

  return updatedRegistration;
}
