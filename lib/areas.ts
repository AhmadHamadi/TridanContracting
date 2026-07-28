// ---------------------------------------------------------------------------
// Service areas, powers /service-areas, /service-areas/[city], city × service
// pages and schema areaServed. GTA excluding York Region (per client).
// Each city has genuinely local content to avoid thin/duplicate pages.
// ---------------------------------------------------------------------------

export type Region =
  | 'Toronto'
  | 'Peel'
  | 'Halton'
  | 'Durham'
  | 'Hamilton'
  | 'Niagara'
  | 'Waterloo'
  | 'Wellington'
  | 'Brant'
  | 'Dufferin';

export type City = {
  slug: string;
  name: string;
  region: Region;
  // Tier 1/2 cities get the full city × service matrix (unique local pages).
  // Tier 3 cities get a single strong city hub page that links to the core
  // service pages (Google 2026: consolidate low-demand areas, don't publish
  // thin permutations that risk scaled-content / doorway penalties).
  tier: 1 | 2 | 3;
  tagline: string;
  image: string; // Unsplash photo id
  neighbourhoods: string[];
  intro: string[]; // locally-specific paragraphs
  localNote: string; // permits / bylaws / climate / soil specifics
  priceNote: string; // realistic local project price context
  faqs: { q: string; a: string }[];
  nearby: string[]; // city slugs
};

export const cities: City[] = [
  {
    slug: 'toronto',
    name: 'Toronto',
    region: 'Toronto',
    tier: 1,
    tagline: 'Outdoor living, renovations across the city',
    image: '1517090504586-fde19ea6066f',
    neighbourhoods: [
      'Rosedale', 'Forest Hill', 'Lawrence Park', 'The Bridle Path',
      'Leaside & Moore Park', 'The Beaches', 'High Park & Roncesvalles', 'Yorkville',
    ],
    intro: [
      'Toronto homes are as varied as its neighbourhoods, century semis in Riverdale, detached estates in Lawrence Park, condos and townhomes downtown, and each comes with its own renovation realities. Tridan works across the entire city, bringing outdoor living, interior renovations under one licensed, insured roof.',
      'In older Toronto neighbourhoods we routinely navigate narrow lot access, laneway constraints, heritage considerations and tight municipal setbacks. Whether it’s a Rosedale garden terrace, a Forest Hill kitchen, or a Beaches deck facing the lake winds, we build to the City of Toronto’s codes and bylaws and keep tight urban job sites clean and respectful of neighbours.',
    ],
    localNote:
      'The City of Toronto requires building permits for most decks over 24″, additions, second suites and structural renovations, and enforces its own zoning setbacks and, in some areas, heritage rules. Toronto’s clay-heavy soils and mature tree canopy also make footing depth, drainage and root protection important. Tridan handles Toronto permit applications and Committee of Adjustment considerations where needed.',
    priceNote:
      'Toronto projects range widely by neighbourhood: interlock and deck projects commonly run $18k–$70k, full kitchen renovations $35k–$90k+, and estate additions in areas like Lawrence Park or the Bridle Path well into six figures.',
    faqs: [
      { q: 'Do you handle City of Toronto permits?', a: 'Yes. We prepare drawings and manage the permit application for decks, additions, second suites and structural work, including zoning and heritage considerations where they apply.' },
      { q: 'Can you work on narrow downtown lots with laneway access?', a: 'Absolutely, tight-access urban sites are routine for us. We plan material staging, protect neighbouring property, and keep the site clean throughout.' },
      { q: 'Which Toronto neighbourhoods do you serve?', a: 'All of them, from Rosedale, Forest Hill and Lawrence Park to Leaside, the Beaches, High Park and downtown. Wherever you are in the city, we can help.' },
    ],
    nearby: ['north-york', 'scarborough', 'etobicoke'],
  },
  {
    slug: 'north-york',
    name: 'North York',
    region: 'Toronto',
    tier: 1,
    tagline: 'Premium contracting for North York homes',
    image: '1600585154340-be6161a56a0c',
    neighbourhoods: [
      'Hoggs Hollow', 'St. Andrew–Windfields', 'Bayview Village', 'Willowdale',
      'Bridle Path–Sunnybrook', 'York Mills', 'Bathurst Manor', 'Don Mills',
    ],
    intro: [
      'North York blends large postwar lots, luxury enclaves like Hoggs Hollow and St. Andrew-Windfields, and dense, fast-growing corridors around Yonge. That mix means everything from expansive backyard builds and additions to condo and townhome renovations, all of which Tridan handles across the district.',
      'Many North York properties sit on generous, sloping lots that reward thoughtful landscaping, retaining walls and multi-level decks. We design outdoor spaces that work with the grade and build interiors that modernize solid, well-built homes without losing their character.',
    ],
    localNote:
      'North York falls under the City of Toronto’s permits and zoning, including ravine and tree-protection bylaws that affect many lots near Sunnybrook, the Don Valley and Hoggs Hollow. Sloped, ravine-adjacent lots make grading, drainage and retaining-wall engineering especially important here.',
    priceNote:
      'North York outdoor-living builds commonly run $20k–$80k, kitchen and bath renovations $20k–$90k, and additions on larger Windfields or Hoggs Hollow lots frequently exceed $250k.',
    faqs: [
      { q: 'Do you build on ravine and sloped lots?', a: 'Yes, sloped and ravine-adjacent North York lots are a specialty. We engineer retaining walls, grading and drainage, and respect Toronto’s ravine and tree-protection bylaws.' },
      { q: 'Do you serve Hoggs Hollow and St. Andrew-Windfields?', a: 'We do, these luxury enclaves are core to our North York work, from estate landscapes to full-home renovations and additions.' },
      { q: 'Are North York permits different from the rest of Toronto?', a: 'North York uses the City of Toronto’s permit and zoning framework, with extra attention to ravine and tree bylaws. We handle it all for you.' },
    ],
    nearby: ['toronto', 'scarborough', 'etobicoke'],
  },
  {
    slug: 'scarborough',
    name: 'Scarborough',
    region: 'Toronto',
    tier: 1,
    tagline: 'Decks, renovations across Scarborough',
    image: '1416339306562-f3d12fefd36f',
    neighbourhoods: [
      'Guildwood', 'Cliffside & the Bluffs', 'Birch Cliff', 'Highland Creek',
      'Agincourt', 'West Hill', 'Bendale', 'Cliffcrest',
    ],
    intro: [
      'Scarborough’s deep lots and established neighbourhoods, from the Bluffs down to Guildwood and Highland Creek, are ideal for backyard transformations, and its solid brick homes are perfect candidates for kitchen, bath and basement renovations. Tridan serves the whole district with the same premium standards we bring across the GTA.',
      'Properties near the Scarborough Bluffs and Highland Creek come with their own grading, drainage and setback considerations that we know well. Inland, generous lots leave plenty of room for decks, interlock, pergolas and legal basement suites that add real value.',
    ],
    localNote:
      'Scarborough is governed by City of Toronto permits and zoning. Bluffs-adjacent and creek-adjacent lots can involve slope stability, drainage and conservation-authority considerations, which we account for in design and permitting.',
    priceNote:
      'Scarborough offers strong value: decks and interlock commonly run $14k–$50k, basement suites $40k–$95k, and full kitchen or bathroom renovations $18k–$70k.',
    faqs: [
      { q: 'Do you build legal basement apartments in Scarborough?', a: 'Yes, Scarborough’s deep lots and solid homes are well suited to legal second suites. We confirm feasibility (ceiling height, egress, fire separation) and build to code with permits.' },
      { q: 'Can you work near the Scarborough Bluffs?', a: 'We can, bluff- and creek-adjacent lots need extra attention to slope, drainage and conservation rules, all of which we plan for.' },
      { q: 'Which Scarborough areas do you serve?', a: 'All of them, including Guildwood, Cliffside, Birch Cliff, Highland Creek, Agincourt and West Hill.' },
    ],
    nearby: ['toronto', 'north-york', 'pickering'],
  },
  {
    slug: 'etobicoke',
    name: 'Etobicoke',
    region: 'Toronto',
    tier: 1,
    tagline: 'Outdoor living & renovations across Etobicoke',
    image: '1600607687939-ce8a6c25118c',
    neighbourhoods: [
      'The Kingsway', 'Sunnylea', 'Princess-Rosethorn', 'Islington Village',
      'Mimico & New Toronto', 'Long Branch', 'Markland Wood', 'Humber Valley',
    ],
    intro: [
      'From the tree-lined estates of the Kingsway and Humber Valley to the lakeside charm of Mimico and Long Branch, Etobicoke rewards quality craftsmanship. Tridan builds outdoor living spaces and renovates interiors throughout the district.',
      'Etobicoke’s mature lots and river-adjacent properties are perfect for landscape transformations, decks and interlock, while its well-built homes take beautifully to kitchen, bathroom and whole-home renovations.',
    ],
    localNote:
      'Etobicoke is under City of Toronto permits and zoning. Humber River and creek-adjacent lots can trigger conservation-authority (TRCA) review and drainage considerations, which we factor into design and approvals.',
    priceNote:
      'Etobicoke projects typically run $16k–$70k for outdoor living, $30k–$90k for kitchens, and into six figures for Kingsway and Humber Valley additions.',
    faqs: [
      { q: 'Do you serve the Kingsway and Humber Valley?', a: 'Yes, these premium Etobicoke neighbourhoods are central to our work, from estate landscapes to full renovations and additions.' },
      { q: 'Are there special rules near the Humber River?', a: 'River- and creek-adjacent lots can involve TRCA review and drainage planning. We identify this early and manage the approvals.' },
      { q: 'Can you do lakeside projects in Mimico or Long Branch?', a: 'Absolutely, we account for wind exposure and drainage on lakeside lots and build accordingly.' },
    ],
    nearby: ['toronto', 'mississauga', 'north-york'],
  },
  {
    slug: 'mississauga',
    name: 'Mississauga',
    region: 'Peel',
    tier: 1,
    tagline: 'Premium outdoor living & renovations in Mississauga',
    image: '1613490493576-7fde63acd811',
    neighbourhoods: [
      'Lorne Park', 'Mineola', 'Port Credit', 'Gordon Woods',
      'Sawmill Valley', 'Erindale', 'Credit Woodlands', 'Lakeview',
    ],
    intro: [
      'Mississauga spans everything from the estate lots of Lorne Park and Mineola to the lakeside energy of Port Credit and the family neighbourhoods around Erindale and Streetsville. Tridan brings outdoor living and renovations to homeowners across the city.',
      'The mature, generous lots in south Mississauga are ideal for landscape transformations, custom decks, interlock and outdoor kitchens, while the city’s solid homes are perfect for kitchen, bathroom and basement renovations that modernize without losing character.',
    ],
    localNote:
      'Mississauga issues its own building permits and enforces zoning setbacks and deck/fence height bylaws through the City of Mississauga. Lots near the Credit River and lakefront may involve Credit Valley Conservation review and drainage planning. We manage Mississauga permits and approvals for you.',
    priceNote:
      'Mississauga outdoor-living builds commonly run $18k–$75k, kitchen renovations $32k–$90k, and Lorne Park / Mineola estate projects and additions well into six figures.',
    faqs: [
      { q: 'Do you handle City of Mississauga permits?', a: 'Yes, we prepare drawings and manage permit applications with the City of Mississauga for decks, additions, basements and structural work.' },
      { q: 'Do you serve Lorne Park and Mineola?', a: 'We do, these estate neighbourhoods are a core part of our Mississauga work, including high-end landscapes, additions and full renovations.' },
      { q: 'Are there special rules near the Credit River?', a: 'Credit River and lakefront lots can involve Credit Valley Conservation review. We identify this early and handle the approvals.' },
    ],
    nearby: ['oakville', 'etobicoke', 'brampton'],
  },
  {
    slug: 'brampton',
    name: 'Brampton',
    region: 'Peel',
    tier: 2,
    tagline: 'Decks, renovations across Brampton',
    image: '1600566753086-00f18fb6b3ea',
    neighbourhoods: [
      'Credit Valley', 'Springdale', 'Bram West', 'Castlemore',
      'Vales of Castlemore', 'Heart Lake', 'Downtown Brampton', 'Fletcher’s Meadow',
    ],
    intro: [
      'Brampton’s fast-growing neighbourhoods, from the larger lots of Castlemore and Bram West to family communities like Springdale and Fletcher’s Meadow, are prime for backyard builds, basement finishing and full-home renovations. Tridan serves the entire city.',
      'Many Brampton homes have great bones and room to grow: we build decks, interlock and outdoor kitchens out back, finish basements into legal suites and rec rooms, and modernize kitchens and bathrooms throughout.',
    ],
    localNote:
      'Brampton issues building permits and enforces zoning and second-unit registration through the City of Brampton. Legal basement apartments are popular here and require registration plus building and fire-code compliance, which we handle end to end.',
    priceNote:
      'Brampton offers strong value: decks and interlock commonly run $14k–$50k, legal basement suites $40k–$90k, and kitchen or bath renovations $18k–$70k.',
    faqs: [
      { q: 'Do you build legal (registered) basement apartments in Brampton?', a: 'Yes, Brampton requires second units to be registered and code-compliant. We confirm feasibility and handle the permits, build and inspections.' },
      { q: 'Do you serve Castlemore and Bram West?', a: 'We do, the larger lots there are ideal for outdoor living builds, additions and premium renovations.' },
      { q: 'How long do Brampton permits take?', a: 'Timelines vary by project and season. We prepare complete applications to avoid delays and keep you updated through approval.' },
    ],
    nearby: ['mississauga', 'caledon', 'oakville'],
  },
  {
    slug: 'caledon',
    name: 'Caledon',
    region: 'Peel',
    tier: 2,
    tagline: 'Estate outdoor living & renovations in Caledon',
    image: '1541888946425-d81bb19240f5',
    neighbourhoods: [
      'Caledon East', 'Bolton', 'Palgrave', 'Inglewood',
      'Cheltenham', 'Terra Cotta', 'Mono Mills', 'Caledon Village',
    ],
    intro: [
      'Caledon’s rolling estate properties and rural acreage call for landscaping and outdoor living on a bigger canvas, expansive interlock, natural-stone patios, retaining walls, outdoor kitchens and pool surrounds. Tridan builds premium outdoor spaces and renovations across Bolton, Caledon East, Palgrave and the surrounding villages.',
      'Larger lots often mean well and septic systems, greenbelt and conservation land, and grading that has to move real water, all of which we plan for. Inside, we bring the same craftsmanship to estate kitchens, additions and finishes.',
    ],
    localNote:
      'Caledon issues permits through the Town of Caledon, and much of the area falls within the Greenbelt, Niagara Escarpment and conservation-authority (TRCA/CVC) jurisdictions, which can affect what and where you can build. Well/septic and rural drainage are common considerations. We navigate these approvals with you.',
    priceNote:
      'Caledon estate projects run large: natural-stone patios and landscapes $25k–$120k+, additions well into six figures, and premium kitchen renovations $40k–$100k+.',
    faqs: [
      { q: 'Do you work on Caledon estate and acreage properties?', a: 'Yes, large-lot landscapes, natural-stone hardscaping, pool surrounds and estate renovations are exactly what we do in Caledon.' },
      { q: 'How do Greenbelt and Escarpment rules affect my project?', a: 'They can limit building envelopes and trigger conservation review. We assess your property early and design within the rules.' },
      { q: 'Can you handle grading and drainage on rural lots?', a: 'Absolutely, proper grading, French drains and water management are essential on acreage, and a core part of our landscape builds.' },
    ],
    nearby: ['brampton', 'mississauga', 'halton-hills'],
  },
  {
    slug: 'oakville',
    name: 'Oakville',
    region: 'Halton',
    tier: 1,
    tagline: 'Luxury outdoor living & renovations in Oakville',
    image: '1600585154340-be6161a56a0c',
    neighbourhoods: [
      'Old Oakville', 'Morrison', 'Eastlake', 'Glen Abbey',
      'Joshua Creek', 'Bronte', 'Clearview', 'West Oak Trails',
    ],
    intro: [
      'Oakville sets a high bar for outdoor living and renovation, from the heritage estates of Old Oakville and Morrison to the family enclaves of Glen Abbey and Joshua Creek. Tridan delivers the craftsmanship and finish these homes deserve, premium hardscaping, custom decks, pool surrounds, and refined interior renovations.',
      'South Oakville’s established lots and lakeside properties are ideal for estate landscapes, interlock and outdoor kitchens, while the town’s well-appointed homes take beautifully to high-end kitchen, bathroom and whole-home renovations.',
    ],
    localNote:
      'Oakville issues permits through the Town of Oakville and enforces zoning, heritage-district and private-tree-protection bylaws that are stricter than many GTA municipalities, mature-tree removal and heritage properties get particular scrutiny. Lakefront and creek lots (Sixteen Mile, Bronte Creek) may involve Conservation Halton review. We manage these approvals for you.',
    priceNote:
      'Oakville projects run premium: estate patios and landscapes $22k–$120k+, pool surrounds and retaining walls at the high end, kitchen renovations $40k–$100k+, and Old Oakville estate builds into the hundreds of thousands.',
    faqs: [
      { q: 'Do you handle Oakville’s heritage and tree bylaws?', a: 'Yes, Oakville’s private-tree and heritage-district rules are strict. We assess your property, design within the bylaws, and manage permits and any required approvals.' },
      { q: 'Do you serve Old Oakville and Morrison estates?', a: 'We do, these premium neighbourhoods are core to our Oakville work, from natural-stone landscapes to full estate renovations.' },
      { q: 'Are there conservation rules near Bronte and Sixteen Mile Creek?', a: 'Creek- and lake-adjacent lots may require Conservation Halton review. We identify this early and handle the approvals.' },
    ],
    nearby: ['burlington', 'mississauga', 'milton'],
  },
  {
    slug: 'burlington',
    name: 'Burlington',
    region: 'Halton',
    tier: 1,
    tagline: 'Outdoor living & renovations across Burlington',
    image: '1613490493576-7fde63acd811',
    neighbourhoods: [
      'Roseland', 'Shoreacres', 'Tyandaga', 'Millcroft',
      'Aldershot', 'Alton Village', 'The Orchard', 'Brant Hills',
    ],
    intro: [
      'From the mature, lakeside streets of Roseland and Shoreacres to the newer family communities of Alton Village and Millcroft, Burlington homeowners invest in their homes, and Tridan delivers the outdoor living and renovations to match.',
      'Burlington’s established south-end lots are ideal for landscape transformations, custom decks and interlock, while its solid homes across the city are perfect for kitchen, bathroom and basement renovations.',
    ],
    localNote:
      'Burlington issues permits through the City of Burlington and enforces zoning and deck/fence height bylaws. Escarpment-adjacent (Niagara Escarpment) and creek lots may involve Conservation Halton and NEC review. We manage Burlington permits and approvals for you.',
    priceNote:
      'Burlington outdoor-living builds commonly run $18k–$75k, kitchen renovations $32k–$90k, and Roseland / Shoreacres estate projects into six figures.',
    faqs: [
      { q: 'Do you handle City of Burlington permits?', a: 'Yes, we prepare drawings and manage permit applications for decks, additions, basements and structural work.' },
      { q: 'Do you serve Roseland and Shoreacres?', a: 'We do, these mature, premium neighbourhoods are central to our Burlington work.' },
      { q: 'Are there rules near the Escarpment?', a: 'Escarpment-adjacent lots can involve Niagara Escarpment Commission and Conservation Halton review. We identify and manage this early.' },
    ],
    nearby: ['oakville', 'milton', 'mississauga'],
  },
  {
    slug: 'milton',
    name: 'Milton',
    region: 'Halton',
    tier: 1,
    tagline: 'Your local Milton contractor, this is our home town',
    image: '1558904541-efa843a96f01',
    neighbourhoods: [
      'Old Milton', 'Bronte Meadows', 'Timberlea', 'Dorset Park',
      'Dempsey', 'Beaty', 'Clarke', 'Coates',
      'Willmott', 'Scott', 'Harrison', 'Ford',
    ],
    intro: [
      'Milton is our home base, and it shows in the work. We are out here every week, from the newer backyards in Ford, Cobban, Walker and Willmott to the established streets of Old Milton, Bronte Meadows and Timberlea, so we already know what a Milton project needs before we arrive. We know the Town of Milton permit process and who to call at Building Services. We know how the builder grading plans work in the new subdivisions and how to build a deck or patio without putting your Tarion warranty at risk. And we know the clay and freeze-thaw ground under this town, so our footings and bases are built to hold through the winters rather than heave in spring. When you hire a Milton contractor who actually works in Milton, you skip the guesswork.',
      'Most of what we do here comes down to one thing: finishing what the builders left blank. A huge share of Milton homes were sold with bare, graded backyards and unfinished basements, and turning those into real living space is our specialty: decks, interlock, fencing, landscaping, outdoor kitchens, finished basements and legal second suites. We handle the whole job under one licensed and insured roof, pull the Town of Milton permits, flag any Conservation Halton or Niagara Escarpment approvals when a lot needs them, give you a fixed price with no surprises, and back the workmanship with a written five-year warranty. This is our town, and we build here to a standard we are happy to have our name on down the street.',
    ],
    localNote:
      'The Town of Milton issues building permits through its Building Services group for decks, basements, additions, fences and structural work, while Halton Region handles water, sewer and regional-road service permits, so larger projects can need both. Development near Sixteen Mile Creek, wetlands, floodplains or steep slopes also needs Conservation Halton permission under Ontario Regulation 41/24, and properties on the Escarpment side of town (Milton Heights, Campbellville, the Kelso and Rattlesnake Point area) can sit in the Niagara Escarpment Plan Area and require a Niagara Escarpment Commission development permit on top of the Town permit. New-build homes come with an engineered grading plan the builder must maintain during the Tarion warranty period, and Milton allows up to three residential units on most urban lots, with every additional unit requiring Town registration since April 1, 2025.',
    priceNote:
      'Milton projects, mostly on standard subdivision lots, run realistically in 2026 as follows: decks about $12k to $40k, interlock and patios $10k to $45k, full backyard builds $15k to $60k and up, kitchen renovations $35k to $75k (custom higher), and finished basements $45k to $85k, with a legal registered second suite at the higher end.',
    faqs: [
      { q: 'Do I need a permit to build a deck in Milton?', a: 'Usually yes. The Town of Milton requires a building permit for any deck attached to the house and for freestanding decks larger than about 10 square metres. Smaller decks may not need one but still have to meet zoning setbacks and height rules. We confirm the requirement for your deck and handle the permit.' },
      { q: 'Who issues building permits in Milton?', a: 'The Town of Milton’s Building Services group in Business and Development issues building permits, and applications go through the Town’s online portal. We prepare the drawings and manage the entire application for you.' },
      { q: 'Can you finish the backyard on my new build in Ford, Cobban or Walker?', a: 'Yes, that is a big part of our Milton work. Many homes in the newer south-Milton communities are handed over with bare, graded yards. We build decks, interlock, fences, sod and full landscaping while respecting the builder’s grading plan, turning a blank yard into a finished outdoor space.' },
      { q: 'Will a deck or patio affect my new-home (Tarion) warranty?', a: 'It can if the work disturbs your lot grading or drainage. New Milton homes come with an engineered grading plan the builder must maintain during the warranty period. We build to that plan, keep the drainage swales working and keep water away from the foundation, so your project protects your warranty rather than putting it at risk.' },
      { q: 'Can I build a legal basement apartment in Milton?', a: 'Yes. Milton allows up to three residential units on most detached, semi-detached and townhouse lots in serviced areas. Since April 1, 2025 every additional unit must be registered with the Town, and it needs a building permit and must meet the Zoning By-law, the Ontario Building Code and the Fire Code, including ceiling height, a separate entrance, fire separation and egress. We confirm feasibility and build it to code.' },
      { q: 'Do I need Conservation Halton or Niagara Escarpment approval?', a: 'Only on some lots. Properties near Sixteen Mile Creek, a wetland, a floodplain or a steep slope may need Conservation Halton permission, and Escarpment-side lots in the Niagara Escarpment Plan Area may need a Niagara Escarpment Commission permit on top of the Town permit. We check your address early and manage any approvals that apply.' },
    ],
    nearby: ['oakville', 'burlington', 'halton-hills'],
  },
  {
    slug: 'halton-hills',
    name: 'Halton Hills',
    region: 'Halton',
    tier: 2,
    tagline: 'Outdoor living & renovations in Georgetown & Acton',
    image: '1541888946425-d81bb19240f5',
    neighbourhoods: [
      'Georgetown', 'Acton', 'Georgetown South', 'Glen Williams',
      'Norval', 'Stewarttown', 'Limehouse', 'Ballinafad',
    ],
    intro: [
      'Halton Hills, Georgetown, Acton and the surrounding villages, mixes established small-town homes with rural and estate properties along the Escarpment. Tridan delivers outdoor living, landscaping and renovations that suit both.',
      'Larger and rural lots here are ideal for natural-stone landscapes, retaining walls and outdoor kitchens, while Georgetown’s established neighbourhoods take beautifully to kitchen, bath and whole-home renovations.',
    ],
    localNote:
      'Halton Hills issues permits through the Town of Halton Hills. Much of the area is Escarpment and Greenbelt land with Conservation Halton and Niagara Escarpment jurisdiction, and rural lots often have well and septic systems, all of which affect design and approvals.',
    priceNote:
      'Halton Hills projects range from $12k–$55k for decks and landscaping to six figures for estate landscapes and additions; kitchen renovations commonly run $25k–$85k.',
    faqs: [
      { q: 'Do you work on rural and estate lots in Halton Hills?', a: 'Yes, large-lot landscapes, natural-stone hardscaping and estate renovations across Georgetown, Acton and the villages are a specialty.' },
      { q: 'How do Escarpment and Greenbelt rules affect my build?', a: 'They can limit building envelopes and trigger conservation review. We assess early and design within the rules.' },
      { q: 'Do you serve Glen Williams and the smaller villages?', a: 'We do, Glen Williams, Norval, Stewarttown and the surrounding communities are all within our service area.' },
    ],
    nearby: ['milton', 'caledon', 'oakville'],
  },
  {
    slug: 'pickering',
    name: 'Pickering',
    region: 'Durham',
    tier: 2,
    tagline: 'Decks, renovations in Pickering',
    image: '1416339306562-f3d12fefd36f',
    neighbourhoods: [
      'Rosebank', 'West Shore', 'Amberlea', 'Liverpool',
      'Bay Ridges', 'Dunbarton', 'Highbush', 'Rougemount',
    ],
    intro: [
      'Pickering combines lakeside communities like West Shore and Bay Ridges with established, tree-lined neighbourhoods and newer developments to the north. Tridan brings outdoor living and renovations to homeowners across the city.',
      'Mature lots in Rosebank, Dunbarton and Rougemount are ideal for decks, interlock and landscape builds, while Pickering’s solid homes are great candidates for kitchen, bathroom and basement renovations.',
    ],
    localNote:
      'Pickering issues permits through the City of Pickering. Lakefront and creek/ravine lots (Rouge, Petticoat Creek) may involve Toronto and Region Conservation Authority (TRCA) review and drainage considerations, which we plan for.',
    priceNote:
      'Pickering offers strong value: decks and interlock commonly run $14k–$50k, basement finishing $35k–$90k, and kitchen or bath renovations $18k–$70k.',
    faqs: [
      { q: 'Do you handle City of Pickering permits?', a: 'Yes, we prepare drawings and manage permits for decks, additions, basements and structural work.' },
      { q: 'Can you work on lakeside lots in West Shore or Bay Ridges?', a: 'We can, we account for wind exposure, drainage and any TRCA review on lake- and creek-adjacent lots.' },
      { q: 'Do you build basement apartments in Pickering?', a: 'Yes, we confirm feasibility and build legal, code-compliant second suites with permits.' },
    ],
    nearby: ['ajax', 'scarborough', 'whitby'],
  },
  {
    slug: 'ajax',
    name: 'Ajax',
    region: 'Durham',
    tier: 2,
    tagline: 'Outdoor living & renovations across Ajax',
    image: '1600566753086-00f18fb6b3ea',
    neighbourhoods: [
      'Pickering Beach', 'Applecroft', 'Nottingham', 'Riverside',
      'Central Ajax', 'Southwood', 'Lakeside', 'Audley',
    ],
    intro: [
      'Ajax pairs a beautiful Lake Ontario waterfront with family neighbourhoods and newer communities, giving homeowners plenty of backyard to build out and solid homes to renovate. Tridan serves the whole town.',
      'From lakeside decks and landscapes to interlock, fences and finished basements, we help Ajax homeowners get more out of their properties, with proper base-building and clean, on-schedule work.',
    ],
    localNote:
      'Ajax issues permits through the Town of Ajax. Waterfront and creek-adjacent lots (Duffins Creek, the Ajax waterfront) may involve TRCA/CLOCA review and drainage planning, which we account for in design and approvals.',
    priceNote:
      'Ajax projects offer good value: decks and interlock commonly run $14k–$50k, basement finishing $35k–$88k, and kitchen or bath renovations $18k–$68k.',
    faqs: [
      { q: 'Do you handle Town of Ajax permits?', a: 'Yes, we prepare drawings and manage permits for decks, additions, basements and renovations.' },
      { q: 'Can you build near the Ajax waterfront?', a: 'We can, waterfront and creek lots may involve conservation review and drainage planning, which we handle.' },
      { q: 'Which Ajax neighbourhoods do you serve?', a: 'All of them, from Pickering Beach and Lakeside to Applecroft, Nottingham and Central Ajax.' },
    ],
    nearby: ['pickering', 'whitby', 'scarborough'],
  },
  {
    slug: 'whitby',
    name: 'Whitby',
    region: 'Durham',
    tier: 2,
    tagline: 'Decks, renovations in Whitby',
    image: '1600607687939-ce8a6c25118c',
    neighbourhoods: [
      'Brooklin', 'Port Whitby', 'Williamsburg', 'Rolling Acres',
      'Pringle Creek', 'Downtown Whitby', 'Blue Grass Meadows', 'Taunton North',
    ],
    intro: [
      'From the historic charm of downtown Whitby and the growing community of Brooklin to newer family neighbourhoods, Whitby homeowners take pride in their properties, and Tridan delivers the outdoor living and renovations to match.',
      'Brooklin’s larger newer lots are ideal for decks, interlock and full landscape builds, while established Whitby homes are great for kitchen, bathroom and basement renovations.',
    ],
    localNote:
      'Whitby issues permits through the Town of Whitby. Creek and waterfront lots (Lynde Creek, Pringle Creek, the harbour) may involve CLOCA conservation review and drainage considerations, which we plan for.',
    priceNote:
      'Whitby projects offer strong value: decks and interlock commonly run $14k–$52k, basement finishing $35k–$90k, and kitchen or bath renovations $18k–$70k.',
    faqs: [
      { q: 'Do you serve Brooklin?', a: 'Yes, Brooklin’s newer, larger-lot homes are ideal for backyard builds and renovations, and a core part of our Whitby work.' },
      { q: 'Do you handle Town of Whitby permits?', a: 'We do, drawings and permit applications for decks, additions, basements and renovations.' },
      { q: 'Can you correct backyard drainage?', a: 'Yes, grading and drainage correction is a specialty, especially on creek-adjacent and newer lots.' },
    ],
    nearby: ['ajax', 'oshawa', 'pickering'],
  },
  {
    slug: 'oshawa',
    name: 'Oshawa',
    region: 'Durham',
    tier: 2,
    tagline: 'Outdoor living & renovations across Oshawa',
    image: '1600585154340-be6161a56a0c',
    neighbourhoods: [
      'Windfields', 'Kedron', 'Samac', 'McLaughlin',
      'Northglen', 'Donevan', 'Lakeview', 'Central Oshawa',
    ],
    intro: [
      'Oshawa offers exceptional value across the GTA’s east end, with everything from established century homes near downtown to fast-growing communities in the north like Windfields and Kedron. Tridan brings premium outdoor living and renovations to the whole city.',
      'Newer north-Oshawa lots are ideal for decks, interlock and landscaping, while established homes are perfect candidates for kitchen, bathroom and basement renovations, including legal second suites.',
    ],
    localNote:
      'Oshawa issues permits through the City of Oshawa. Creek and lakefront lots (Oshawa Creek, the waterfront) may involve CLOCA conservation review. Legal second suites are common here and require code compliance and permits, which we handle.',
    priceNote:
      'Oshawa offers the strongest value in our service area: decks and interlock commonly run $13k–$48k, basement suites $35k–$85k, and kitchen or bath renovations $16k–$65k.',
    faqs: [
      { q: 'Do you build legal basement apartments in Oshawa?', a: 'Yes, we confirm feasibility (ceiling height, egress, fire separation) and build code-compliant second suites with permits.' },
      { q: 'Do you serve north Oshawa (Windfields, Kedron)?', a: 'We do, these growing communities have newer homes ideal for backyard builds and renovations.' },
      { q: 'Do you handle City of Oshawa permits?', a: 'Yes, drawings and permit applications for decks, additions, basements and renovations.' },
    ],
    nearby: ['whitby', 'clarington', 'ajax'],
  },
  {
    slug: 'clarington',
    name: 'Clarington',
    region: 'Durham',
    tier: 2,
    tagline: 'Decks, landscaping & renovations in Clarington',
    image: '1541888946425-d81bb19240f5',
    neighbourhoods: [
      'Bowmanville', 'Courtice', 'Newcastle', 'Orono',
      'Newtonville', 'Mitchell Corners', 'Hampton', 'Tyrone',
    ],
    intro: [
      'Clarington, Bowmanville, Courtice, Newcastle and the surrounding rural communities, blends growing family neighbourhoods with country and estate properties. Tridan delivers outdoor living, landscaping and renovations across the municipality.',
      'Larger and rural lots here are ideal for expansive landscapes, natural-stone patios and outdoor kitchens, while the area’s newer and established homes are perfect for decks, basements and interior renovations.',
    ],
    localNote:
      'Clarington issues permits through the Municipality of Clarington. Rural lots often have well and septic systems, and creek/waterfront properties may involve CLOCA and Ganaraska conservation review and drainage planning, all of which we account for.',
    priceNote:
      'Clarington projects offer excellent value: decks and landscaping commonly run $12k–$50k, and kitchen, bath or basement renovations $16k–$75k, with estate landscapes higher.',
    faqs: [
      { q: 'Do you work on rural and acreage lots in Clarington?', a: 'Yes, large-lot landscapes, natural-stone hardscaping, drainage and estate renovations across Bowmanville, Courtice and Newcastle are a specialty.' },
      { q: 'Do you handle Municipality of Clarington permits?', a: 'We do, drawings and permit applications for decks, additions, basements and renovations.' },
      { q: 'Can you correct drainage on rural lots?', a: 'Absolutely, grading, French drains and water management are essential on acreage and a core part of our work.' },
    ],
    nearby: ['oshawa', 'whitby', 'ajax'],
  },

  // ------------------------------ HAMILTON ------------------------------
  {
    slug: 'hamilton',
    name: 'Hamilton',
    region: 'Hamilton',
    tier: 2,
    tagline: 'Outdoor living, renovations across Hamilton',
    image: '1613490493576-7fde63acd811',
    neighbourhoods: [
      'Durand', 'Kirkendall', 'Westdale', 'Corktown',
      'Strathcona', 'North End', 'East Mountain', 'West Mountain',
    ],
    intro: [
      'Hamilton is a city of two halves, the lower city and the Mountain, split by the Niagara Escarpment, and that geography shapes almost every project we take on here. Tridan builds outdoor living spaces, renovations across the whole city, from the heritage streets of Durand and Kirkendall to the newer subdivisions up on the Mountain.',
      'Much of the lower city is genuinely old. Durand holds one of the densest concentrations of early-1900s homes in the country, and Corktown and Strathcona are full of 19th-century brick. That often means knob-and-tube wiring, balloon framing and heritage considerations, all of which we know how to handle properly.',
    ],
    localNote:
      'Hamilton issues permits through the City of Hamilton Building Division. Because the city amalgamated the former Hamilton, Ancaster, Dundas, Flamborough, Glanbrook and Stoney Creek in 2001, zoning still varies by which former municipality a lot sits in. The Niagara Escarpment drives grading, drainage and retaining-wall work, and lower-city heritage areas like Durand can trigger heritage review. Escarpment and creek lots fall under the Hamilton Conservation Authority.',
    priceNote:
      'Hamilton spans the full range: value in the lower and east core, mid in neighbourhoods like Crown Point and Kirkendall, and premium in Durand and Westdale. Outdoor living builds commonly run $15k to $65k and renovations $18k to $90k.',
    faqs: [
      { q: 'Do you handle City of Hamilton permits and heritage areas?', a: 'Yes. We prepare drawings and manage permits with the City of Hamilton, and we handle heritage review where it applies in areas like Durand and the lower-city core.' },
      { q: 'Do you work both on the Mountain and in the lower city?', a: 'We do. The Escarpment split means very different site conditions, and we build for both, including the grading and retaining work Mountain-edge lots often need.' },
      { q: 'Can you renovate century and heritage homes?', a: 'Absolutely. Hamilton’s older stock often has knob-and-tube, balloon framing and plaster, and we renovate these homes to modern code while respecting their character.' },
    ],
    nearby: ['ancaster', 'dundas', 'stoney-creek'],
  },
  {
    slug: 'ancaster',
    name: 'Ancaster',
    region: 'Hamilton',
    tier: 2,
    tagline: 'Premium outdoor living & renovations in Ancaster',
    image: '1600585154340-be6161a56a0c',
    neighbourhoods: [
      'Meadowlands', 'Olde Ancaster', 'Ancaster Heights', 'Parkview Heights',
      'Spring Valley', 'Oakhill', 'Tiffany Hill', 'Mohawk Meadows',
    ],
    intro: [
      'One of Hamilton’s most affluent communities, Ancaster sits atop and along the Niagara Escarpment, with mature woodlots, ravine lots and a historic stone-and-brick village core. Tridan brings premium outdoor living and renovation work to homeowners across Olde Ancaster, the Meadowlands and the estate streets in between.',
      'Ravine and escarpment-edge lots here come with slope, setback and tree-protection constraints that reward careful design, especially for decks, retaining walls and full backyard builds. The result, done right, is an outdoor space that works with the landscape instead of fighting it.',
    ],
    localNote:
      'Ancaster is part of the City of Hamilton for permits. Escarpment, ravine and woodlot lots involve slope stability, tree-protection and setback rules, and fall under the Hamilton Conservation Authority (Dundas Valley and Spencer Creek systems). Olde Ancaster’s heritage core can trigger heritage review on exterior work.',
    priceNote:
      'Ancaster runs premium, with executive and estate demand: outdoor living and landscape builds commonly $25k to $120k and up, and high-end renovations $40k to $120k, with Meadowlands townhome pockets sitting a step lower.',
    faqs: [
      { q: 'Do you build on Ancaster ravine and escarpment lots?', a: 'Yes, these are a specialty. We engineer retaining walls, grading and drainage and respect tree-protection and setback rules on sloped Ancaster lots.' },
      { q: 'Do you serve Olde Ancaster and the Meadowlands?', a: 'We do, from heritage-sensitive work in the village core to premium builds across the Meadowlands and the estate streets.' },
      { q: 'Are Ancaster permits handled through Hamilton?', a: 'Yes, Ancaster is part of the City of Hamilton, and we manage the permits and any heritage or conservation review for you.' },
    ],
    nearby: ['dundas', 'hamilton', 'stoney-creek'],
  },
  {
    slug: 'dundas',
    name: 'Dundas',
    region: 'Hamilton',
    tier: 2,
    tagline: 'Outdoor living & renovations in the Valley Town',
    image: '1558904541-efa843a96f01',
    neighbourhoods: [
      'Governor’s Road', 'University Gardens', 'Pleasant Valley', 'Greensville',
      'Cootes Paradise', 'Highland Park', 'Cross-Melville', 'Dundas Driving Park',
    ],
    intro: [
      'Tucked into the Dundas Valley at the head of the Escarpment, Dundas pairs a historic downtown with leafy, sought-after streets. Tridan builds outdoor living spaces and renovations throughout the Valley Town, from Governor’s Road and Greensville to the heritage core.',
      'The valley setting, with Spencer Creek and the Cootes Paradise wetland, means floodplain, high water table and slope considerations on many lots. Much of the housing stock is older 19th-century brick and stone, so we bring both the craftsmanship and the code knowledge these homes need.',
    ],
    localNote:
      'Dundas is part of the City of Hamilton for permits. The Cross-Melville and St. Clair Boulevard area is a designated Heritage Conservation District, so exterior work in the core can trigger heritage permits. Spencer Creek, the Dundas Valley Conservation Area and Cootes Paradise put many lots under Hamilton Conservation Authority review, with floodplain and slope factors.',
    priceNote:
      'Dundas runs premium in Governors, Greensville and Pleasant Valley, and value to mid near University Gardens by McMaster. Outdoor living builds commonly $20k to $90k and renovations $25k to $110k.',
    faqs: [
      { q: 'Do you handle heritage permits in the Dundas core?', a: 'Yes. The Cross-Melville area is a Heritage Conservation District, and we manage the heritage review and permits for exterior work there.' },
      { q: 'Are there floodplain considerations in the valley?', a: 'On many lots, yes. Spencer Creek and Cootes Paradise create floodplain and drainage factors, which we plan for and clear with the Hamilton Conservation Authority.' },
      { q: 'Do you renovate older brick and stone homes?', a: 'That is much of our Dundas work. We modernize 19th-century homes to code while keeping their character intact.' },
    ],
    nearby: ['ancaster', 'hamilton', 'waterdown'],
  },
  {
    slug: 'stoney-creek',
    name: 'Stoney Creek',
    region: 'Hamilton',
    tier: 2,
    tagline: 'Decks, landscaping & renovations in Stoney Creek',
    image: '1416339306562-f3d12fefd36f',
    neighbourhoods: [
      'Winona', 'Fruitland', 'Battlefield', 'Fifty Point',
      'Vinemount', 'Tapleytown', 'Confederation Park', 'Lakeshore',
    ],
    intro: [
      'Stoney Creek runs from the Lake Ontario shoreline up over the Escarpment, mixing a historic lower core with newer subdivisions built on former orchard land. Tridan builds outdoor living spaces and renovations across the community, from Battlefield to the waterfront-adjacent streets of Winona and Fifty Point.',
      'The former orchard lands around Fruitland and Winona sit on agricultural clay, and the shoreline adds high-water-table and drainage factors. We build with those soils and site conditions in mind, so patios, decks and foundations stay sound.',
    ],
    localNote:
      'Stoney Creek is part of the City of Hamilton for permits. The Escarpment splits the historic lower core from the upper section, and the Lake Ontario shoreline and Confederation Park bring waterfront and drainage considerations under the Hamilton Conservation Authority. Newer subdivisions sit on agricultural clay that matters for footings and grading.',
    priceNote:
      'Stoney Creek is mid overall, premium in newer Winona and Fifty Point waterfront-adjacent builds and value in older Battlefield streets. Outdoor living commonly $16k to $70k and renovations $18k to $85k.',
    faqs: [
      { q: 'Do you build on the clay soils in Winona and Fruitland?', a: 'Yes. Former orchard clay needs proper base preparation and drainage, which we build in as standard for patios, decks and grading.' },
      { q: 'Can you work on waterfront-adjacent lots?', a: 'We can. Shoreline and Confederation Park lots involve drainage and high water tables, and we design and permit accordingly.' },
      { q: 'Are Stoney Creek permits handled through Hamilton?', a: 'Yes, and we manage the drawings, permits and any conservation review for you.' },
    ],
    nearby: ['hamilton', 'grimsby', 'ancaster'],
  },
  {
    slug: 'waterdown',
    name: 'Waterdown',
    region: 'Hamilton',
    tier: 2,
    tagline: 'Outdoor living & renovations in Waterdown',
    image: '1541888946425-d81bb19240f5',
    neighbourhoods: [
      'Downtown Core', 'West Waterdown', 'East Waterdown', 'Smokey Hollow',
      'Mountain Brow', 'Parkside', 'Rockcliffe', 'rural Flamborough',
    ],
    intro: [
      'Perched atop the Escarpment, Waterdown blends a historic mill-town core with fast-growing modern subdivisions and rural Flamborough estate lots. Tridan builds premium outdoor living spaces and renovations across the community.',
      'Smokey Hollow’s waterfalls once powered the town’s 19th-century mills, and the creek-edge and ravine lots near the core carry floodplain and slope considerations. West Waterdown, by contrast, is newer subdivision where the work is decks, interlock, fences and full backyard builds.',
    ],
    localNote:
      'Waterdown is part of the City of Hamilton for permits. Conservation jurisdiction is watershed-based here: urban Waterdown drains via Grindstone Creek under Conservation Halton, while western Flamborough falls under the Hamilton Conservation Authority, so the correct authority is confirmed per address. Escarpment and creek-edge lots involve slope and floodplain factors.',
    priceNote:
      'Waterdown runs mid to premium, with premium on executive builds and rural-estate Flamborough lots. Outdoor living commonly $16k to $80k and renovations $20k to $100k.',
    faqs: [
      { q: 'Which conservation authority covers Waterdown?', a: 'It depends on the lot. Urban Waterdown drains via Grindstone Creek under Conservation Halton, while western Flamborough is Hamilton Conservation Authority. We confirm the correct authority for your address.' },
      { q: 'Do you build out new-subdivision backyards in West Waterdown?', a: 'Yes, that is a big part of our Waterdown work, turning blank builder-grade yards into finished decks, interlock and landscapes.' },
      { q: 'Do you work on rural Flamborough estate lots?', a: 'We do, including natural-stone landscapes, drainage and estate renovations on acreage.' },
    ],
    nearby: ['dundas', 'hamilton', 'burlington'],
  },
  {
    slug: 'binbrook',
    name: 'Binbrook',
    region: 'Hamilton',
    tier: 3,
    tagline: 'Decks, landscaping & renovations in Binbrook',
    image: '1600607687939-ce8a6c25118c',
    neighbourhoods: [
      'The Fairgrounds', 'Cachet Binbrook', 'Village Core', 'Fletcher',
      'rural Glanbrook', 'Summerlea', 'Bristol', 'Southbrook',
    ],
    intro: [
      'One of the fastest-growing communities in the region, Binbrook sits off the Escarpment on the flat southeastern plain, so most of its housing is newer subdivision anchored by a historic village core and the long-running Binbrook Fairgrounds. Tridan builds decks, landscaping and renovations across the community.',
      'The land here is heavy Haldimand clay with poor natural drainage and real freeze-thaw and frost-heave risk, which makes proper footings, base preparation and grading essential for anything built outdoors.',
    ],
    localNote:
      'Binbrook is part of the City of Hamilton for permits, but unlike the rest of the Hamilton set it falls under the Niagara Peninsula Conservation Authority, which manages Binbrook Conservation Area. The flat clay plain means drainage and frost-heave protection are central to any deck, patio or foundation work.',
    priceNote:
      'Binbrook is mid, value to mid on newer subdivisions and premium on rural-estate acreage. Decks and landscaping commonly $13k to $55k and renovations $16k to $75k.',
    faqs: [
      { q: 'How do you handle the heavy clay soil in Binbrook?', a: 'With proper base preparation, drainage and frost-depth footings. Haldimand clay drains slowly and heaves in freeze-thaw, so we build for it on every outdoor project.' },
      { q: 'Do you handle Binbrook permits and conservation review?', a: 'Yes. Permits go through the City of Hamilton, and conservation review here falls under the Niagara Peninsula Conservation Authority, which we manage.' },
      { q: 'Do you build out new-subdivision backyards?', a: 'That is much of our Binbrook work, finishing blank new-build yards with decks, patios, fences and landscaping.' },
    ],
    nearby: ['stoney-creek', 'hamilton', 'grimsby'],
  },

  // ------------------------------- NIAGARA -------------------------------
  {
    slug: 'st-catharines',
    name: 'St. Catharines',
    region: 'Niagara',
    tier: 2,
    tagline: 'Outdoor living & renovations in the Garden City',
    image: '1558904541-efa843a96f01',
    neighbourhoods: [
      'Port Dalhousie', 'Grantham', 'Merritton', 'Western Hill',
      'Glenridge', 'Port Weller', 'North End', 'Martindale Heights',
    ],
    intro: [
      'The largest city in Niagara, St. Catharines sits at the northern end of the Welland Canal and earned its nickname, the Garden City, honestly. Tridan builds outdoor living spaces and renovations throughout, from the waterfront charm of Port Dalhousie to established neighbourhoods like Grantham and Glenridge.',
      'Former canal routes and creeks like Twelve Mile Creek and Dick’s Creek run through the city, so drainage, fill and creek-adjacent site conditions come up often. Older stock in Merritton, Western Hill and the North End rewards careful renovation.',
    ],
    localNote:
      'St. Catharines issues its own permits through the City of St. Catharines, and conservation review falls under the Niagara Peninsula Conservation Authority. Former canal and industrial land near Port Weller and Merritton can involve fill and drainage factors, and creek-adjacent lots sit in NPCA regulated areas.',
    priceNote:
      'St. Catharines runs mid, with premium reserved for Port Dalhousie waterfront and Glenridge. Outdoor living commonly $15k to $65k and renovations $17k to $80k.',
    faqs: [
      { q: 'Do you handle City of St. Catharines permits?', a: 'Yes, we prepare drawings and manage permits, plus any Niagara Peninsula Conservation Authority review on creek and canal-adjacent lots.' },
      { q: 'Do you work on Port Dalhousie waterfront lots?', a: 'We do, and we design for the drainage and exposure that waterfront sites bring.' },
      { q: 'Can you renovate older homes in Merritton and the North End?', a: 'Absolutely. These established areas have older stock we regularly modernize to code.' },
    ],
    nearby: ['niagara-falls', 'niagara-on-the-lake', 'grimsby'],
  },
  {
    slug: 'niagara-falls',
    name: 'Niagara Falls',
    region: 'Niagara',
    tier: 2,
    tagline: 'Decks, renovations in Niagara Falls',
    image: '1416339306562-f3d12fefd36f',
    neighbourhoods: [
      'Chippawa', 'Stamford', 'Willoughby', 'Drummondville',
      'Fallsview', 'Lundy’s Lane', 'Mount Carmel', 'Chippawa Riverfront',
    ],
    intro: [
      'Beyond the tourist districts, Niagara Falls is a city of established residential neighbourhoods like Stamford, Chippawa and Willoughby. Tridan builds outdoor living spaces, renovations for homeowners across the residential city.',
      'Built along the Niagara Gorge and River, the city brings grade, setback and slope-stability considerations near the water. River Parkway and Chippawa riverfront lots in particular sit in regulated areas that we plan and permit around.',
    ],
    localNote:
      'Niagara Falls issues permits through the City of Niagara Falls, with conservation review under the Niagara Peninsula Conservation Authority for the Niagara and Welland River watersheds. River-adjacent and Parkway lots involve slope stability and setback factors we account for in design and approvals.',
    priceNote:
      'Niagara Falls is mid to premium, with premium on Niagara River Parkway and Fallsview-adjacent properties. Outdoor living commonly $15k to $70k and renovations $17k to $85k.',
    faqs: [
      { q: 'Do you work on Niagara River Parkway lots?', a: 'Yes. River-adjacent lots involve slope and setback rules and NPCA review, all of which we handle.' },
      { q: 'Do you serve Chippawa and Stamford?', a: 'We do, these established residential neighbourhoods are core to our Niagara Falls work.' },
      { q: 'Do you handle City of Niagara Falls permits?', a: 'Yes, drawings, permits and any conservation review for decks, additions, basements and renovations.' },
    ],
    nearby: ['niagara-on-the-lake', 'st-catharines', 'fort-erie'],
  },
  {
    slug: 'niagara-on-the-lake',
    name: 'Niagara-on-the-Lake',
    region: 'Niagara',
    tier: 2,
    tagline: 'Heritage-sensitive renovations & estate outdoor living',
    image: '1600585154340-be6161a56a0c',
    neighbourhoods: [
      'Old Town', 'Virgil', 'St. Davids', 'Queenston',
      'Glendale', 'Chautauqua', 'Garrison Village', 'Homer',
    ],
    intro: [
      'The most premium market in Niagara, Niagara-on-the-Lake pairs a beautifully preserved historic Old Town with wine-country estates and vineyards. Tridan delivers the heritage-sensitive craftsmanship and high-end outdoor living these properties call for.',
      'Old Town is a designated Heritage Conservation District, so exterior alterations, additions and many renovations trigger heritage review that shapes scope, materials and timelines. Out in the vineyards, the work skews to high-end custom builds and estate landscapes.',
    ],
    localNote:
      'Niagara-on-the-Lake issues permits through the Town (via Cloudpermit), with conservation review under the Niagara Peninsula Conservation Authority. Old Town’s Heritage Conservation District designation means exterior work usually requires heritage permits, and much of the town is agricultural and vineyard land with its own considerations.',
    priceNote:
      'Niagara-on-the-Lake is firmly premium, with town-wide values well above a million and strong demand for heritage and estate work. Outdoor living and landscape builds commonly $30k to $150k and up, and renovations $40k to $150k and up.',
    faqs: [
      { q: 'Do you handle heritage permits in Old Town?', a: 'Yes. Old Town is a Heritage Conservation District, so we manage the heritage review and permits and build to sympathetic materials and detailing.' },
      { q: 'Do you build estate landscapes on vineyard properties?', a: 'We do, high-end custom outdoor living and landscape builds are a core part of our Niagara-on-the-Lake work.' },
      { q: 'Are timelines longer for heritage work?', a: 'They can be, because of the review process. We build the heritage approval timeline into your schedule up front.' },
    ],
    nearby: ['niagara-falls', 'st-catharines', 'grimsby'],
  },
  {
    slug: 'grimsby',
    name: 'Grimsby',
    region: 'Niagara',
    tier: 2,
    tagline: 'Waterfront & escarpment outdoor living in Grimsby',
    image: '1613490493576-7fde63acd811',
    neighbourhoods: [
      'Downtown Grimsby', 'Grimsby Beach', 'Grimsby-on-the-Lake', 'Nelles Estates',
      'Dorchester Estates', 'Grimsby West', 'The Bench', 'Casablanca',
    ],
    intro: [
      'Squeezed between Lake Ontario and the Niagara Escarpment, Grimsby is the western gateway to wine country and a magnet for GTA buyers moving down the lake. Tridan builds waterfront and escarpment outdoor living and renovations across the town.',
      'Most homes sit on a narrow plain between lake and Escarpment, and the historic Grimsby Beach cottages, the famous Painted Ladies, sit alongside newer Grimsby-on-the-Lake builds. Escarpment-area lots can carry an extra layer of approval that we manage.',
    ],
    localNote:
      'Grimsby issues permits through the Town of Grimsby, with conservation review under the Niagara Peninsula Conservation Authority. Escarpment properties can fall within the Niagara Escarpment Plan Area and require a Niagara Escarpment Commission development permit on top of the municipal permit, and the NPCA is updating floodplain mapping for local creeks.',
    priceNote:
      'Grimsby is mid to premium, with true premium on waterfront (Grimsby-on-the-Lake) and escarpment-estate lots, pushed up by GTA-buyer demand. Outdoor living commonly $18k to $90k and renovations $22k to $110k.',
    faqs: [
      { q: 'Do escarpment lots in Grimsby need extra permits?', a: 'Sometimes. Properties in the Niagara Escarpment Plan Area may need a Niagara Escarpment Commission permit alongside the town permit, which we identify and manage.' },
      { q: 'Do you build on Grimsby waterfront lots?', a: 'Yes, waterfront and lake-adjacent outdoor living is a specialty, designed for exposure and drainage.' },
      { q: 'Do you serve GTA buyers new to Grimsby?', a: 'Often. Many of our Grimsby clients are recent arrivals from the GTA, and we bring the same premium standards down the lake.' },
    ],
    nearby: ['lincoln', 'st-catharines', 'stoney-creek'],
  },
  {
    slug: 'welland',
    name: 'Welland',
    region: 'Niagara',
    tier: 3,
    tagline: 'Decks, renovations in Welland',
    image: '1600566753086-00f18fb6b3ea',
    neighbourhoods: [
      'Downtown', 'Dain City', 'Cooks Mills', 'Crowland',
      'Chippawa Park', 'Woodlawn', 'South Pelham', 'Northgate',
    ],
    intro: [
      'Built around the historic Welland Canal, Welland offers some of the most affordable family housing in Niagara and plenty of homes ready for outdoor living and renovation. Tridan builds decks, renovations throughout the city.',
      'Canal-adjacent lots along the Welland Recreational Waterway carry water-proximity and grading considerations, and the city’s heavy Haldimand clay drains slowly, which makes foundation, footing and drainage work especially important here.',
    ],
    localNote:
      'Welland issues permits through the City of Welland, with conservation review under the Niagara Peninsula Conservation Authority. Expansive clay-plain soils plus freeze-thaw drive footing depth and drainage planning, and canal-adjacent lots involve water-proximity factors.',
    priceNote:
      'Welland is value to mid, one of the more affordable markets in Niagara. Decks and outdoor living commonly $13k to $55k and renovations $16k to $70k.',
    faqs: [
      { q: 'How do you handle Welland’s clay soil?', a: 'With frost-depth footings, proper base preparation and drainage. The expansive clay heaves in freeze-thaw, so we build for it on every outdoor project.' },
      { q: 'Do you handle City of Welland permits?', a: 'Yes, drawings and permits plus any Niagara Peninsula Conservation Authority review on canal and creek-adjacent lots.' },
      { q: 'Do you serve all of Welland?', a: 'We do, from downtown and Dain City to Cooks Mills, Crowland and the south end.' },
    ],
    nearby: ['fort-erie', 'niagara-falls', 'lincoln'],
  },
  {
    slug: 'lincoln',
    name: 'Lincoln',
    region: 'Niagara',
    tier: 3,
    tagline: 'Estate & wine-country outdoor living in Lincoln',
    image: '1589939705384-5185137a7f0f',
    neighbourhoods: [
      'Beamsville', 'Vineland', 'Vineland Station', 'Jordan',
      'Jordan Station', 'Campden', 'Rockway', 'Tintern',
    ],
    intro: [
      'The Town of Lincoln, anchored by Beamsville, sits between Lake Ontario and the Escarpment in the heart of Niagara wine and tender-fruit country. Tridan builds estate outdoor living and renovations across its eight communities, from Beamsville to Vineland and Jordan.',
      'This is the Beamsville Bench, prized vineyard land with steep bench slopes and a deep heritage layer dating to 1788 settlement. Escarpment and bench properties can require an extra approval, and vineyard-estate work rewards a high level of finish.',
    ],
    localNote:
      'Lincoln issues permits through the Town of Lincoln (via Cloudpermit), with conservation review under the Niagara Peninsula Conservation Authority. Escarpment and Bench properties may require a Niagara Escarpment Commission development permit on top of the town permit, and the NPCA maintains floodplain mapping for local creeks.',
    priceNote:
      'Lincoln is mid to premium, value to mid in townhome and condo stock and premium on vineyard-estate and escarpment-bench properties. Outdoor living commonly $16k to $90k and renovations $20k to $110k.',
    faqs: [
      { q: 'Do bench and escarpment lots need extra permits?', a: 'They can. Properties in the Niagara Escarpment Plan Area may need a Niagara Escarpment Commission permit alongside the town permit, which we manage.' },
      { q: 'Do you build estate landscapes on vineyard properties?', a: 'Yes, high-end outdoor living and landscape builds on Bench and vineyard-estate lots are a specialty.' },
      { q: 'Do you serve all of Lincoln’s communities?', a: 'We do, including Beamsville, Vineland, Jordan, Campden and the surrounding hamlets.' },
    ],
    nearby: ['grimsby', 'st-catharines', 'niagara-falls'],
  },
  {
    slug: 'fort-erie',
    name: 'Fort Erie',
    region: 'Niagara',
    tier: 3,
    tagline: 'Waterfront decks, landscaping & renovations in Fort Erie',
    image: '1416339306562-f3d12fefd36f',
    neighbourhoods: [
      'Crystal Beach', 'Ridgeway', 'Stevensville', 'Bridgeburg',
      'Point Abino', 'Black Creek', 'Crescent Park', 'Snyder',
    ],
    intro: [
      'Fort Erie has two waterfronts, Lake Erie to the south and the Niagara River to the east, and a lot of former cottage stock now lived in year-round. Tridan builds waterfront outdoor living, landscaping and renovations across the town, from Crystal Beach to Ridgeway and Stevensville.',
      'Winterizing and renovating former seasonal homes is common work here, along with the drainage and freeze-thaw planning that shoreline and clay-influenced lots require. Ridgeway’s historic core sits on a limestone ridge, giving it its own character.',
    ],
    localNote:
      'Fort Erie issues permits through the Town of Fort Erie, with conservation review under the Niagara Peninsula Conservation Authority across the Lake Erie, Lake Ontario and Niagara River watersheds. Shoreline lots frequently touch NPCA regulated areas, and clay-influenced soils and freeze-thaw drive footing and drainage work.',
    priceNote:
      'Fort Erie is value to mid, with premium waterfront pockets at Point Abino and Crystal Beach lakefront. Decks and outdoor living commonly $13k to $60k and renovations $16k to $75k.',
    faqs: [
      { q: 'Do you winterize and renovate former cottages?', a: 'Yes, that is a big part of our Fort Erie work, upgrading former seasonal homes for year-round living to code.' },
      { q: 'Can you build on Crystal Beach and Point Abino waterfront lots?', a: 'We can, designing for exposure, drainage and any NPCA review on shoreline lots.' },
      { q: 'Do you handle Town of Fort Erie permits?', a: 'Yes, drawings, permits and conservation review for decks, additions and renovations.' },
    ],
    nearby: ['niagara-falls', 'welland', 'st-catharines'],
  },

  // -------------------------- WATERLOO / WELLINGTON --------------------------
  {
    slug: 'cambridge',
    name: 'Cambridge',
    region: 'Waterloo',
    tier: 3,
    tagline: 'Heritage renovations & outdoor living in Cambridge',
    image: '1541888946425-d81bb19240f5',
    neighbourhoods: [
      'West Galt', 'East Galt', 'North Galt', 'Preston',
      'Hespeler', 'Blair', 'Riverside', 'Silver Heights',
    ],
    intro: [
      'Formed from Galt, Preston, Hespeler and Blair, Cambridge sits at the meeting of the Grand and Speed rivers and has one of the richest stocks of 19th-century limestone architecture in Ontario. Tridan builds outdoor living and renovations across the city, with real care for its heritage character.',
      'Downtown Galt sits in the Grand River floodplain, so riverside projects trigger conservation regulation, and West Galt’s dense limestone stock rewards heritage matching and repointing skills. Elsewhere, the work is decks, additions and full backyard builds.',
    ],
    localNote:
      'Cambridge issues permits through the City of Cambridge, with conservation review under the Grand River Conservation Authority. Downtown Galt and riverside lots fall within the Grand River floodplain and are subject to GRCA floodplain and fill regulations. Regional clay tills plus heavy freeze-thaw make frost-depth footings essential.',
    priceNote:
      'Cambridge is value to mid, the softest of the Waterloo-area markets, with a premium band in West Galt heritage pockets and rural Blair. Outdoor living commonly $14k to $60k and renovations $16k to $80k.',
    faqs: [
      { q: 'Do you work on heritage limestone homes in West Galt?', a: 'Yes, heritage matching, repointing and sympathetic renovation of Galt’s 19th-century limestone stock is a specialty.' },
      { q: 'Are there floodplain rules along the Grand River?', a: 'Downtown Galt and riverside lots fall in the Grand River floodplain under GRCA regulation, which we identify and manage.' },
      { q: 'Do you handle City of Cambridge permits?', a: 'We do, drawings, permits and conservation review for decks, additions and renovations.' },
    ],
    nearby: ['kitchener', 'waterloo', 'guelph'],
  },
  {
    slug: 'kitchener',
    name: 'Kitchener',
    region: 'Waterloo',
    tier: 3,
    tagline: 'Decks, renovations across Kitchener',
    image: '1600566753086-00f18fb6b3ea',
    neighbourhoods: [
      'Doon', 'Forest Heights', 'Stanley Park', 'Bridgeport',
      'Victoria Park', 'Rosemount', 'Huron Park', 'Country Hills',
    ],
    intro: [
      'A broad, growing city at the heart of Waterloo Region, Kitchener runs from century homes near Victoria Park and Bridgeport to newer subdivisions in Doon and the south end. Tridan builds outdoor living and renovations across the whole city.',
      'The Grand River runs the east and north edge, so riverside and low-lying lots in Bridgeport, Freeport and Doon fall under conservation regulation. The older Victoria Park and Bridgeport areas hold century homes that reward period-sensitive work.',
    ],
    localNote:
      'Kitchener issues permits through the City of Kitchener, with conservation review under the Grand River Conservation Authority. Riverside and low-lying lots fall under GRCA floodplain and fill regulation, and regional clay plus freeze-thaw make frost-depth footings important.',
    priceNote:
      'Kitchener is value to mid, a broad middle-income market with value pricing in the denser older east end. Outdoor living commonly $14k to $60k and renovations $16k to $78k.',
    faqs: [
      { q: 'Do you serve both older and newer Kitchener neighbourhoods?', a: 'Yes, from century homes in Victoria Park and Bridgeport to newer subdivisions in Doon and the south end.' },
      { q: 'Are there floodplain rules near the Grand River?', a: 'Riverside and low-lying lots fall under GRCA regulation, which we identify and manage.' },
      { q: 'Do you handle City of Kitchener permits?', a: 'We do, drawings, permits and any conservation review for your project.' },
    ],
    nearby: ['waterloo', 'cambridge', 'guelph'],
  },
  {
    slug: 'waterloo',
    name: 'Waterloo',
    region: 'Waterloo',
    tier: 3,
    tagline: 'Outdoor living & renovations in Waterloo',
    image: '1558904541-efa843a96f01',
    neighbourhoods: [
      'Uptown', 'Beechwood', 'Eastbridge', 'Lakeshore North',
      'Lakeshore South', 'Colonial Acres', 'Vista Hills', 'Clair Hills',
    ],
    intro: [
      'A university city of established 1970s-to-1990s subdivisions, Waterloo is prime territory for decks, additions and outdoor living rather than heritage stonework. Tridan builds outdoor living spaces and renovations across the city, from Uptown and Beechwood to the newer west-end communities.',
      'The Grand River and RIM Park corridor along the northeast brings conservation regulation to riverside Eastbridge lots. Beechwood’s large planned community, with its shared pools and tennis, has its own neighbourhood context worth knowing for landscaping work.',
    ],
    localNote:
      'Waterloo issues permits through the City of Waterloo, with conservation review under the Grand River Conservation Authority. Riverside lots along the Grand and RIM Park corridor fall under GRCA floodplain and fill regulation, and regional clay plus freeze-thaw make frost-depth footings important.',
    priceNote:
      'Waterloo is mid, trending to premium in west-end newer subdivisions like Vista Hills and Clair Hills and established Beechwood. Outdoor living commonly $15k to $70k and renovations $18k to $85k.',
    faqs: [
      { q: 'Do you build out backyards in newer Waterloo subdivisions?', a: 'Yes, decks, interlock, fences and full landscape builds in areas like Vista Hills, Clair Hills and Eastbridge are core work for us.' },
      { q: 'Are there conservation rules near the Grand River?', a: 'Riverside Eastbridge and RIM Park corridor lots fall under GRCA regulation, which we manage.' },
      { q: 'Do you handle City of Waterloo permits?', a: 'We do, drawings, permits and conservation review for decks, additions and renovations.' },
    ],
    nearby: ['kitchener', 'cambridge', 'guelph'],
  },
  {
    slug: 'guelph',
    name: 'Guelph',
    region: 'Wellington',
    tier: 3,
    tagline: 'Heritage & premium renovations in Guelph',
    image: '1600607687939-ce8a6c25118c',
    neighbourhoods: [
      'Exhibition Park', 'The Ward', 'Old University', 'St. George’s Park',
      'Junction', 'Kortright', 'Westminster Woods', 'Clairfields',
    ],
    intro: [
      'A single-tier city with an exceptional stock of mid-19th-century limestone homes, Guelph is the highest-value market in the Waterloo and Wellington area. Tridan brings heritage-aware craftsmanship and premium outdoor living to homeowners across the Royal City.',
      'The Speed and Eramosa rivers run through the city, so riverside and downtown lots fall under conservation regulation. The older core and The Ward often call for heritage stone matching and repointing, while the south-end subdivisions are decks, additions and backyard builds.',
    ],
    localNote:
      'Guelph is a single-tier city that issues its own permits, with conservation review under the Grand River Conservation Authority (the Speed River is a Grand tributary). Riverside and downtown lots fall under GRCA floodplain and fill regulation, and the heritage limestone core often requires period-sensitive materials and detailing.',
    priceNote:
      'Guelph is mid to premium, the highest benchmark of the Waterloo and Wellington markets, clearly premium in Old University and Exhibition Park. Outdoor living commonly $16k to $85k and renovations $20k to $110k.',
    faqs: [
      { q: 'Do you work on Guelph’s heritage limestone homes?', a: 'Yes, heritage stone matching, repointing and sympathetic renovation in the older core and The Ward are a specialty.' },
      { q: 'Are there conservation rules near the Speed River?', a: 'Riverside and downtown lots fall under GRCA regulation, which we identify and manage.' },
      { q: 'Do you handle City of Guelph permits?', a: 'We do, drawings, permits and conservation review for decks, additions and renovations.' },
    ],
    nearby: ['cambridge', 'kitchener', 'waterloo'],
  },

  // -------------------------------- BRANT --------------------------------
  {
    slug: 'brantford',
    name: 'Brantford',
    region: 'Brant',
    tier: 3,
    tagline: 'Decks, renovations in Brantford',
    image: '1416339306562-f3d12fefd36f',
    neighbourhoods: [
      'Eagle Place', 'Echo Place', 'West Brant', 'Terrace Hill',
      'Holmedale', 'Henderson Survey', 'Brier Park', 'Shellard Lane',
    ],
    intro: [
      'A single-tier city on the Grand River, Brantford offers strong value and a deep stock of century brick homes alongside fast-growing new subdivisions in West Brant and the Shellard Lane corridor. Tridan builds outdoor living and renovations across the city.',
      'The Grand River bisects Brantford, and parts of Eagle Place, Holmedale and riverside West Brant sit in or near the regulated floodplain. Older core districts carry century brick homes with the knob-and-tube, plaster and older foundations that come with them.',
    ],
    localNote:
      'Brantford is a single-tier city with its own building division, separate from the surrounding County of Brant. Conservation review falls under the Grand River Conservation Authority, and riverside districts like Eagle Place and Holmedale sit in or near the GRCA floodplain. Clay soils plus freeze-thaw drive footing depth and drainage.',
    priceNote:
      'Brantford is value to mid, with home values below the GTA average, so most projects price in the value and mid range. Outdoor living commonly $13k to $55k and renovations $16k to $72k.',
    faqs: [
      { q: 'Do you renovate century brick homes in the older core?', a: 'Yes, Terrace Hill, Eagle Place and Holmedale have older stock we regularly modernize to code, from wiring to foundations.' },
      { q: 'Are there floodplain rules along the Grand River?', a: 'Parts of Eagle Place, Holmedale and riverside West Brant fall in the GRCA floodplain, which we identify and manage.' },
      { q: 'Do you handle City of Brantford permits?', a: 'We do, and we keep the City of Brantford and County of Brant distinct, since they run separate building divisions.' },
    ],
    nearby: ['cambridge', 'kitchener', 'hamilton'],
  },

  // ------------------------------- DUFFERIN -------------------------------
  {
    slug: 'orangeville',
    name: 'Orangeville',
    region: 'Dufferin',
    tier: 3,
    tagline: 'Outdoor living & renovations in Orangeville',
    image: '1541888946425-d81bb19240f5',
    neighbourhoods: [
      'Broadway Core', 'Credit Meadows', 'Montgomery Village', 'Settlers Creek',
      'Highland Ridge', 'Parkview Acres', 'Island Lake', 'Rolling Hills',
    ],
    intro: [
      'The county seat of Dufferin, Orangeville sits in the Hills of Headwaters near the Escarpment, a higher-elevation commuter town with a protected Victorian downtown. Tridan builds outdoor living and renovations across the community, from the Broadway core to Montgomery Village and Credit Meadows.',
      'At this elevation the winters are harder, with deeper frost and stronger freeze-thaw stress on footings, driveways and hardscaping, so proper base preparation matters even more. Island Lake borders the east side and brings conservation considerations to nearby lots.',
    ],
    localNote:
      'Orangeville issues permits through the Town of Orangeville. It sits on a watershed divide, so conservation jurisdiction is parcel-dependent: Credit Valley Conservation covers the town core and Island Lake, while fringe lands drain toward the Grand River and Nottawasaga Valley authorities. The Broadway core carries protected Victorian heritage stock, and higher elevation means deeper frost.',
    priceNote:
      'Orangeville is mid to premium, reflecting commuter-belt proximity to the GTA. Outdoor living commonly $15k to $75k and renovations $18k to $95k.',
    faqs: [
      { q: 'Does Orangeville’s elevation affect outdoor projects?', a: 'Yes. Higher elevation means deeper frost and stronger freeze-thaw, so we build footings and hardscape bases accordingly.' },
      { q: 'Which conservation authority covers Orangeville?', a: 'It depends on the lot. Credit Valley Conservation covers the town core and Island Lake, while fringe lands fall under the Grand River or Nottawasaga Valley authorities. We confirm per address.' },
      { q: 'Do you handle heritage work in the Broadway core?', a: 'We do, with materials and detailing sympathetic to Orangeville’s protected Victorian downtown.' },
    ],
    nearby: ['caledon', 'brampton', 'guelph'],
  },
];

// --------------------------- helpers / lookups ---------------------------

export const citySlugs = cities.map((c) => c.slug);

// Cities that receive the full city × service matrix (tier 1 & 2). Tier 3
// cities are consolidated into a single strong hub page instead.
export const matrixCities = cities.filter((c) => c.tier !== 3);
export const matrixCitySlugs = matrixCities.map((c) => c.slug);

export function hasServiceMatrix(city: City): boolean {
  return city.tier !== 3;
}

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function citiesByRegion() {
  const groups: Record<string, City[]> = {};
  for (const c of cities) {
    (groups[c.region] ??= []).push(c);
  }
  return groups;
}

export const regionOrder: Region[] = [
  'Toronto',
  'Peel',
  'Halton',
  'Durham',
  'Hamilton',
  'Niagara',
  'Waterloo',
  'Wellington',
  'Brant',
  'Dufferin',
];
