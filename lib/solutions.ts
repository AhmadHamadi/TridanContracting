// ---------------------------------------------------------------------------
// Solutions = outcome / problem-oriented landing pages. Deliberately kept
// distinct from Service pages to avoid keyword cannibalization:
//   Service page  -> transactional ("deck builder Toronto")
//   Solution page -> intent/outcome ("outdoor entertaining ideas", "fix drainage")
// Solutions link DOWN to the relevant services (one-directional).
// ---------------------------------------------------------------------------

export type SolutionGroup = 'Outdoor' | 'Curb Appeal & Repair' | 'Interior';

export type Solution = {
  slug: string;
  title: string;
  navName: string;
  group: SolutionGroup;
  keyword: string; // primary search intent
  excerpt: string;
  image: string;
  gallery: string[];
  heroHeadline: string;
  intro: string[];
  points: { title: string; body: string }[]; // "what's involved" / approach
  relatedServices: string[]; // service slugs to funnel to
  faqs: { q: string; a: string }[];
};

export const solutions: Solution[] = [
  {
    slug: 'backyard-transformations',
    title: 'Backyard Transformations',
    navName: 'Backyard Transformations',
    group: 'Outdoor',
    keyword: 'backyard transformation GTA',
    excerpt: 'Turn an unused or dated backyard into a finished outdoor living space you actually use.',
    image: '1772040942277-b194d9d0b648',
    gallery: ['1416339306562-f3d12fefd36f', '1558904541-efa843a96f01', '1589939705384-5185137a7f0f'],
    heroHeadline: 'From Unused Yard to Favourite Room',
    intro: [
      'A backyard transformation is not about one product. It is about reimagining how the whole space works, then building it as one coordinated project. Tridan designs and builds complete backyards across the GTA, combining patios, decks, planting, privacy and lighting into a space that finally earns its keep.',
      'Because we handle hardscaping, carpentry and landscaping in-house, you get one plan, one crew and one price instead of stitching three trades together. We start with how you want to live out there, then work backward to the grading, drainage and structure that make it last.',
    ],
    points: [
      { title: 'A single coordinated plan', body: 'Patio, deck, planting, privacy and lighting designed together so nothing looks bolted on.' },
      { title: 'Built on a real base', body: 'Proper grading, drainage and compacted bases so your investment stays level and healthy for decades.' },
      { title: 'Zones for how you live', body: 'Dining, lounging, cooking and play areas laid out to suit your family and how you host.' },
    ],
    relatedServices: ['interlocking-patios', 'deck-building', 'landscape-design', 'pergolas-gazebos'],
    faqs: [
      { q: 'How much does a backyard renovation cost in the GTA?', a: 'It depends on scope, but interlock patios generally run about $18 to $35 per square foot and a full backyard transformation combining hardscape, planting and structures typically starts in the tens of thousands. We give you a fixed price after an on-site visit.' },
      { q: 'How long does a full backyard build take?', a: 'Most complete backyard projects run two to six weeks on site once permits are in hand, depending on the mix of hardscaping, structures and planting involved.' },
      { q: 'Can you work with my existing deck or patio?', a: 'Often yes. We assess what is worth keeping and design the new elements to tie in cleanly, which can stretch your budget further.' },
    ],
  },
  {
    slug: 'small-backyard-ideas',
    title: 'Small Backyard Ideas & Solutions',
    navName: 'Small Backyard Ideas',
    group: 'Outdoor',
    keyword: 'small backyard ideas Toronto',
    excerpt: 'Make a compact city lot feel bigger with smart zoning, vertical elements and space-saving hardscaping.',
    image: '1634316888962-75074307f81c',
    gallery: ['1558904541-efa843a96f01', '1589939705384-5185137a7f0f', '1600585154340-be6161a56a0c'],
    heroHeadline: 'Small Yard, Big Potential',
    intro: [
      'Toronto and the inner GTA are full of narrow semi and townhome lots that feel like an afterthought. The good news is that small yards often deliver the biggest transformation per dollar. The key is designing every square foot to work harder.',
      'We use built-in seating, vertical planting, privacy screens and continuous paving to make a compact yard feel like an outdoor room rather than a leftover strip. Done right, a small backyard becomes the most-used space in the house.',
    ],
    points: [
      { title: 'Built-in, space-saving features', body: 'Bench seating, storage and planters built into the design so you are not crowding the space with furniture.' },
      { title: 'Vertical thinking', body: 'Screens, trellises and layered planting draw the eye up and create privacy without eating floor area.' },
      { title: 'One continuous surface', body: 'Running one paving material wall to wall makes a small yard read as larger and more intentional.' },
    ],
    relatedServices: ['interlocking-patios', 'fences-gates', 'landscape-design', 'deck-building'],
    faqs: [
      { q: 'Is it worth landscaping a small backyard?', a: 'Absolutely. Small yards usually cost less to build and deliver a big lift in usability and resale appeal, especially on city lots where outdoor space is at a premium.' },
      { q: 'How do I make a small backyard look bigger?', a: 'Use one continuous paving material, build seating and storage into the perimeter, add vertical planting or screens, and keep sightlines open. These moves make a compact yard feel like a finished room.' },
    ],
  },
  {
    slug: 'low-maintenance-landscaping',
    title: 'Low-Maintenance Landscaping',
    navName: 'Low-Maintenance Landscaping',
    group: 'Outdoor',
    keyword: 'low maintenance landscaping Ontario',
    excerpt: 'Curb appeal without the upkeep, using hardscape, native planting and reduced lawn.',
    image: '1780245989879-1d0234b161de',
    gallery: ['1600585154340-be6161a56a0c', '1416339306562-f3d12fefd36f', '1589939705384-5185137a7f0f'],
    heroHeadline: 'A Yard That Looks After Itself',
    intro: [
      'Not everyone wants to spend weekends mowing, watering and weeding. Low-maintenance landscaping gives you a yard that looks sharp all season with a fraction of the work, which is ideal for busy families and downsizers alike.',
      'We lean on durable hardscaping, hardy native and drought-tolerant planting, mulch beds and smart edging to cut down watering, mowing and fuss without giving up curb appeal. Less lawn, less upkeep, more time to actually enjoy the space.',
    ],
    points: [
      { title: 'Less lawn, more hardscape', body: 'Patios, walkways and gravel beds replace thirsty turf where it makes sense.' },
      { title: 'Hardy, climate-right planting', body: 'Native and drought-tolerant species that thrive in Ontario with minimal watering once established.' },
      { title: 'Clean, defined beds', body: 'Quality edging and mulch keep beds tidy and suppress weeds for years.' },
    ],
    relatedServices: ['landscape-design', 'interlocking-patios', 'retaining-walls'],
    faqs: [
      { q: 'What is the most low-maintenance landscaping?', a: 'A mix of hardscaping, mulch beds, and hardy native or drought-tolerant plants, with reduced lawn area. It keeps watering, mowing and weeding to a minimum while still looking finished.' },
      { q: 'Does low-maintenance mean low cost?', a: 'Not always upfront, since hardscaping and quality planting are an investment, but it saves significantly on water, upkeep and replacement over the years.' },
    ],
  },
  {
    slug: 'backyard-privacy',
    title: 'Backyard Privacy Solutions',
    navName: 'Backyard Privacy',
    group: 'Outdoor',
    keyword: 'backyard privacy ideas Toronto',
    excerpt: 'Block sightlines from neighbours with privacy fencing, cedar screens, pergolas and layered planting.',
    image: '1601042860368-debed90085e0',
    gallery: ['1416339306562-f3d12fefd36f', '1558904541-efa843a96f01', '1600585154340-be6161a56a0c'],
    heroHeadline: 'Reclaim Your Backyard From the Neighbours',
    intro: [
      'In dense GTA neighbourhoods, privacy is often the difference between a backyard you enjoy and one you avoid. Whether it is a two-storey behind you or a close side-yard, there is almost always a clean way to get your space back.',
      'We combine privacy fencing, laser-cut and slatted screens, pergolas and layered planting to block the right sightlines without turning your yard into a fortress. And we build to your municipality’s fence-height bylaws so it is done properly the first time.',
    ],
    points: [
      { title: 'Screens where you need them', body: 'Targeted screening blocks specific sightlines instead of walling in the whole yard.' },
      { title: 'Living privacy', body: 'Cedars, tall grasses and layered beds soften hard structures and add year-round cover.' },
      { title: 'Bylaw-compliant', body: 'We confirm local height and setback rules so your privacy build passes without issue.' },
    ],
    relatedServices: ['fences-gates', 'pergolas-gazebos', 'landscape-design', 'deck-building'],
    faqs: [
      { q: 'How do I get privacy from neighbours in my backyard?', a: 'The best results usually combine a privacy fence or slatted screen with a pergola and layered planting to block specific sightlines. Where the overlook is from a second storey, taller screens or a covered structure work best.' },
      { q: 'How tall can a privacy fence be in Toronto?', a: 'Toronto regulates fence height, setbacks and materials, and other GTA municipalities have their own rules. We confirm your local bylaw before building so the fence is compliant.' },
    ],
  },
  {
    slug: 'outdoor-entertaining-spaces',
    title: 'Outdoor Entertaining Spaces',
    navName: 'Outdoor Entertaining',
    group: 'Outdoor',
    keyword: 'outdoor entertaining area ideas',
    excerpt: 'Built for hosting, with outdoor kitchens, fire features, dining patios and layered lighting.',
    image: '1654546493292-7df731737090',
    gallery: ['1589939705384-5185137a7f0f', '1558904541-efa843a96f01', '1416339306562-f3d12fefd36f'],
    heroHeadline: 'A Backyard Built for Hosting',
    intro: [
      'If your idea of a backyard involves friends, food and long evenings outside, it should be designed for exactly that. An entertaining space is about flow: where people gather, cook, eat and relax, and how it all connects.',
      'We build integrated outdoor kitchens, fire features, generous dining patios, comfortable lounge zones and the layered lighting that keeps the party going after sunset. Every element is planned around how you like to host.',
    ],
    points: [
      { title: 'A real cooking zone', body: 'Built-in grills, side burners and prep counters so the cook is part of the gathering, not stuck inside.' },
      { title: 'Gather-around features', body: 'Fire pits and fireplaces give the space a natural centre and extend the season into cool evenings.' },
      { title: 'Lighting that sets the mood', body: 'Layered low-voltage lighting keeps the space usable and beautiful long after dark.' },
    ],
    relatedServices: ['outdoor-kitchens', 'interlocking-patios', 'pergolas-gazebos', 'deck-building'],
    faqs: [
      { q: 'What makes a good outdoor entertaining space?', a: 'Clear zones for cooking, dining and lounging, a feature like a fire pit or outdoor kitchen to gather around, comfortable flow between areas, and good lighting so the space works after dark.' },
      { q: 'Do I need gas and electrical for an outdoor kitchen?', a: 'Usually yes, and that work must be done by licensed trades with the right permits. We coordinate the gas, water and electrical so the whole build is safe and inspected.' },
    ],
  },
  {
    slug: 'four-season-outdoor-living',
    title: 'Four-Season Outdoor Living',
    navName: 'Four-Season Living',
    group: 'Outdoor',
    keyword: 'covered patio ideas Ontario',
    excerpt: 'Extend your backyard season with covered patios and louvered pergolas engineered for Ontario snow loads.',
    image: '1696846912293-9a8013e17403',
    gallery: ['1600585154340-be6161a56a0c', '1416339306562-f3d12fefd36f', '1558904541-efa843a96f01'],
    heroHeadline: 'Use Your Backyard More Than Four Months a Year',
    intro: [
      'The most common complaint we hear about GTA backyards is simple: you only get to use them for a few months. The fix is designing for our climate instead of against it, with shelter, shade and warmth that push the season in both directions.',
      'We build covered patios, louvered aluminum pergolas engineered for snow and wind, screened structures and heated zones so your outdoor space works from early spring well into fall. It is one of the highest-value upgrades you can make to a backyard here.',
    ],
    points: [
      { title: 'Engineered for our winters', body: 'Louvered and covered structures built to handle Ontario snow and wind loads, not just summer sun.' },
      { title: 'Sun, rain and shade control', body: 'Motorized louvered roofs open for sun and close to shed rain, so plans do not depend on the forecast.' },
      { title: 'Warmth and screening', body: 'Heaters, screens and privacy panels stretch comfortable use into the shoulder seasons.' },
    ],
    relatedServices: ['pergolas-gazebos', 'deck-building', 'interlocking-patios', 'outdoor-kitchens'],
    faqs: [
      { q: 'Can I use my backyard year-round in Ontario?', a: 'With the right structures, yes. Covered patios and louvered pergolas engineered for snow loads, plus heating and screening, extend usable time well beyond summer. Fully enclosed, heated spaces can work all year.' },
      { q: 'Will a louvered pergola handle snow?', a: 'Quality louvered aluminum pergolas are engineered for Ontario snow and wind loads. We size the footings and structure accordingly so it stays safe and solid through winter.' },
    ],
  },
  {
    slug: 'pool-landscaping-surrounds',
    title: 'Pool Landscaping & Surrounds',
    navName: 'Pool Landscaping',
    group: 'Outdoor',
    keyword: 'pool landscaping Toronto',
    excerpt: 'Slip-resistant interlock and stone pool decks, poolside planting and shade structures.',
    image: '1634923295030-730da9900a2d',
    gallery: ['1600585154340-be6161a56a0c', '1589939705384-5185137a7f0f', '1416339306562-f3d12fefd36f'],
    heroHeadline: 'Finish the Space Around Your Pool',
    intro: [
      'A pool is only as good as the space around it. The right pool surround is safe underfoot, cool in the sun, easy to maintain and beautiful enough to make the whole yard feel like a resort.',
      'We build interlock and natural stone pool decks with slip-resistant, cool-underfoot surfaces, proper drainage away from the pool, poolside planting and shade structures. Whether you have an existing pool or a fresh install, we make the surround work.',
    ],
    points: [
      { title: 'Safe, comfortable surfaces', body: 'Slip-resistant, cool-underfoot pavers and stone chosen specifically for poolside use.' },
      { title: 'Proper drainage', body: 'Grading and drainage that move water away from the pool and the house, not toward them.' },
      { title: 'Shade and privacy', body: 'Pergolas, cabanas and planting that add comfort and screen the space.' },
    ],
    relatedServices: ['interlocking-patios', 'landscape-design', 'pergolas-gazebos', 'retaining-walls'],
    faqs: [
      { q: 'How much does interlock around a pool cost?', a: 'Pool surrounds in the GTA generally run about $25 to $40 per square foot installed, depending on the pavers or stone and the site. We provide a fixed quote after seeing the space.' },
      { q: 'What is the best material around a pool?', a: 'Slip-resistant, cool-underfoot options like quality interlock and certain natural stones and porcelain work best. We help you choose a surface that is safe, durable and low-maintenance.' },
    ],
  },
  {
    slug: 'curb-appeal-front-yard',
    title: 'Curb Appeal & Front Yard Makeovers',
    navName: 'Curb Appeal',
    group: 'Curb Appeal & Repair',
    keyword: 'front yard makeover Toronto',
    excerpt: 'Boost first impressions and resale value with walkways, porch interlock, planting and exterior paint.',
    image: '1781797221329-c3d083ab6d99',
    gallery: ['1558904541-efa843a96f01', '1600585154340-be6161a56a0c', '1613490493576-7fde63acd811'],
    heroHeadline: 'Make the Best First Impression on the Street',
    intro: [
      'Curb appeal is the first thing buyers, guests and neighbours notice, and it is one of the best returns you can get on a home. A front yard makeover ties together the walkway, porch, planting, lighting and even the paint into one polished look.',
      'Because Tridan does landscaping, hardscaping and painting under one roof, we can refresh the whole front of your home as a single project. New interlock walkway and steps, updated planting and lighting, and crisp exterior paint add up to a house that stops people on the sidewalk.',
    ],
    points: [
      { title: 'A welcoming approach', body: 'Interlock walkways, porch and steps that guide the eye and lift the whole facade.' },
      { title: 'Planting and lighting', body: 'Layered beds and low-voltage lighting that look great by day and glow at night.' },
      { title: 'One-contractor refresh', body: 'Landscaping, hardscape and exterior paint handled together for a cohesive result.' },
    ],
    relatedServices: ['interlocking-patios', 'landscape-design', 'exterior-painting', 'fences-gates'],
    faqs: [
      { q: 'Does curb appeal really add value?', a: 'Yes. Front-yard improvements and fresh exterior paint are among the highest-return updates you can make, both for resale value and for how quickly a home sells.' },
      { q: 'Can you do the landscaping and painting together?', a: 'That is one of our advantages. As a general contractor that also paints and landscapes, we can transform your walkway, planting and exterior paint in one coordinated project.' },
    ],
  },
  {
    slug: 'drainage-grading',
    title: 'Drainage & Grading Solutions',
    navName: 'Drainage & Grading',
    group: 'Curb Appeal & Repair',
    keyword: 'backyard drainage Toronto',
    excerpt: 'Fix standing water, poor slope and pooling on GTA clay soil with regrading, swales and French drains.',
    image: '1759950345011-ee5a96640e00',
    gallery: ['1558904541-efa843a96f01', '1416339306562-f3d12fefd36f', '1600585154340-be6161a56a0c'],
    heroHeadline: 'Stop Standing Water for Good',
    intro: [
      'Water pooling in the yard, a soggy lawn days after rain, or moisture creeping toward the foundation are all signs of a drainage problem, and they only get worse if ignored. The GTA’s heavy clay soil makes proper grading and drainage essential.',
      'We diagnose where the water is going and why, then fix it with regrading to the correct slope, swales, catch basins and French drains, often in combination. The goal is simple: move water away from your home and your usable space, permanently.',
    ],
    points: [
      { title: 'Proper slope', body: 'Regrading to move water away from the foundation at the correct fall, the foundation of any drainage fix.' },
      { title: 'French drains and catch basins', body: 'Sub-surface drainage that collects and redirects water from problem low spots.' },
      { title: 'Clay-soil know-how', body: 'Solutions designed for the GTA’s heavy clay, where water sits instead of soaking away.' },
    ],
    relatedServices: ['landscape-design', 'interlocking-patios', 'retaining-walls'],
    faqs: [
      { q: 'How do I fix standing water in my backyard?', a: 'Water should drain within about 24 hours of rain. If it lingers, the usual fixes are regrading to roughly a 2% slope away from the house, plus swales and French drains, often used together on GTA clay soil.' },
      { q: 'Why does my yard flood on clay soil?', a: 'Clay drains slowly, so water sits on the surface instead of soaking in. The fix is directing water away with proper grading and sub-surface drainage rather than relying on the soil to absorb it.' },
    ],
  },
  {
    slug: 'open-concept-main-floor',
    title: 'Open-Concept Main Floor',
    navName: 'Open-Concept Main Floor',
    group: 'Interior',
    keyword: 'open concept renovation Toronto',
    excerpt: 'Remove walls to open your kitchen and living space, including the beam, permit and engineering realities.',
    image: '1648475236583-2e25a6cbf3bd',
    gallery: ['1556911220-bff31c812dba', '1600566753086-00f18fb6b3ea', '1584622650111-993a426fbf0a'],
    heroHeadline: 'Open Up the Heart of Your Home',
    intro: [
      'Older GTA homes were built with closed-off kitchens and formal rooms that no longer suit how families live. Opening up the main floor is one of the most transformative renovations you can make, flooding the space with light and connecting the kitchen to living and dining.',
      'This is structural work, so it is done properly or not at all. We handle the engineered beam, the permit, the load transfer and the finishing, so the wall comes down safely and the result looks like the home was always meant to be open.',
    ],
    points: [
      { title: 'Engineering and permits handled', body: 'Removing a load-bearing wall needs stamped drawings and a permit. We manage both.' },
      { title: 'Clean beam integration', body: 'We hide or feature the new beam so the open space looks intentional, not patched.' },
      { title: 'A true main-floor rethink', body: 'We look at flow, kitchen layout, flooring and light together, not just the wall.' },
    ],
    relatedServices: ['kitchen-renovations', 'home-additions', 'flooring'],
    faqs: [
      { q: 'How much does it cost to remove a load-bearing wall in Toronto?', a: 'A simple single-storey wall can start around $3,500, while long spans carrying two storeys can exceed $30,000. Most two-storey GTA homes land in the $8,000 to $20,000 range once the beam, posts, permit and finishing are included.' },
      { q: 'Do I need a permit to remove a wall?', a: 'For a load-bearing wall, yes, always, along with engineered drawings stamped by a professional engineer. We handle the assessment, drawings and permit as part of the project.' },
    ],
  },
  {
    slug: 'basement-apartment-income-suite',
    title: 'Basement Apartment & Income Suites',
    navName: 'Income Suites',
    group: 'Interior',
    keyword: 'legal basement apartment Toronto',
    excerpt: 'Turn your basement into a legal, rentable second suite, with the ROI, Bill 23 and code realities explained.',
    image: '1770757587087-766db2874c21',
    gallery: ['1584622650111-993a426fbf0a', '1600607688969-a5bfcd646154', '1600566753086-00f18fb6b3ea'],
    heroHeadline: 'Turn Your Basement Into Income',
    intro: [
      'A legal basement suite is one of the smartest investments a GTA homeowner can make. With rents where they are, a well-built income suite can pay for itself in a handful of years while adding lasting value to your home.',
      'The word that matters is legal. We build second suites that meet the Ontario Building Code and Fire Code, with proper ceiling height, egress and fire separation, and we handle the permits and inspections. That protects your income, your insurance and your resale.',
    ],
    points: [
      { title: 'Built legal and inspected', body: 'Proper egress, fire separation and ceiling height, permitted and inspected, so it can be rented with confidence.' },
      { title: 'A real ROI conversation', body: 'We help you weigh construction cost against likely rent and payback before you commit a dollar.' },
      { title: 'Feasibility first', body: 'We check ceiling height and layout up front, since that is what makes or breaks a legal suite.' },
    ],
    relatedServices: ['basement-finishing', 'home-additions', 'bathroom-renovations'],
    faqs: [
      { q: 'Is it worth converting my basement into a rental unit?', a: 'Often yes. In the GTA a legal basement suite commonly rents for around $2,300 to $2,600 per month, giving many projects a three to six year payback while adding long-term property value.' },
      { q: 'Can I legally have a basement apartment in Toronto?', a: 'In most Toronto residential zones a basement second suite is now permitted as-of-right. It still has to meet zoning, the Ontario Building Code and the Fire Code, including egress and a minimum ceiling height of 1.95 m over most of the floor.' },
    ],
  },
  {
    slug: 'aging-in-place-accessible',
    title: 'Aging-in-Place & Accessible Renovations',
    navName: 'Aging-in-Place',
    group: 'Interior',
    keyword: 'aging in place renovation Ontario',
    excerpt: 'Barrier-free bathrooms, main-floor living and safe, accessible modifications to stay in the home you love.',
    image: '1763485955497-f5ef5d178698',
    gallery: ['1600566753086-00f18fb6b3ea', '1584622650111-993a426fbf0a', '1600489000022-c2086d79f9d4'],
    heroHeadline: 'Stay in the Home You Love, Safely',
    intro: [
      'Most people would rather stay in their own home as they age than move. Thoughtful renovations make that possible, removing the barriers and hazards that make a familiar home harder to live in over time.',
      'We build barrier-free curbless showers, comfort-height fixtures, grab-bar-ready walls, widened doorways, ramps and main-floor living solutions. The work is done so it feels like a natural part of the home, not a clinical retrofit.',
    ],
    points: [
      { title: 'Barrier-free bathrooms', body: 'Curbless showers, non-slip tile, comfort-height fixtures and blocking for grab bars where they are needed.' },
      { title: 'Safe, easy movement', body: 'Widened doorways, ramps and level thresholds that make the whole home easier to navigate.' },
      { title: 'Main-floor living', body: 'Relocating key rooms to the main floor so stairs are no longer a daily obstacle.' },
    ],
    relatedServices: ['bathroom-renovations', 'home-additions', 'basement-finishing'],
    faqs: [
      { q: 'What is an aging-in-place renovation?', a: 'It is a set of modifications that let someone stay safely in their home as they age, such as barrier-free bathrooms, grab bars, wider doorways, ramps and main-floor living. We tailor the work to your needs and home.' },
      { q: 'Can you make a bathroom wheelchair accessible?', a: 'Yes. We build curbless, roll-in showers, comfort-height fixtures, reinforced walls for grab bars and turning space designed to accessibility guidelines.' },
    ],
  },
];

export const solutionSlugs = solutions.map((s) => s.slug);

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export const solutionGroupOrder: SolutionGroup[] = ['Outdoor', 'Curb Appeal & Repair', 'Interior'];

export function solutionsByGroup() {
  const groups: Record<string, Solution[]> = {};
  for (const s of solutions) (groups[s.group] ??= []).push(s);
  return groups;
}
