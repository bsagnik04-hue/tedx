import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, email, ticket_id } = req.body;

    await resend.emails.send({
      from: "TEDx MSRIT <onboarding@resend.dev>",
      to: email,
      subject: "TEDx Ticket",
      html: `
        <h2>Hello ${name}</h2>
        <p>Your Ticket ID: ${ticket_id}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
}