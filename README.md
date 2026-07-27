# Tridan Contracting — Website

A high-converting, SEO-optimized website for **Tridan Contracting**, a licensed GTA general
contractor specializing in **outdoor living, renovations & painting**.

Built with **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**, designed to deploy on
**Vercel** with zero config.

---

## 🚀 Deploy to Vercel

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In [Vercel](https://vercel.com), **Add New → Project** and import the repo.
3. Framework preset auto-detects **Next.js** — no settings to change. Click **Deploy**.
4. Add your custom domain in **Project → Settings → Domains**.

Or from this folder with the CLI:

```bash
npm install
npx vercel        # preview
npx vercel --prod # production
```

## 🧑‍💻 Run locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

---

## ✅ Before you go live — update these

All business data lives in **`lib/`** so you edit content in one place, not across pages.

| What | File | Notes |
|---|---|---|
| Phone, email, hours, stats, badges | `lib/site.ts` | **Set the real `url`** to your domain. Business is anchored in **Milton, ON** (`address`/`geo`) for local SEO — add your real street address here to match your Google Business Profile. |
| Review count / rating / years / projects | `lib/site.ts` → `stats` | Use **real, verifiable** numbers before launch. |
| Social profile links | `lib/site.ts` → `social` | Used in footer + schema `sameAs`. |
| Services & content | `lib/services.ts` | Add/edit services; each auto-generates a page + nav entry. |
| Solutions (outcome pages) | `lib/solutions.ts` | Outcome/problem pages (e.g. Backyard Transformations); each generates a page + nav entry. |
| Cities & neighbourhoods | `lib/areas.ts` | Add/edit cities; each generates a city page + city×service pages. |
| Local page copy variation | `lib/local.ts` | Per-city voice + the varied paragraph generator that keeps all 240 city×service pages unique. |
| FAQ bank | `lib/faqbank.ts` | Research-based questions shown at the bottom of pages (with FAQPage schema). |
| Blog posts | `lib/blog.ts` | Add cost guides / comparisons; each generates a post. |
| Testimonials | `lib/content.ts` | ⚠️ Replace the placeholder reviews with **real** ones (schema only uses aggregate). |

### Wire up the quote form (email leads)

The form has **two delivery paths**, chosen by `site.formEndpoint` in `lib/site.ts`:

**A) Basin (default, in use for this client)** — `formEndpoint` is set to a Basin form URL, so the
form POSTs directly to Basin, which stores every lead in a dashboard and can email a notification.
Free, no domain needed. Change the URL to point at a different Basin form.

**B) Resend (recommended for an agency with multiple clients)** — leave `formEndpoint` empty (`''`)
so the form POSTs to our serverless route (`app/api/quote/route.ts`), which emails the lead via the
**Resend API** from your own verified domain straight to the client — **no email routes through you,
and it's reusable across every client site.**

To use Resend:
1. Sign up free at **[resend.com](https://resend.com)** → **Add Domain** → enter a domain **you own**
   (e.g. `yourdomain.com`) → add the DNS records it shows you at your registrar. **One-time; reuse it
   for all clients.** (Resend uses a send-only subdomain, so it won't affect your normal email.)
2. Create an **API key** (starts with `re_`).
3. In `lib/site.ts`, set `formEndpoint: ''`.
4. In **Vercel → Settings → Environment Variables** set (server-side):

   | Env var | Value |
   |---|---|
   | `RESEND_API_KEY` | your `re_...` key |
   | `LEAD_FROM` | an address on your verified domain, e.g. `Website Leads <leads@yourdomain.com>` |
   | `LEAD_TO` | this client's inbox, e.g. `tridancontractor@gmail.com` |

5. Redeploy. **For each new client, reuse the same key/domain — only `LEAD_TO` changes.**

Resend's free plan (3,000 emails/month, 100/day, 1 domain) is far more than a lead form needs, and
the customer's email is set as **reply-to**. A hidden honeypot blocks bots, and if the route isn't
configured or a send fails, the form falls back to opening the visitor's email app so a lead is never
lost.

### Images
Service/area imagery uses the **Unsplash CDN** (fast AVIF/WebP). Swap in your **own project photos**
for the best SEO and trust — replace the Unsplash IDs in `lib/*.ts`, or change `components/Photo.tsx`
to point at `/public` images. Real before/after photos convert best.

---

## 🔎 SEO built in

- **Programmatic City × Service matrix** — every service × every city gets its own **uniquely-composed** local landing page (varied copy per page, no duplicate/doorway content).
- **Solutions pages** — outcome/intent landing pages kept distinct from service pages to avoid keyword cannibalization (services are transactional, solutions are outcome-first, linked one-directionally).
- **Research-driven FAQ** at the bottom of every page, each with `FAQPage` schema.
- **JSON-LD schema** — `GeneralContractor`/`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`,
  `Article`, `AggregateRating` (`lib/schema.ts`).
- **Per-page metadata** — titles, meta descriptions, canonical URLs, Open Graph & Twitter cards.
- **`sitemap.xml`** (`app/sitemap.ts`) and **`robots.txt`** (`app/robots.ts`) generated automatically.
- **Core Web Vitals** — `next/font`, priority hero images, lazy-loaded gallery, minimal JS.
- `en-CA` locale, semantic headings, accessible nav, sticky mobile call/text/quote bar.

## 🗺️ Service-area strategy (important for ranking)

The site covers **35 municipalities** across the GTA and Golden Horseshoe (Milton is the home base and flagship). To stay on the right side of Google's 2026 scaled-content / doorway rules, cities are **tiered** in `lib/areas.ts`:

- **Tier 1 & 2** (`matrixCities`) get the full **city × service** matrix — genuinely unique local pages with real neighbourhoods, permit bodies, conservation authorities and price context.
- **Tier 3** (outer-ring / lower-demand) get **one strong city hub page** that links to the core service pages, instead of thin per-service permutations. Their `/service-areas/[city]/[service]` URLs intentionally 404 (`dynamicParams = false`).

To promote a Tier 3 city, change its `tier` to `2` and add a `cityContext` line in `lib/local.ts`. To keep quality high, only give a city the matrix if you can serve it and its pages carry real local detail.

**Rollout tip:** Google indexes quality, not volume. In Search Console, submit the sitemap, then watch the Page Indexing report. If a batch of city pages shows "Crawled – currently not indexed," that's a quality signal — strengthen or consolidate those pages rather than forcing indexation.

## 📈 Post-launch checklist (drives ranking)

1. Verify the site in **Google Search Console** and submit `sitemap.xml`.
2. Create/optimize a **Google Business Profile** (primary category: *General contractor*) with the
   exact same Name/Address/Phone as `lib/site.ts`. List **Milton first** in service areas, then
   Oakville, Burlington, Halton Hills, Mississauga. Encourage reviews that name the neighbourhood
   and project ("our deck in Coates"). This is the biggest local-ranking lever for Milton.
3. Build **HomeStars, Houzz, BBB, Bing Places** profiles with matching NAP.
4. Start a **review-generation** habit and reply to every review.
5. Replace placeholder stats/testimonials/photos with real ones.

---

© 2026 Tridan Contracting.
