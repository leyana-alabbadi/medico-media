
-- Run this once in the Supabase SQL editor for the production project.
create extension if not exists pgcrypto;

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 40),
  clinic text default '',
  text text not null check (char_length(text) between 10 and 500),
  rating integer not null check (rating between 1 and 5),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);
create index if not exists reviews_status_created_idx on public.reviews(status,created_at desc);

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  clinic text default '',
  contact text not null,
  specialty text default '',
  message text not null,
  consent boolean not null default false,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
create index if not exists contact_requests_created_idx on public.contact_requests(created_at desc);

alter table public.reviews enable row level security;
alter table public.contact_requests enable row level security;
-- The website writes through server-side Vercel functions using the service-role key.
-- Do not expose the service-role key in browser JavaScript.


-- Public website access policies for the publishable Supabase key.
-- Visitors can submit reviews only as pending and can read only approved reviews.
drop policy if exists "public_read_approved_reviews" on public.reviews;
create policy "public_read_approved_reviews"
on public.reviews
for select
to anon
using (status = 'approved');

drop policy if exists "public_submit_pending_reviews" on public.reviews;
create policy "public_submit_pending_reviews"
on public.reviews
for insert
to anon
with check (
  status = 'pending'
  and rating between 1 and 5
  and char_length(name) between 2 and 40
  and char_length(text) between 10 and 500
);

-- Website visitors may send contact requests, but cannot read them.
drop policy if exists "public_submit_contact_request" on public.contact_requests;
create policy "public_submit_contact_request"
on public.contact_requests
for insert
to anon
with check (consent = true);
