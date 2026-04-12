# TEDx MSRIT Event Platform

This project keeps the existing animated frontend intact and layers in a functional event platform:

- Supabase-backed speakers and registrations
- Razorpay order creation and payment verification
- QR code ticket generation
- Resend confirmation emails
- A lightweight `/admin` dashboard

## Environment Variables

Frontend:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_RAZORPAY_KEY_ID`
- `VITE_ADMIN_API_BASE_URL`

Backend / Vercel:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `EMAIL_API_KEY`
- `EMAIL_FROM`
- `ADMIN_PASSWORD`

## Supabase Setup

1. Create a Supabase project.
2. Run the SQL in [supabase/schema.sql](/Users/sagnikbanik/Documents/tedx/new/supabase/schema.sql).
3. Copy the project URL and anon key into your frontend env file.
4. Copy the project URL and service role key into your Vercel env variables.

## Local Development

1. `npm install`
2. Create `.env` from `.env.example`
3. `npm run dev`

## Payment and Confirmation Flow

1. `/api/create-order` creates a `pending` registration in Supabase with the service role client.
2. `/api/create-order` creates a Razorpay order tied to that registration.
3. Razorpay checkout completes on the client.
4. `/api/verify-payment` verifies the signature, updates Supabase, generates a QR code, and sends the email confirmation.

## Admin Dashboard

Visit `/admin`, enter `ADMIN_PASSWORD`, and the dashboard loads registrations through `/api/admin-registrations`.
