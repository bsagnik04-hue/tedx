create extension if not exists "pgcrypto";

create table if not exists public.speakers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text not null,
  image_url text not null,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  college text not null,
  ticket_type text not null,
  ticket_id text not null unique,
  payment_status text not null default 'pending',
  payment_id text,
  qr_code_url text,
  created_at timestamptz not null default now()
);

alter table public.speakers enable row level security;
alter table public.registrations enable row level security;

drop policy if exists "Public can read speakers" on public.speakers;
create policy "Public can read speakers"
on public.speakers
for select
to anon, authenticated
using (true);

drop policy if exists "Public can insert registrations" on public.registrations;
create policy "Public can insert registrations"
on public.registrations
for insert
to anon, authenticated
with check (true);

insert into public.speakers (name, title, image_url, description)
values
  ('Speaker A', 'Innovator & Entrepreneur', 'https://via.placeholder.com/300', 'A visionary builder exploring how bold experimentation and human-centered innovation can reshape the way we live and work.'),
  ('Speaker B', 'AI Researcher', 'https://via.placeholder.com/300', 'An AI researcher translating complex machine intelligence into practical systems that expand creativity, trust, and access.'),
  ('Speaker C', 'Startup Founder', 'https://via.placeholder.com/300', 'A founder sharing the messy, exciting path from napkin-stage ideas to products that earn real conviction from real people.'),
  ('Speaker D', 'Motivational Speaker', 'https://via.placeholder.com/300', 'A storyteller focused on resilience, identity, and the inner shifts that often unlock our most outward transformations.'),
  ('Speaker E', 'Tech Leader', 'https://via.placeholder.com/300', 'A technology leader reflecting on building teams, navigating uncertainty, and making ambitious ideas actually executable.')
on conflict do nothing;
