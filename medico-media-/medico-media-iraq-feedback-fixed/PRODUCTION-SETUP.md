
# Medico Media — Production setup

This package is production-ready at the code level. Three external items still require account ownership/secrets: a final domain, Supabase credentials, and an OpenAI API key. Optional email delivery uses Resend.

## 1. Vercel
Import this folder/repository into Vercel. `vercel.json` adds security headers and caching. Add the environment variables from `.env.example` in Vercel Project Settings → Environment Variables. Never put service-role or API keys inside browser JavaScript.

## 2. Shared reviews + contact database
Create a Supabase project and run `supabase-schema.sql` in the SQL editor. Then add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to Vercel. Reviews are inserted as `pending`; approve them in the Supabase table by changing `status` to `approved`. Contact requests are stored in `contact_requests`.

## 3. AI consultant
Add `OPENAI_API_KEY` in Vercel. `OPENAI_MODEL` defaults to `chat-latest` but can be changed to a model available in the account. The browser talks only to `/api/ai`; the API key remains server-side. If the backend is not configured, the existing local Medico expert logic remains as a fallback.

## 4. Contact email (optional)
For email notifications, create a Resend account, verify the sending domain, then set `RESEND_API_KEY`, `CONTACT_EMAIL`, and `FROM_EMAIL`. The contact request is still stored in Supabase when database settings are configured.

## 5. Domain + sitemap
After connecting the final HTTPS domain, run:

`node scripts/set-domain.mjs https://YOUR-DOMAIN.com`

Commit the generated `sitemap.xml` and updated `robots.txt`, then submit the sitemap in Google Search Console.

## 6. Before public launch
- Confirm the displayed phone number and the international WhatsApp number belong to Medico Media.
- Confirm the currency and delivery timelines before adding them to the website. The current content intentionally does not invent either.
- Have Privacy Policy and Terms reviewed for the jurisdiction where Medico Media operates.
- Obtain appropriate patient consent for all identifiable clinical photos/videos used for marketing.
- Test iPhone Safari, iPad Safari, Android Chrome, desktop Chrome/Edge, Arabic/English, dark/light mode, forms, videos and WhatsApp links.
- Keep the original patient media securely outside the public site when it is not needed for display.

## Case Review naming
The former “Storytelling / Case Review” service is now displayed as **مراجعة الحالة** in Arabic and **Case Review** in English. `case-review.html` is the canonical page; `story-telling.html` remains only as a compatibility redirect.


## Feedback fix (October 2026)
The public review form now connects directly to Supabase using the publishable key. Run `SUPABASE-POLICIES-RUN-ONCE.sql` in Supabase SQL Editor once. Reviews are inserted as `pending` and become visible to everyone after changing their status to `approved` in Supabase.
