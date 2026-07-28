// ---------------------------------------------------------------------------
// Central site / business configuration (NAP + brand).
// Keep this in exact sync with your Google Business Profile and citations.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Tridan Contracting',
  legalName: 'Tridan Contracting',
  shortName: 'Tridan',
  tagline: 'Outdoor Living • Renovations • Landscaping',
  // Update this to your real deployed domain before/after going live on Vercel.
  url: 'https://www.tridancontracting.ca',
  description:
    'Tridan Contracting is a licensed, insured general contractor based in Milton and serving the GTA and Golden Horseshoe. We design and build outdoor living spaces, complete interior renovations, landscaping, and electrical and plumbing. One contractor for your whole property.',

  // --- NAP (Name / Address / Phone) — must match GBP exactly ---
  phone: '416-700-4230',
  phoneHref: 'tel:+14167004230',
  phoneDisplay: '(416) 700-4230',
  sms: 'sms:+14167004230',
  email: 'tridancontractor@gmail.com',
  emailHref: 'mailto:tridancontractor@gmail.com',

  // --- Quote form delivery ---
  // Empty = the form posts to our serverless route (app/api/quote), which emails
  // the lead via Resend (LEAD_FROM/LEAD_TO are set in that route file; the secret
  // RESEND_API_KEY is a Vercel env var). Set a Basin form URL here instead to
  // route leads to Basin. Either way a mailto fallback runs if a send fails.
  formEndpoint: '',

  address: {
    // Home base is Milton, ON. Add the street address here when you list one
    // publicly (it should match your Google Business Profile exactly).
    locality: 'Milton',
    region: 'ON',
    regionName: 'Ontario',
    postalCode: '',
    country: 'CA',
  },
  geo: { lat: 43.5183, lng: -79.8774 }, // Milton, ON (home base)

  hours: [
    { day: 'Monday', open: '07:00', close: '19:00' },
    { day: 'Tuesday', open: '07:00', close: '19:00' },
    { day: 'Wednesday', open: '07:00', close: '19:00' },
    { day: 'Thursday', open: '07:00', close: '19:00' },
    { day: 'Friday', open: '07:00', close: '19:00' },
    { day: 'Saturday', open: '08:00', close: '17:00' },
    { day: 'Sunday', open: 'closed', close: 'closed' },
  ],

  // Update these when the profiles exist.
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    houzz: 'https://www.houzz.com/',
    homestars: 'https://homestars.com/',
    google: 'https://www.google.com/maps',
  },

  // Trust / proof — replace numbers with verified figures before launch.
  stats: {
    yearsInBusiness: '15+',
    projectsCompleted: '850+',
    homeownersServed: '500+',
    reviewRating: '5.0',
    reviewCount: '120+',
    warrantyYears: '5',
    liabilityInsured: '$5M',
  },

  badges: [
    'Licensed & Insured',
    'WSIB Covered',
    '$5M Liability Insured',
    '5-Year Workmanship Warranty',
    'Free On-Site Estimates',
  ],
};

export type Site = typeof site;
