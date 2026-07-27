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

### Wire up the quote form (email leads via your own SMTP)
The form POSTs to a serverless route (`app/api/quote/route.ts`) that emails the lead **from your own
mailbox** (Outlook / GoDaddy / any SMTP) to wherever you choose — no third-party form service, no
recipient verification. Set these as **server-side env vars in Vercel** (Settings → Environment
Variables), then redeploy:

| Env var | What to put | Example |
|---|---|---|
| `SMTP_HOST` | your mail server | GoDaddy Pro Email: `smtpout.secureserver.net` · Microsoft 365: `smtp.office365.com` |
| `SMTP_PORT` | `465` (SSL) or `587` (TLS) | `465` |
| `SMTP_USER` | the full email address to send **from** | `you@yourdomain.com` |
| `SMTP_PASS` | that mailbox's password (or an app password if MFA is on) | — |
| `LEAD_TO` | where leads should be delivered | `tridancontractor@gmail.com` |
| `LEAD_FROM` | *(optional)* from-address if different from `SMTP_USER` | — |

The customer's email is set as **reply-to**, so hitting Reply answers the lead. A hidden honeypot
field blocks bots. Until the env vars are set (or if a send fails), the form falls back to opening
the visitor's email app, so a lead is never lost.

**Note for Microsoft 365 / Outlook:** Microsoft disables SMTP AUTH by default. Enable
"Authenticated SMTP" for the mailbox in the Microsoft 365 admin center (and use an app password if
MFA is on). GoDaddy's own *Professional Email* has SMTP enabled out of the box.

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
