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
