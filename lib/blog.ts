// ---------------------------------------------------------------------------
// Blog, cost guides, comparisons and local how-tos. Powers /blog and
// /blog/[slug]. Content is stored as trusted HTML rendered in .prose-tridan.
// ---------------------------------------------------------------------------

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Cost Guides' | 'Comparisons' | 'How-To & Maintenance' | 'Design & Trends';
  date: string; // ISO
  dateLabel: string;
  readMinutes: number;
  image: string; // Unsplash photo id
  author: string;
  related: string[]; // service slugs
  body: string; // HTML
};

export const posts: Post[] = [
  {
    slug: 'how-much-does-a-deck-cost-gta-2026',
    title: 'How Much Does a Deck Cost in the GTA? (2026 Price Guide)',
    excerpt:
      'A transparent breakdown of what decks really cost across Toronto and the GTA in 2026, by material, size and complexity, so you can budget with confidence.',
    category: 'Cost Guides',
    date: '2026-06-18',
    dateLabel: 'June 18, 2026',
    readMinutes: 8,
    image: '1416339306562-f3d12fefd36f',
    author: 'Tridan Contracting',
    related: ['deck-building', 'pergolas-gazebos', 'interlocking-patios'],
    body: `
<p>The most common question we get is also the hardest to answer in one number: <strong>“What will my deck cost?”</strong> The honest answer is that it depends on size, material, height and complexity. But you deserve real ranges, so here is what decks actually cost across Toronto and the GTA in 2026.</p>
<h2>The short answer</h2>
<p>For 2026, most GTA homeowners can expect to invest:</p>
<ul>
<li><strong>Pressure-treated wood deck:</strong> $35–$60 per sq ft installed</li>
<li><strong>Cedar deck:</strong> $45–$75 per sq ft installed</li>
<li><strong>Composite deck (Trex / TimberTech):</strong> $60–$110 per sq ft installed</li>
<li><strong>PVC / premium composite with upgrades:</strong> $90–$140+ per sq ft installed</li>
</ul>
<p>A typical 400 sq ft composite deck, therefore, lands somewhere around <strong>$28,000–$45,000</strong> depending on railings, height and site conditions.</p>
<h2>What actually drives the price</h2>
<h3>1. Material</h3>
<p>Material is the biggest single factor. Pressure-treated is cheapest upfront but needs staining every 2–3 years. Composite costs more but is virtually maintenance-free and lasts 25–30 years, which is why most of our clients now choose it.</p>
<h3>2. Height and structure</h3>
<p>A deck 6 inches off the ground is far cheaper than a second-storey walkout that needs tall footings, engineered beams, stairs and guards. Height also determines whether you need a permit.</p>
<h3>3. Railings</h3>
<p>Railings can be 20–30% of a deck’s cost. Pressure-treated pickets are cheapest; aluminum and glass panel railings look stunning but add up quickly.</p>
<h3>4. Site access and footings</h3>
<p>Tight urban lots (think downtown Toronto or the Kingsway) with no rear access cost more in labour. Poor soil may require helical piles instead of poured footings.</p>
<h2>Where cheap decks go wrong</h2>
<p>The number one reason decks fail early in our climate is <strong>footings that don’t reach below the frost line</strong>. When water freezes under a shallow footing, it heaves and the whole deck shifts. A bargain quote that skips proper footings isn’t a deal, it’s a rebuild in five years.</p>
<h2>Do I need a permit?</h2>
<p>In most GTA municipalities, decks over 24 inches high or attached to the house require a building permit. Tridan includes the drawings and permit application in our deck projects, so you’re covered and inspected.</p>
<h2>Get a real number for your deck</h2>
<p>The only way to know your exact cost is a free on-site assessment. <a href="/contact">Request your free quote</a> and we’ll measure, talk through materials, and give you a fixed price with no hidden fees.</p>
`,
  },
  {
    slug: 'composite-vs-wood-decking',
    title: 'Composite vs. Wood Decking: Which Is Right for Your Backyard?',
    excerpt:
      'Composite and cedar each have real strengths. Here’s an honest comparison of cost, maintenance, looks and lifespan to help you choose.',
    category: 'Comparisons',
    date: '2026-05-27',
    dateLabel: 'May 27, 2026',
    readMinutes: 7,
    image: '1600585154340-be6161a56a0c',
    author: 'Tridan Contracting',
    related: ['deck-building', 'pergolas-gazebos', 'fences-gates'],
    body: `
<p>“Should I go composite or wood?” It’s the first real decision in any deck project, and there’s no single right answer, only the right answer for <em>you</em>. Here’s the honest comparison we give every client.</p>
<h2>Upfront cost</h2>
<p><strong>Wood wins here.</strong> Pressure-treated pine is the cheapest, cedar is mid-range, and composite costs the most to install. If budget is the deciding factor today, wood gets you a beautiful deck for less.</p>
<h2>Long-term cost</h2>
<p><strong>Composite wins here.</strong> Wood needs cleaning and re-staining every 2–3 years, materials and (if you hire out) labour that adds up over a deck’s life. Composite needs only an occasional wash. Over 15 years, the total cost often evens out.</p>
<h2>Maintenance and lifestyle</h2>
<p>This is the real question. Do you <em>want</em> to stain a deck every couple of years? Some homeowners enjoy it; most don’t. Composite is the clear choice for busy families who want to use the deck, not maintain it.</p>
<h2>Looks</h2>
<p>Cedar has a warmth and natural grain that’s hard to beat when it’s freshly stained. Modern composites, though, have come a long way, multi-tonal boards that convincingly mimic hardwood without the upkeep. It comes down to taste.</p>
<h2>Lifespan and durability</h2>
<ul>
<li><strong>Pressure-treated:</strong> 10–15 years with maintenance</li>
<li><strong>Cedar:</strong> 15–20 years with maintenance</li>
<li><strong>Composite / PVC:</strong> 25–30 years, resists fading, scratching, insects and rot</li>
</ul>
<h2>Our recommendation</h2>
<p>If you’ll enjoy the ritual of staining and want the lowest upfront price, go cedar. If you want to build it once and simply enjoy it for decades, go composite. Either way, the framing underneath matters more than the surface, that’s what makes a deck safe and long-lived.</p>
<p><a href="/services/deck-building">Learn more about our deck building</a> or <a href="/contact">request a free quote</a> and we’ll help you choose.</p>
`,
  },
  {
    slug: 'interlock-vs-stamped-concrete',
    title: 'Interlock vs. Stamped Concrete: Which Patio Lasts Longer?',
    excerpt:
      'Both look great on day one. Here’s how interlock and stamped concrete compare on durability, repairs and value over a GTA winter cycle.',
    category: 'Comparisons',
    date: '2026-05-06',
    dateLabel: 'May 6, 2026',
    readMinutes: 6,
    image: '1558904541-efa843a96f01',
    author: 'Tridan Contracting',
    related: ['interlocking-patios', 'retaining-walls', 'landscape-design'],
    body: `
<p>When homeowners plan a patio, driveway or walkway, it usually comes down to two options: interlocking pavers or stamped concrete. Both look beautiful when new. The difference shows up after a few GTA winters.</p>
<h2>How they handle freeze-thaw</h2>
<p>This is the whole ballgame in our climate. <strong>Stamped concrete is a single slab</strong>, when the ground moves with freeze-thaw, the slab cracks, and once it cracks, it’s permanent. <strong>Interlock is many small units</strong> over a flexible compacted base, so it moves with the ground instead of cracking.</p>
<h2>Repairs</h2>
<p>If a paver stains or a section settles, you lift and reset the affected pavers, an invisible repair. If stamped concrete cracks or a section spalls, you’re looking at patching that never quite matches, or replacing the whole slab.</p>
<h2>Looks and options</h2>
<p>Interlock offers enormous variety in colour, shape and pattern from makers like Unilock and Techo-Bloc, and you can integrate borders, seat walls and steps seamlessly. Stamped concrete mimics stone with a textured stamp and can look great, until it cracks through the pattern.</p>
<h2>Cost</h2>
<p>Stamped concrete is often a little cheaper upfront. But factor in likely repairs and shorter lifespan, and quality interlock usually wins on lifetime value.</p>
<h2>The base is everything</h2>
<p>Neither product performs if the base is wrong. We over-excavate, build the granular base in compacted lifts, and grade for drainage, the difference between a surface that stays level for decades and one that waves and heaves.</p>
<h2>Our take</h2>
<p>For our freeze-thaw climate, we recommend interlock in most cases for its durability, repairability and design flexibility. <a href="/services/interlocking-patios">See our interlock & patio work</a> or <a href="/contact">get a free quote</a>.</p>
`,
  },
  {
    slug: 'kitchen-renovation-cost-gta',
    title: 'What Does a Kitchen Renovation Cost in the GTA?',
    excerpt:
      'From refreshes to full gut renovations, here’s what GTA kitchen renovations cost in 2026 and where your budget actually goes.',
    category: 'Cost Guides',
    date: '2026-04-15',
    dateLabel: 'April 15, 2026',
    readMinutes: 8,
    image: '1556911220-bff31c812dba',
    author: 'Tridan Contracting',
    related: ['kitchen-renovations', 'cabinet-refinishing', 'flooring'],
    body: `
<p>The kitchen is the heart of the home and, dollar for dollar, one of the best renovation investments you can make. Here’s what kitchen renovations realistically cost across the GTA in 2026.</p>
<h2>Typical price tiers</h2>
<ul>
<li><strong>Cosmetic refresh</strong> (paint, cabinet refinishing, hardware, backsplash, fixtures): $8,000–$20,000</li>
<li><strong>Mid-range renovation</strong> (new semi-custom cabinets, quartz counters, tile, lighting, some layout tweaks): $30,000–$55,000</li>
<li><strong>Full custom / gut renovation</strong> (moved walls, custom cabinetry, high-end appliances, premium finishes): $60,000–$90,000+</li>
</ul>
<h2>Where the money goes</h2>
<p>In a typical mid-range kitchen, cabinetry is the biggest line (roughly 30–35%), followed by countertops, appliances, labour/trades, then flooring, lighting and finishes. Moving plumbing or walls adds cost but often delivers the biggest improvement in how the kitchen works.</p>
<h2>How to save without cutting corners</h2>
<ul>
<li><strong>Keep the main plumbing where it is</strong> if the layout already works.</li>
<li><strong>Consider cabinet refinishing</strong> if your boxes are solid, a fraction of replacement cost.</li>
<li><strong>Choose quartz</strong> for durability and value; splurge on the island only if budget is tight.</li>
<li><strong>Don’t cut prep and trades</strong>, that’s where corner-cutting comes back to haunt you.</li>
</ul>
<h2>Timeline</h2>
<p>Most full kitchens take 4–8 weeks of construction once materials are in. We give you a day-by-day schedule and one point of contact so you always know what’s happening.</p>
<h2>Get a fixed price</h2>
<p>Every kitchen is different. <a href="/services/kitchen-renovations">See our kitchen renovation service</a> or <a href="/contact">request a free consultation</a> for a detailed, fixed-price quote.</p>
`,
  },
  {
    slug: 'exterior-painting-prep-guide',
    title: 'Why Exterior Paint Fails, and How Proper Prep Prevents It',
    excerpt:
      'Peeling exterior paint almost always traces back to skipped prep. Here’s what proper preparation looks like and why it determines how long your paint lasts.',
    category: 'How-To & Maintenance',
    date: '2026-03-20',
    dateLabel: 'March 20, 2026',
    readMinutes: 6,
    image: '1541888946425-d81bb19240f5',
    author: 'Tridan Contracting',
    related: ['exterior-painting', 'interior-painting', 'home-additions'],
    body: `
<p>If exterior paint peels, blisters or fades within a couple of years, the paint isn’t usually the problem, the preparation was. Here’s what separates a paint job that lasts three years from one that lasts ten.</p>
<h2>Step 1: Cleaning</h2>
<p>Paint can’t bond to dirt, chalk or mildew. We power-wash the entire surface and let it fully dry, painting over a damp or dirty surface guarantees early failure.</p>
<h2>Step 2: Scraping and sanding</h2>
<p>All loose and failing paint has to come off. We scrape and sand back to a sound surface so the new coating bonds to something solid, then feather the edges so repairs don’t telegraph through.</p>
<h2>Step 3: Repairs and caulking</h2>
<p>We fill cracks and holes, replace rotted trim, and re-caulk gaps around windows, doors and joints. Caulking isn’t cosmetic, it keeps water out of the wall assembly, which is what causes peeling in the first place.</p>
<h2>Step 4: Priming</h2>
<p>Bare wood, stains and repairs get spot- or full-primed so the topcoat adheres and covers evenly. Skipping primer on bare areas is a classic corner-cut.</p>
<h2>Step 5: Quality paint, applied in the right conditions</h2>
<p>We use exterior-grade coatings and schedule around weather, you can’t properly cure paint that’s applied in the rain, in extreme heat, or too late in the fall. In the GTA, that means most exterior work happens May through October.</p>
<h2>The bottom line</h2>
<p>Exterior painting is 80% preparation. When someone quotes a suspiciously low price and a two-day turnaround, they’re almost always skipping the steps above. <a href="/services/exterior-painting">See how we approach exterior painting</a> or <a href="/contact">get a free quote</a>.</p>
`,
  },
  {
    slug: 'legal-basement-apartment-gta',
    title: 'Adding a Legal Basement Apartment in the GTA: What to Know',
    excerpt:
      'A legal second suite can add income and value, but it has to meet code. Here’s what’s required and how to plan a compliant basement apartment.',
    category: 'How-To & Maintenance',
    date: '2026-02-24',
    dateLabel: 'February 24, 2026',
    readMinutes: 7,
    image: '1600566752355-35792bedcfea',
    author: 'Tridan Contracting',
    related: ['basement-finishing', 'home-additions', 'flooring'],
    body: `
<p>A legal basement apartment is one of the highest-return projects a GTA homeowner can take on, rental income, added property value and flexible space for family. But “legal” is the operative word. Here’s what it actually takes.</p>
<h2>Key requirements for a legal second suite</h2>
<ul>
<li><strong>Ceiling height:</strong> minimum clear height as set by the Ontario Building Code for the suite’s spaces.</li>
<li><strong>Egress:</strong> a proper means of escape, typically a compliant egress window in bedrooms and a safe exit.</li>
<li><strong>Fire separation:</strong> rated separation between units, often with self-closing doors and, in many cases, interconnected smoke alarms.</li>
<li><strong>Separate entrance:</strong> many municipalities expect an independent entrance.</li>
<li><strong>Registration:</strong> cities like Brampton require second units to be registered.</li>
</ul>
<h2>Permits are non-negotiable</h2>
<p>A legal suite requires a building permit and inspections. An unpermitted “basement apartment” can’t be legally rented as a second unit, can create insurance and liability problems, and often has to be torn out and redone. It’s not worth the risk.</p>
<h2>What affects feasibility</h2>
<p>Ceiling height is the most common dealbreaker, if the existing basement is too low, underpinning or bench footing may be needed, which changes the budget significantly. Window wells for egress, and the location of the electrical panel and mechanicals, also shape the design.</p>
<h2>How Tridan helps</h2>
<p>We assess feasibility honestly before you spend a dollar on construction, prepare the drawings, pull the permits, and build the suite to code with licensed trades and inspections, so it’s legal, safe and rentable.</p>
<p><a href="/services/basement-finishing">See our basement finishing service</a> or <a href="/contact">book a free feasibility assessment</a>.</p>
`,
  },
];

export const postSlugs = posts.map((p) => p.slug);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const postsByDate = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
