// ---------------------------------------------------------------------------
// Service catalog, powers /services, /services/[service], nav mega-menu,
// city × service matrix and schema. Content is unique per service.
// ---------------------------------------------------------------------------

export type Category = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  image: string; // Unsplash photo id
  icon: 'outdoor' | 'reno' | 'paint' | 'landscape' | 'bolt';
};

export type ProcessStep = { title: string; body: string };

export type Service = {
  slug: string;
  category: string; // Category.slug
  name: string; // full page/H1 name, e.g. "Deck Building"
  navName: string; // short label for menus
  keyword: string; // primary SEO keyword root, e.g. "deck builders"
  excerpt: string; // 1-line card/summary + meta description base
  image: string; // Unsplash photo id
  gallery: string[]; // Unsplash photo ids
  heroHeadline: string;
  intro: string[]; // paragraphs
  benefits: string[]; // "why choose" bullets
  inclusions: string[]; // what's included / scope
  materials?: string[];
  priceRange: string;
  timeline: string;
  process?: ProcessStep[]; // optional override of default
  faqs: { q: string; a: string }[];
  related: string[]; // service slugs
};

export const categories: Category[] = [
  {
    slug: 'outdoor-living',
    name: 'Outdoor Living',
    short: 'Outdoor Living',
    blurb:
      'Decks, patios, interlock, pergolas, outdoor kitchens and more, custom backyards built to be lived in.',
    image: '1696846912973-3233cc80bf86',
    icon: 'outdoor',
  },
  {
    slug: 'renovations',
    name: 'Home Renovations',
    short: 'Renovations',
    blurb:
      'Kitchens, bathrooms, basements and additions, full-service interior renovations, permits included.',
    image: '1556911220-bff31c812dba',
    icon: 'reno',
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    short: 'Landscaping',
    blurb:
      'Complete landscape design and build, grading, sod, gardens, lighting and drainage done right.',
    image: '1749803915455-a7642520d0d3',
    icon: 'landscape',
  },
  {
    slug: 'electrical-plumbing',
    name: 'Electrical & Plumbing',
    short: 'Electrical & Plumbing',
    blurb:
      'Licensed electrical and plumbing, from pot lights and panel upgrades to fixtures, repiping and rough-ins.',
    image: '1758101755915-462eddc23f57',
    icon: 'bolt',
  },
];

const defaultProcess: ProcessStep[] = [
  {
    title: 'Free On-Site Consultation',
    body: 'We visit your property, listen to how you want to use the space, take measurements, and talk through ideas and budget, no pressure, no obligation.',
  },
  {
    title: 'Design & Fixed Quote',
    body: 'You receive a clear design direction, material options, and a detailed fixed-price quote with no hidden fees. We handle permits and drawings where required.',
  },
  {
    title: 'Build & Communication',
    body: 'Our own crews do the work to code, with a dedicated project lead who keeps you updated daily and a clean, respected job site from start to finish.',
  },
  {
    title: 'Walkthrough & Warranty',
    body: 'We finish with a detailed walkthrough, address every last detail, and back the work with our written 5-year workmanship warranty.',
  },
];

export const services: Service[] = [
  // ---------------------------- OUTDOOR LIVING ----------------------------
  {
    slug: 'deck-building',
    category: 'outdoor-living',
    name: 'Deck Building',
    navName: 'Decks',
    keyword: 'deck builders',
    excerpt:
      'Custom composite and cedar decks engineered for GTA winters and built to last decades.',
    image: '1623195372782-57a1486af9a9',
    gallery: ['1623195372782-57a1486af9a9', '1780838446281-9394772d07a8', '1527359443443-84a48aec73d2'],
    heroHeadline: 'Custom Decks Built to Be Lived On',
    intro: [
      'A great deck is the difference between a backyard you look at and one you actually live in. Tridan designs and builds custom decks across the Greater Toronto Area, from low, wraparound composite decks to multi-level cedar structures with built-in seating, planters and privacy screens.',
      'Every deck we build starts with proper footings below the frost line and a code-compliant, engineered frame. That structure is what separates a deck that stays rock-solid for 25 years from one that sags, twists and rots after a few GTA freeze-thaw cycles. You never see the framing, but it is the most important thing we build.',
    ],
    benefits: [
      'Frost-depth footings and engineered framing built to the Ontario Building Code',
      'Composite (Trex, TimberTech), PVC and premium cedar options',
      'Hidden fasteners for a clean, splinter-free, screw-free surface',
      'Integrated lighting, railings, benches, pergolas and skirting',
      'Permit drawings and applications handled for you',
    ],
    inclusions: [
      'Site assessment, layout and 3D design direction',
      'Permit drawings and application (where required)',
      'Concrete footings / helical piles below frost line',
      'Pressure-treated structural frame with proper ledger flashing',
      'Composite, PVC or cedar decking with hidden fasteners',
      'Railings, stairs, fascia and skirting',
      'Optional: low-voltage lighting, privacy screens, benches, pergola',
      'Full site cleanup and 5-year workmanship warranty',
    ],
    materials: ['Trex composite', 'TimberTech PVC', 'Western red cedar', 'Pressure-treated pine', 'Aluminum & glass railings'],
    priceRange: '$14,000 – $60,000+',
    timeline: '1 – 3 weeks',
    faqs: [
      { q: 'Do I need a permit to build a deck in the GTA?', a: 'In most GTA municipalities, decks more than 24 inches above grade or attached to the house require a building permit. Tridan prepares the drawings and handles the permit application for you as part of the project.' },
      { q: 'Composite or wood, which is better?', a: 'Composite (like Trex or TimberTech) costs more upfront but needs no staining, resists fading and lasts 25–30 years, ideal for busy families. Cedar is beautiful and lower-cost initially but needs re-staining every 2–3 years. We help you choose based on budget and how much maintenance you want.' },
      { q: 'How long does a deck take to build?', a: 'A standard deck takes about 1–2 weeks once permits are in hand; larger multi-level or wraparound decks can take 3 weeks. Permit approval timelines vary by city and are on top of the build.' },
    ],
    related: ['interlocking-patios', 'pergolas-gazebos', 'fences-gates'],
  },
  {
    slug: 'interlocking-patios',
    category: 'outdoor-living',
    name: 'Interlocking & Patios',
    navName: 'Interlock & Patios',
    keyword: 'interlocking contractors',
    excerpt:
      'Interlock patios, walkways, driveways and pool decks with a proper compacted base that never heaves.',
    image: '1780838446281-9394772d07a8',
    gallery: ['1780838446281-9394772d07a8', '1527359443443-84a48aec73d2', '1762117360868-d4e757073d45'],
    heroHeadline: 'Interlock & Stone Patios That Stay Level',
    intro: [
      'Interlocking pavers create some of the most durable, beautiful outdoor surfaces you can build, patios, walkways, driveways and pool decks that shrug off GTA winters. But interlock is only as good as the base beneath it, and that is where most installers cut corners.',
      'Tridan builds every interlock project on a properly excavated and compacted base with the right depth of ¾-inch clear or granular, laid in lifts and compacted so your pavers never sink, heave or wave. The result is a surface that still looks laid-yesterday a decade from now.',
    ],
    benefits: [
      'Deep excavation and compacted base engineered for freeze-thaw',
      'Unilock, Techo-Bloc and Permacon authorized product lines',
      'Polymeric sand joints that lock pavers and resist weeds and ants',
      'Patios, walkways, driveways, steps and pool surrounds',
      'Optional built-in seat walls, pillars, lighting and fire features',
    ],
    inclusions: [
      'Excavation and grading for proper drainage away from the home',
      'Geotextile and compacted granular base built in lifts',
      'Premium interlock pavers or natural stone of your choice',
      'Cut-in borders, banding and pattern detailing',
      'Polymeric sand and edge restraint',
      'Optional seat walls, steps, pillars and lighting',
      'Cleanup, final compaction and 5-year workmanship warranty',
    ],
    materials: ['Unilock', 'Techo-Bloc', 'Permacon', 'Natural flagstone', 'Porcelain pavers'],
    priceRange: '$18 – $45 / sq ft installed',
    timeline: '1 – 2 weeks',
    faqs: [
      { q: 'Why does interlock heave or sink?', a: 'Almost always a base failure, too shallow, wrong material, or not compacted in lifts. Water gets trapped, freezes, and lifts the pavers. We over-build the base and grade for drainage so this never happens.' },
      { q: 'How do I stop weeds between the pavers?', a: 'We finish every joint with polymeric sand, which hardens to lock pavers together and dramatically reduces weeds and ant activity compared to regular sand.' },
      { q: 'Can you match my existing interlock?', a: 'Often yes, we identify the manufacturer and product line and source a match, or design a complementary border so old and new blend intentionally.' },
    ],
    related: ['deck-building', 'retaining-walls', 'landscape-design'],
  },
  {
    slug: 'pergolas-gazebos',
    category: 'outdoor-living',
    name: 'Pergolas & Gazebos',
    navName: 'Pergolas & Gazebos',
    keyword: 'pergola builders',
    excerpt:
      'Custom pergolas, gazebos and cabanas, shade, structure and a true outdoor room.',
    image: '1527359443443-84a48aec73d2',
    gallery: ['1527359443443-84a48aec73d2', '1762117360868-d4e757073d45', '1761637823941-0ffae96ec487'],
    heroHeadline: 'Shade, Structure & Outdoor Rooms',
    intro: [
      'A pergola or gazebo turns a patio into a destination, a defined outdoor room with shade, ambiance and real architectural presence. Tridan builds custom cedar, aluminum and composite structures anchored properly to hold up to wind and snow load.',
      'Whether you want a louvered aluminum pergola with a motorized roof over the hot tub or a classic cedar gazebo with a shingled roof, we engineer it to the Ontario Building Code and integrate lighting, fans, screens and privacy walls so it works day and night, spring through fall.',
    ],
    benefits: [
      'Cedar, aluminum and low-maintenance composite options',
      'Louvered / motorized roof pergolas for sun and rain control',
      'Proper footings and engineered anchoring for wind and snow',
      'Integrated lighting, fans, heaters, screens and privacy walls',
      'Designed to match your home and existing outdoor living space',
    ],
    inclusions: [
      'Design and structural layout',
      'Footings and code-compliant anchoring',
      'Cedar, aluminum or composite structure and roof',
      'Optional louvered/motorized roof, screens and privacy panels',
      'Integrated lighting and electrical rough-in (with licensed ESA connection)',
      'Staining/finishing and full cleanup',
    ],
    materials: ['Western red cedar', 'Powder-coated aluminum', 'Composite', 'Polycarbonate & louvered roofs'],
    priceRange: '$6,000 – $30,000+',
    timeline: '3 days – 2 weeks',
    faqs: [
      { q: 'Do pergolas need a permit?', a: 'Freestanding pergolas under a certain size often do not, but attached structures and larger gazebos usually do. We confirm with your municipality and handle any permit needed.' },
      { q: 'Can a pergola keep out rain?', a: 'Yes, a louvered aluminum pergola with a motorized roof closes to shed rain, and polycarbonate-roofed structures give full cover. Open cedar pergolas are for shade and ambiance rather than full rain protection.' },
      { q: 'Will it stand up to snow load?', a: 'We engineer footings and framing for Ontario snow and wind loads, so your structure stays safe and solid year-round.' },
    ],
    related: ['deck-building', 'outdoor-kitchens', 'interlocking-patios'],
  },
  {
    slug: 'outdoor-kitchens',
    category: 'outdoor-living',
    name: 'Outdoor Kitchens',
    navName: 'Outdoor Kitchens',
    keyword: 'outdoor kitchen builders',
    excerpt:
      'Built-in BBQs, stone bars, pizza ovens and weatherproof outdoor kitchens for real entertaining.',
    image: '1762117360868-d4e757073d45',
    gallery: ['1762117360868-d4e757073d45', '1761637823941-0ffae96ec487', '1696846912973-3233cc80bf86'],
    heroHeadline: 'Entertain in a True Outdoor Kitchen',
    intro: [
      'An outdoor kitchen is the centrepiece every backyard gathering ends up around. Tridan builds weatherproof, built-in outdoor kitchens, from a clean stone bar with a built-in gas grill to full setups with a pizza oven, side burners, fridge, sink and bar seating.',
      'We build on a solid masonry or engineered frame, run the gas, water and electrical correctly and to code, and finish in stone, porcelain or stucco that stands up to GTA weather. The result is a durable, integrated kitchen, not a cart pushed against a wall.',
    ],
    benefits: [
      'Built-in gas grills, side burners, pizza ovens, fridges and sinks',
      'Masonry or engineered frames finished in stone, porcelain or stucco',
      'Licensed gas, plumbing and ESA electrical connections',
      'Bar seating, counters and storage designed for how you host',
      'Integrated with your patio, pergola and lighting',
    ],
    inclusions: [
      'Design and layout matched to your patio and entertaining style',
      'Structural frame and weatherproof cladding',
      'Gas line, water and electrical rough-in with licensed connections',
      'Appliance supply/install (grill, burners, fridge, oven as chosen)',
      'Stone or porcelain countertops and finishes',
      'Lighting and final cleanup',
    ],
    materials: ['Natural stone', 'Porcelain slab counters', 'Stainless appliances', 'Stucco & masonry'],
    priceRange: '$12,000 – $60,000+',
    timeline: '1 – 3 weeks',
    faqs: [
      { q: 'Do I need permits for an outdoor kitchen?', a: 'Gas and electrical work must be done by licensed trades with the proper permits (TSSA gas, ESA electrical). Tridan coordinates all of it so the whole build is inspected and safe.' },
      { q: 'Can I use my natural gas line?', a: 'Usually yes, we can tie into your home’s natural gas supply if it has capacity, or run a new line. Propane is also an option where gas is not available.' },
      { q: 'Will the counters survive winter?', a: 'We use freeze-thaw-rated stone and porcelain and detail everything to drain, so your outdoor kitchen overwinters without cracking or damage.' },
    ],
    related: ['pergolas-gazebos', 'interlocking-patios', 'deck-building'],
  },
  {
    slug: 'fences-gates',
    category: 'outdoor-living',
    name: 'Fences & Gates',
    navName: 'Fences & Gates',
    keyword: 'fence installers',
    excerpt:
      'Privacy fences, gates and screens built plumb, solid and to your municipality’s bylaws.',
    image: '1601042860368-debed90085e0',
    gallery: ['1761637823941-0ffae96ec487', '1696846912973-3233cc80bf86', '1772040942277-b194d9d0b648'],
    heroHeadline: 'Privacy Fences Built to Stand Straight',
    intro: [
      'A fence should still be plumb and solid ten years after it goes in, not leaning, sagging or grey and split. Tridan installs custom privacy fences, gates and screens with posts set in concrete below the frost line and quality lumber or maintenance-free materials.',
      'We build to your municipality’s height and setback bylaws, work with your survey and neighbours where shared, and finish with gates that swing true and latch cleanly for years.',
    ],
    benefits: [
      'Posts set in concrete below the frost line, no leaning or heaving',
      'Wood, composite, aluminum and horizontal privacy styles',
      'Built to local height/setback bylaws and property lines',
      'Custom gates, arbours and integrated privacy screens',
      'Optional staining and post-cap lighting',
    ],
    inclusions: [
      'Layout to survey and bylaw compliance check',
      'Concrete-set posts below frost depth',
      'Fence panels in your chosen material and style',
      'Custom gates with quality hardware',
      'Optional staining, caps and lighting',
      'Old fence removal and disposal available',
    ],
    materials: ['Pressure-treated & cedar', 'Composite', 'Aluminum', 'Horizontal slat'],
    priceRange: '$45 – $120 / linear ft',
    timeline: '2 days – 1 week',
    faqs: [
      { q: 'How tall can my fence be?', a: 'Most GTA municipalities allow up to 2.0–2.5m in rear yards and lower in front yards, but it varies by city and corner lots. We confirm your local bylaw before building.' },
      { q: 'Who owns a shared fence?', a: 'Fences on the property line are typically shared. We can build to the line and, where you like, coordinate a cost-share conversation with your neighbour.' },
      { q: 'Will the posts heave in winter?', a: 'Not when they’re set in concrete below the frost line, which is exactly how we install them, the single biggest reason fences fail early.' },
    ],
    related: ['deck-building', 'landscape-design', 'retaining-walls'],
  },
  {
    slug: 'retaining-walls',
    category: 'outdoor-living',
    name: 'Retaining Walls',
    navName: 'Retaining Walls',
    keyword: 'retaining wall contractors',
    excerpt:
      'Engineered retaining and garden walls with proper drainage that hold back grade for good.',
    image: '1761637823941-0ffae96ec487',
    gallery: ['1696846912973-3233cc80bf86', '1772040942277-b194d9d0b648', '1654546493292-7df731737090'],
    heroHeadline: 'Retaining Walls Engineered to Hold',
    intro: [
      'Retaining walls do serious structural work, holding back tonnes of soil and water, so they have to be built right or they bulge, crack and fail. Tridan builds segmental block and natural stone retaining walls with the engineered base, geogrid reinforcement and drainage they actually need.',
      'From low garden walls and terraced planting beds to tall grade-change walls, we design for the load, install proper weeping and drainage stone behind the wall, and finish with caps and detailing that look built to last, because they are.',
    ],
    benefits: [
      'Engineered base, geogrid and drainage for real structural loads',
      'Segmental block (Unilock/Techo-Bloc) and natural stone',
      'Terraced walls, garden walls and grade-change solutions',
      'Weeping tile and clear-stone backfill that relieves water pressure',
      'Integrated steps, seat walls, pillars and lighting',
    ],
    inclusions: [
      'Excavation and compacted, level base',
      'Geogrid soil reinforcement where required by wall height',
      'Drainage stone and weeping tile behind the wall',
      'Segmental block or natural stone build with caps',
      'Backfill, grading and restoration',
      'Cleanup and 5-year workmanship warranty',
    ],
    materials: ['Unilock', 'Techo-Bloc', 'Armour stone', 'Natural ledgerock'],
    priceRange: '$60 – $150 / face ft',
    timeline: '3 days – 2 weeks',
    faqs: [
      { q: 'Do retaining walls need a permit?', a: 'Walls over roughly 1m (or near property lines / public areas) usually require a permit and sometimes engineering. We confirm and handle it based on your wall’s height and location.' },
      { q: 'Why do retaining walls fail?', a: 'Two reasons: no drainage behind the wall (water pressure pushes it out) and no geogrid reinforcement on taller walls. We build both in as standard.' },
      { q: 'Can a retaining wall include steps and seating?', a: 'Absolutely, we routinely integrate steps, seat walls, pillars and lighting so the wall becomes part of your usable outdoor space.' },
    ],
    related: ['interlocking-patios', 'landscape-design', 'fences-gates'],
  },

  // ------------------------------ RENOVATIONS ------------------------------
  {
    slug: 'kitchen-renovations',
    category: 'renovations',
    name: 'Kitchen Renovations',
    navName: 'Kitchens',
    keyword: 'kitchen renovations',
    excerpt:
      'Full kitchen renovations, layout, cabinetry, stone counters and finishes managed end to end.',
    image: '1600489000022-c2086d79f9d4',
    gallery: ['1600489000022-c2086d79f9d4', '1584622650111-993a426fbf0a', '1765959617888-30837a158667'],
    heroHeadline: 'Kitchens That Work Beautifully',
    intro: [
      'The kitchen is where your home’s value and daily life concentrate, so it is the renovation worth getting right. Tridan handles complete kitchen renovations across the GTA, from smart layout changes and cabinetry to quartz counters, tile, lighting and the plumbing and electrical behind the walls.',
      'You get one accountable contractor managing every trade, a realistic schedule, and a fixed price, no disappearing crews, no surprise change orders. We keep the site clean and livable and finish with a kitchen that functions as beautifully as it looks.',
    ],
    benefits: [
      'One contractor managing design, trades, permits and schedule',
      'Custom and semi-custom cabinetry with quartz/granite counters',
      'Layout changes, islands, pantries and better workflow',
      'Licensed plumbing, ESA electrical and pot-light packages',
      'Fixed-price quote with no hidden change orders',
    ],
    inclusions: [
      'Design, layout and material selection guidance',
      'Demolition and disposal',
      'Plumbing and electrical updates (licensed) and permits as needed',
      'Cabinetry, countertops and backsplash',
      'Flooring, lighting and trim',
      'Appliance install coordination and final walkthrough',
    ],
    materials: ['Custom cabinetry', 'Quartz & granite', 'Porcelain tile', 'Hardwood & LVP'],
    priceRange: '$30,000 – $90,000+',
    timeline: '4 – 8 weeks',
    faqs: [
      { q: 'Can I use my kitchen during the renovation?', a: 'Not the kitchen itself, but we can help set up a temporary kitchenette and we seal off the work area to keep dust out of the rest of your home. Most kitchens take 4–8 weeks.' },
      { q: 'Do you move walls and plumbing?', a: 'Yes, layout changes are often where the biggest gains are. We handle structural changes, plumbing and electrical relocation with the right permits and licensed trades.' },
      { q: 'Will you help with design and selections?', a: 'Absolutely. We guide you through layout, cabinetry, counters, tile and finishes so the choices work together and stay on budget.' },
    ],
    related: ['bathroom-renovations', 'basement-finishing', 'flooring'],
  },
  {
    slug: 'bathroom-renovations',
    category: 'renovations',
    name: 'Bathroom Renovations',
    navName: 'Bathrooms',
    keyword: 'bathroom renovations',
    excerpt:
      'Spa-like bathroom renovations with proper waterproofing, tile and fixtures done to last.',
    image: '1584622650111-993a426fbf0a',
    gallery: ['1584622650111-993a426fbf0a', '1765959617888-30837a158667', '1587582423116-ec07293f0395'],
    heroHeadline: 'Bathrooms Built to Last & Relax In',
    intro: [
      'A bathroom is small, but it is the most technically demanding room in the house, get the waterproofing wrong and you pay for it for years. Tridan renovates bathrooms the right way, with proper membranes, sloped shower bases and quality tile work that stays sealed and beautiful.',
      'From a clean powder-room refresh to a full spa ensuite with a curbless shower, freestanding tub, heated floors and custom vanity, we manage the plumbing, electrical, tile and finishes as one accountable team.',
    ],
    benefits: [
      'Proper waterproofing membranes and correctly sloped shower bases',
      'Curbless showers, freestanding tubs, custom vanities',
      'Heated tile floors and modern ventilation',
      'Licensed plumbing and ESA electrical',
      'Meticulous, level, sealed tile work',
    ],
    inclusions: [
      'Demolition and disposal',
      'Plumbing and electrical rough-in (licensed) and permits as needed',
      'Waterproofing membrane and shower base',
      'Tile, vanity, fixtures, glass and accessories',
      'Ventilation, lighting and heated floor (optional)',
      'Trim and final walkthrough',
    ],
    materials: ['Porcelain & natural stone tile', 'Schluter/Kerdi waterproofing', 'Custom vanities', 'Frameless glass'],
    priceRange: '$15,000 – $45,000+',
    timeline: '2 – 5 weeks',
    faqs: [
      { q: 'How long does a bathroom renovation take?', a: 'A typical full bathroom takes 2–4 weeks; larger ensuites with custom tile and glass can run 4–5 weeks. We give you a day-by-day schedule up front.' },
      { q: 'How do you prevent leaks and mould?', a: 'We use full waterproofing systems (like Schluter/Kerdi) behind the tile, slope shower bases correctly, and install proper ventilation, the three things that stop leaks and mould.' },
      { q: 'Can you do a curbless / accessible shower?', a: 'Yes, barrier-free curbless showers, grab-bar blocking, comfort-height fixtures and non-slip tile are all part of what we build.' },
    ],
    related: ['kitchen-renovations', 'basement-finishing'],
  },
  {
    slug: 'basement-finishing',
    category: 'renovations',
    name: 'Basement Finishing',
    navName: 'Basements',
    keyword: 'basement finishing',
    excerpt:
      'Finished basements and legal secondary suites, warm, dry, code-compliant living space.',
    image: '1765959617888-30837a158667',
    gallery: ['1765959617888-30837a158667', '1587582423116-ec07293f0395', '1665507299417-0985dc338ec7'],
    heroHeadline: 'Turn Your Basement Into Real Living Space',
    intro: [
      'A finished basement is the most cost-effective square footage you can add to your home, a rec room, home theatre, gym, office, or a legal income-generating suite. Tridan finishes basements that are warm, dry and code-compliant, not damp afterthoughts.',
      'We start with moisture control and proper insulation, frame and wire to code, and finish with the flooring, bathrooms, kitchenettes and egress that turn a cold concrete box into space your family actually uses, or rents out.',
    ],
    benefits: [
      'Moisture control, insulation and warm subfloor systems',
      'Legal secondary suites with proper egress and fire separation',
      'Rec rooms, theatres, gyms, offices and bedrooms',
      'Bathrooms, kitchenettes and wet bars',
      'Permits, licensed trades and inspections handled',
    ],
    inclusions: [
      'Design, layout and permit drawings',
      'Moisture management and insulation',
      'Framing, electrical and plumbing (licensed)',
      'Egress windows and fire-code separation for suites',
      'Drywall, flooring, trim and doors',
      'Bathroom / kitchenette build-out as needed',
    ],
    materials: ['Moisture-resistant subfloor', 'LVP & carpet', 'Pot lighting', 'Egress windows'],
    priceRange: '$35,000 – $95,000+',
    timeline: '4 – 10 weeks',
    faqs: [
      { q: 'Can I add a legal basement apartment?', a: 'In many GTA homes, yes. A legal second suite needs proper ceiling height, egress, fire separation, and often a separate entrance. We confirm feasibility and build to code with permits.' },
      { q: 'How do you keep a finished basement dry?', a: 'We address grading and any water intrusion first, then use moisture-resistant subfloors, appropriate insulation and vapour control so the space stays warm and dry.' },
      { q: 'Do I need a permit to finish my basement?', a: 'Yes, finishing a basement requires a building permit, and adding a suite requires additional approvals. We handle the drawings, applications and inspections.' },
    ],
    related: ['home-additions', 'bathroom-renovations', 'flooring'],
  },
  {
    slug: 'home-additions',
    category: 'renovations',
    name: 'Home Additions',
    navName: 'Additions',
    keyword: 'home addition contractors',
    excerpt:
      'Additions, second storeys and garden suites, more space without the cost of moving.',
    image: '1587582423116-ec07293f0395',
    gallery: ['1587582423116-ec07293f0395', '1665507299417-0985dc338ec7', '1620626011761-996317b8d101'],
    heroHeadline: 'More Space Without Moving',
    intro: [
      'When your home no longer fits your life but you love your neighbourhood, an addition is the answer. Tridan designs and builds home additions, second-storey additions, in-law suites and garden/laneway suites that blend seamlessly with your existing home.',
      'These are major projects, so we manage them like one, architectural drawings, engineering, permits, foundation, framing, and a watertight tie-in to your existing structure, all under one contract with clear communication throughout.',
    ],
    benefits: [
      'Ground-floor additions, second storeys and bump-outs',
      'In-law suites, garden suites and laneway homes',
      'Architectural drawings, engineering and permits managed',
      'Seamless rooflines, siding and interior tie-ins',
      'One accountable contractor from drawings to finish',
    ],
    inclusions: [
      'Design, architectural drawings and structural engineering',
      'Permit applications and approvals',
      'Foundation, framing and roof tie-in',
      'Mechanical, electrical and plumbing',
      'Insulation, drywall, flooring and finishes',
      'Exterior matching and full interior completion',
    ],
    materials: ['Engineered framing', 'Matching siding/brick', 'Energy-code insulation', 'Custom finishes'],
    priceRange: '$90,000 – $400,000+',
    timeline: '3 – 8 months',
    faqs: [
      { q: 'How long does a home addition take?', a: 'Design, engineering and permits typically take 2–4 months before construction, and the build runs 3–6 months depending on size. We give you a full timeline before you commit.' },
      { q: 'Can you build a garden or laneway suite?', a: 'Yes, garden and laneway suites are increasingly permitted across the GTA. We assess your lot, confirm zoning, and handle the design-through-build process.' },
      { q: 'Will the addition match my house?', a: 'That’s the goal, we match rooflines, brick/siding, windows and interior finishes so the addition looks original, not bolted on.' },
    ],
    related: ['basement-finishing', 'kitchen-renovations'],
  },
  {
    slug: 'flooring',
    category: 'renovations',
    name: 'Flooring Installation',
    navName: 'Flooring',
    keyword: 'flooring installers',
    excerpt:
      'Hardwood, engineered, luxury vinyl and tile flooring installed flat, tight and built to last.',
    image: '1665507299417-0985dc338ec7',
    gallery: ['1665507299417-0985dc338ec7', '1620626011761-996317b8d101', '1648475236583-2e25a6cbf3bd'],
    heroHeadline: 'Flooring Installed Right the First Time',
    intro: [
      'New flooring transforms a home faster than almost any other upgrade, but only when the subfloor prep and installation are done properly. Tridan installs hardwood, engineered wood, luxury vinyl plank and tile with the levelling, moisture control and acclimation that prevent gaps, cupping and cracked grout later.',
      'From a single room to a whole-home re-floor, we handle removal, prep, install, transitions and trim, leaving you clean, tight, flat floors that look and feel like they belong.',
    ],
    benefits: [
      'Hardwood, engineered, LVP and tile installation',
      'Subfloor levelling, moisture control and proper acclimation',
      'Clean transitions, thresholds and matching trim',
      'Old flooring removal and disposal',
      'Dust-controlled, tidy installation',
    ],
    inclusions: [
      'Removal and disposal of existing flooring',
      'Subfloor inspection, levelling and prep',
      'Material acclimation and professional installation',
      'Transitions, thresholds and quarter-round/baseboard',
      'Cleanup and final inspection',
    ],
    materials: ['Hardwood', 'Engineered wood', 'Luxury vinyl plank', 'Porcelain & ceramic tile'],
    priceRange: '$4 – $16 / sq ft installed',
    timeline: '2 days – 2 weeks',
    faqs: [
      { q: 'Hardwood or luxury vinyl, which should I choose?', a: 'Hardwood adds the most value and can be refinished; luxury vinyl is waterproof, kid- and pet-friendly, and great for basements and high-traffic areas. We help you match material to room and budget.' },
      { q: 'Do you fix uneven subfloors?', a: 'Yes, we level and prep the subfloor before installing. Skipping this is the main reason floors squeak, gap or crack, so we never do.' },
      { q: 'Can you match my existing hardwood?', a: 'In many cases we can source a close match and feather it in, or use a transition. We’ll assess your existing floor and give you honest options.' },
    ],
    related: ['kitchen-renovations', 'basement-finishing'],
  },
  {
    slug: 'tiling',
    category: 'renovations',
    name: 'Tiling',
    navName: 'Tiling',
    keyword: 'tile installers',
    excerpt:
      'Floor, wall and backsplash tiling with proper waterproofing and dead-level, tight-grout finishes.',
    image: '1620626011761-996317b8d101',
    gallery: ['1620626011761-996317b8d101', '1648475236583-2e25a6cbf3bd', '1609241506098-80fc37c6325f'],
    heroHeadline: 'Tile Work That Stays Sealed and Straight',
    intro: [
      'Great tile work is equal parts art and building science. It has to look flawless, with straight lines and even grout, and it has to be waterproofed and set correctly so it never cracks, lifts or lets water through. Tridan installs floor, wall and feature tile across the GTA to exactly that standard.',
      'From a kitchen backsplash to a full bathroom, heated tile floors to large-format porcelain and natural stone, we prep the substrate properly, use the right membranes and setting materials, and finish with clean, sealed grout lines that hold up for years.',
    ],
    benefits: [
      'Proper substrate prep and waterproofing membranes (Schluter and similar)',
      'Floors, walls, backsplashes, showers and feature walls',
      'Large-format porcelain, natural stone, mosaic and heated floors',
      'Dead-level layout with even, sealed grout lines',
      'Clean cuts, proper transitions and trim',
    ],
    inclusions: [
      'Substrate inspection, levelling and prep',
      'Waterproofing membrane where required',
      'Tile supply guidance and professional installation',
      'Grouting, sealing and silicone detailing',
      'Transitions, trim and cleanup',
    ],
    materials: ['Porcelain & ceramic', 'Natural stone', 'Large-format tile', 'Heated floor systems', 'Schluter waterproofing'],
    priceRange: '$12 – $30 / sq ft installed',
    timeline: '2 days – 2 weeks',
    faqs: [
      { q: 'Do you waterproof before tiling showers and wet areas?', a: 'Always. We use full waterproofing membranes behind shower and wet-area tile, which is the single most important step for preventing leaks and mould. Skipping it is the most common reason tile jobs fail.' },
      { q: 'Can you install large-format tile and heated floors?', a: 'Yes. Large-format porcelain needs a very flat substrate and the right setting technique, and we install electric heated-floor systems under tile as well. Both are part of our regular work.' },
      { q: 'Can you re-tile just my backsplash or floor?', a: 'Absolutely. We take on everything from a single backsplash or floor to full bathrooms and open-concept main floors.' },
    ],
    related: ['bathroom-renovations', 'kitchen-renovations', 'flooring'],
  },

  // ------------------------------ LANDSCAPING ------------------------------
  {
    slug: 'landscape-design',
    category: 'landscaping',
    name: 'Landscape Design & Build',
    navName: 'Landscape Design',
    keyword: 'landscaping contractors',
    excerpt:
      'Complete landscape design and build, grading, sod, gardens, lighting and drainage.',
    image: '1779565145536-ccdf57517151',
    gallery: ['1779565145536-ccdf57517151', '1749803915455-a7642520d0d3', '1780245989879-1d0234b161de'],
    heroHeadline: 'Full Landscape Design & Build',
    intro: [
      'A great landscape ties everything together, the patio, the plantings, the grading and the way water moves across your property. Tridan designs and builds complete front- and back-yard landscapes: grading and drainage, sod and gardens, trees and shrubs, lighting and the hardscaping that anchors it all.',
      'We start with how the yard drains and functions, then layer in the beauty, so your new landscape not only looks incredible on day one, it stays healthy, drains properly and matures beautifully for years.',
    ],
    benefits: [
      'Full design: grading, drainage, planting, hardscape and lighting',
      'Sod installation and garden bed creation',
      'Trees, shrubs and low-maintenance planting plans',
      'Yard grading, French drains and drainage correction',
      'Low-voltage landscape lighting and edging',
    ],
    inclusions: [
      'Landscape design and plant selection',
      'Grading, drainage and French drains as needed',
      'Sod, garden beds, soil and mulch',
      'Tree, shrub and perennial planting',
      'Edging, lighting and finishing',
      'Cleanup and establishment guidance',
    ],
    materials: ['Nursery sod', 'Triple-mix & mulch', 'Nursery stock', 'Low-voltage lighting'],
    priceRange: '$8,000 – $60,000+',
    timeline: '1 – 3 weeks',
    faqs: [
      { q: 'Can you fix a yard that floods or pools water?', a: 'Yes, drainage correction is one of our specialties. We re-grade, install French drains or catch basins, and direct water away from your home and low spots.' },
      { q: 'Sod or seed?', a: 'Sod gives you an instant, established lawn and resists weeds while it roots; seed is cheaper but slower and more fragile. For most GTA yards we recommend sod.' },
      { q: 'Do you maintain landscapes after installing them?', a: 'We focus on design and build, and we give you a clear establishment and care plan. We can recommend trusted maintenance partners if you’d like ongoing service.' },
    ],
    related: ['interlocking-patios', 'retaining-walls', 'fences-gates'],
  },

  // -------------------------- ELECTRICAL & PLUMBING --------------------------
  {
    slug: 'electrical',
    category: 'electrical-plumbing',
    name: 'Electrical',
    navName: 'Electrical',
    keyword: 'electricians',
    excerpt:
      'Licensed electrical work: pot lights, panel upgrades, EV chargers, rewiring and renovation wiring, ESA inspected.',
    image: '1621905251189-08b45d6a269e',
    gallery: ['1621905251189-08b45d6a269e', '1749532125405-70950966b0e5', '1758101755915-462eddc23f57'],
    heroHeadline: 'Licensed Electrical, Done to Code',
    intro: [
      'Electrical is not a place to cut corners. Faulty work is a fire and safety risk, and unpermitted work causes insurance and resale problems down the road. Tridan handles electrical through licensed electricians, with the proper permits and ESA inspection, as part of your renovation or as a standalone job.',
      'From pot-light packages and panel upgrades to EV chargers, whole-home rewiring, and all the wiring behind a kitchen, basement or addition, we do it safely, tidily and to the Ontario Electrical Safety Code.',
    ],
    benefits: [
      'Work by licensed electricians, ESA permits and inspection included',
      'Pot lights, fixtures, switches, outlets and smart devices',
      'Panel upgrades and service upgrades (100A to 200A)',
      'EV charger installs and dedicated circuits',
      'Full renovation wiring for kitchens, basements and additions',
    ],
    inclusions: [
      'Assessment and load/circuit planning',
      'ESA permit and inspection coordination',
      'Wiring, devices, fixtures and panel work by licensed trades',
      'Pot-light and lighting packages',
      'Cleanup and code-compliant finish',
    ],
    materials: ['ESA-inspected', 'LED pot lights', '200A panels', 'EV chargers', 'Smart switches'],
    priceRange: '$250 – $15,000+',
    timeline: '1 day – 2 weeks',
    faqs: [
      { q: 'Is your electrical work licensed and inspected?', a: 'Yes. Electrical in Ontario must be done by licensed electricians and inspected by the ESA. We pull the ESA permit and arrange inspection so your work is safe, legal and documented.' },
      { q: 'Can you install pot lights and upgrade my panel?', a: 'Both are common jobs for us. We install LED pot-light packages throughout the home and upgrade electrical panels and service (for example 100A to 200A) to support modern loads.' },
      { q: 'Can you install an EV charger?', a: 'Yes. We install Level 2 EV chargers on a dedicated circuit, sized to your panel, with the permit and inspection handled.' },
    ],
    related: ['plumbing', 'kitchen-renovations', 'basement-finishing'],
  },
  {
    slug: 'plumbing',
    category: 'electrical-plumbing',
    name: 'Plumbing',
    navName: 'Plumbing',
    keyword: 'plumbers',
    excerpt:
      'Licensed plumbing: fixtures, faucets, repiping, drains, water heaters and full renovation rough-ins.',
    image: '1749532125405-70950966b0e5',
    gallery: ['1749532125405-70950966b0e5', '1758101755915-462eddc23f57', '1621905251189-08b45d6a269e'],
    heroHeadline: 'Licensed Plumbing You Can Rely On',
    intro: [
      'Plumbing done wrong shows up as leaks, low pressure and water damage, often behind a wall where it does the most harm. Tridan handles plumbing through licensed plumbers, whether it is a single fixture swap or the full rough-in behind a new kitchen, bathroom or basement.',
      'We install and move fixtures, faucets, toilets, tubs and showers, replace aging galvanized or lead lines, clear and re-route drains, and install tankless and conventional water heaters, all to the Ontario plumbing code.',
    ],
    benefits: [
      'Work by licensed plumbers, to the Ontario plumbing code',
      'Fixtures, faucets, toilets, tubs, showers and sinks',
      'Repiping (copper, PEX) and drain replacement or re-routing',
      'Tankless and tank water heater installs',
      'Full rough-ins for kitchens, bathrooms and basements',
    ],
    inclusions: [
      'Assessment and layout planning',
      'Permit coordination where required',
      'Supply and drain rough-in by licensed trades',
      'Fixture and appliance connection',
      'Pressure testing and cleanup',
    ],
    materials: ['PEX & copper', 'Tankless heaters', 'Quality fixtures', 'Backwater valves'],
    priceRange: '$250 – $18,000+',
    timeline: '1 day – 2 weeks',
    faqs: [
      { q: 'Is your plumbing work licensed?', a: 'Yes. Plumbing is done by licensed plumbers to the Ontario plumbing code, with permits where the work requires them, so it is safe and passes inspection.' },
      { q: 'Can you move plumbing for a kitchen or bathroom renovation?', a: 'Yes. Relocating sinks, tubs, showers and toilets is a routine part of our renovation work, and moving plumbing is often where the biggest layout improvements come from.' },
      { q: 'Do you install tankless water heaters?', a: 'We do, along with conventional tanks. We help you choose the right option for your home’s demand and handle the install and connections.' },
    ],
    related: ['electrical', 'bathroom-renovations', 'kitchen-renovations'],
  },
];

// --------------------------- helpers / lookups ---------------------------

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function servicesByCategory(categorySlug: string): Service[] {
  return services.filter((s) => s.category === categorySlug);
}

export function processFor(service: Service): ProcessStep[] {
  return service.process ?? defaultProcess;
}

export { defaultProcess };
