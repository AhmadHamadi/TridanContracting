// ---------------------------------------------------------------------------
// Shared content: image helper, testimonials, global FAQs, nav config.
// NOTE: Testimonials below are illustrative placeholders, replace with real,
// verifiable reviews before launch (and only use real reviews in schema).
// ---------------------------------------------------------------------------

// Build an Unsplash CDN URL from a photo id. Unsplash serves optimized
// AVIF/WebP via ?auto=format, so this is CDN-fast and Core-Web-Vitals friendly.
export function unsplash(id: string, w = 1600, q = 68): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export type Testimonial = {
  name: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Lorne Park, Mississauga',
    service: 'Composite Deck & Pergola',
    rating: 5,
    quote:
      'Tridan transformed our backyard into a space we use every single day. The crew was clean, on time, and the deck framing was clearly built to last. Worth every dollar.',
  },
  {
    name: 'David & Priya R.',
    location: 'Glen Abbey, Oakville',
    service: 'Kitchen Renovation',
    rating: 5,
    quote:
      'One contractor, one price, zero surprises. They handled permits, cabinets, counters and all the finishing. Our kitchen looks like it belongs in a magazine.',
  },
  {
    name: 'Michael T.',
    location: 'Leaside, Toronto',
    service: 'Interlock Patio & Retaining Wall',
    rating: 5,
    quote:
      'Three winters later and the interlock hasn’t shifted a millimetre. You can tell they didn’t cut corners on the base. Highly recommend.',
  },
  {
    name: 'Jennifer K.',
    location: 'Brooklin, Whitby',
    service: 'Basement Finishing',
    rating: 5,
    quote:
      'They turned our cold, unfinished basement into a warm legal suite that now brings in rental income. Professional from the first quote to the final walkthrough.',
  },
  {
    name: 'Andrew P.',
    location: 'The Kingsway, Etobicoke',
    service: 'Interlock Driveway & Walkway',
    rating: 5,
    quote:
      'The crew was meticulous with the base and the cuts, and the finished driveway is flawless. Clean site every day and done on schedule. Couldn’t be happier.',
  },
  {
    name: 'Lisa & Mark H.',
    location: 'Roseland, Burlington',
    service: 'Backyard Landscape Build',
    rating: 5,
    quote:
      'From grading and drainage to sod, gardens and lighting, they thought of everything. Our yard finally drains properly and looks stunning. Couldn’t be happier.',
  },
];

export type FaqItem = { q: string; a: string };

export const globalFaqs: FaqItem[] = [
  {
    q: 'What areas do you serve?',
    a: 'Tridan Contracting serves the Greater Toronto Area, including Toronto (North York, Scarborough, Etobicoke), Peel (Mississauga, Brampton, Caledon), Halton (Oakville, Burlington, Milton, Halton Hills) and Durham (Pickering, Ajax, Whitby, Oshawa, Clarington).',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Tridan is a licensed, fully insured general contractor with $5M liability coverage and WSIB. Every project is built to the Ontario Building Code, and we handle permits where required.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Absolutely. We provide free, no-obligation on-site consultations and detailed, fixed-price quotes so you know exactly what your project will cost, no hidden fees or surprise change orders.',
  },
  {
    q: 'Do you handle permits?',
    a: 'Yes. For decks, additions, basements, second suites and structural renovations, we prepare the drawings and manage the building permit application with your municipality as part of the project.',
  },
  {
    q: 'Is financing available?',
    a: 'Yes, we offer financing options so you can start your project now and pay over time (on approved credit). Ask us for details and we’ll walk you through the options for your budget.',
  },
  {
    q: 'What warranty do you provide?',
    a: 'Every project is backed by our written 5-year workmanship warranty, on top of any manufacturer warranties on materials and products.',
  },
  {
    q: 'How soon can you start?',
    a: 'It depends on the season and project scope. We book projects weeks in advance, especially in spring and summer, so the best move is to request your quote early to secure a spot in the schedule.',
  },
  {
    q: 'Do you clean up after the project?',
    a: 'Always. We keep a clean, safe job site throughout and finish with a full cleanup and detailed walkthrough, we treat your property like it’s our own.',
  },
];
