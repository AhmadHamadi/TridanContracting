// ---------------------------------------------------------------------------
// Local content composition for city × service pages.
// Goal: every one of the 240 city×service pages reads as genuinely unique,
// locally-relevant content (not a city-name-swap doorway page). We weave BOTH
// the city's and the service's real data into varied sentence templates chosen
// deterministically by page position, so sibling pages don't read identically.
// ---------------------------------------------------------------------------

import { citySlugs, type City } from './areas';
import { serviceSlugs, type Service } from './services';

// One genuinely local, human sentence per city (housing stock / character).
// Used to give each city page and city×service page a distinct local voice.
export const cityContext: Record<string, string> = {
  toronto:
    'No two Toronto streets build the same way. A century semi in Riverdale and a detached home in Lawrence Park call for very different approaches, and we have worked on both.',
  'north-york':
    'North York’s generous postwar lots and ravine backdrops give us room to design outdoor spaces that most downtown properties simply cannot fit.',
  scarborough:
    'Scarborough’s deep lots and solid brick homes are some of the best value in the city for backyard builds and basement suites.',
  etobicoke:
    'Etobicoke rewards careful work, whether it is a Kingsway estate or a lakeside bungalow down in Mimico.',
  mississauga:
    'Mississauga runs from lakeside Port Credit to the estate streets of Lorne Park, and each pocket has its own expectations for scale and finish.',
  brampton:
    'A lot of Brampton’s newer subdivisions leave real backyard potential on the table, and plenty of basements waiting to become legal suites.',
  caledon:
    'Caledon is acreage country, where projects are measured in truckloads of stone and where grading and drainage matter as much as the design.',
  oakville:
    'Few places in the GTA hold finish work to a higher standard than Oakville, and the town’s tree and heritage rules keep everyone honest.',
  burlington:
    'Burlington blends established lakeside streets with newer family neighbourhoods, and we work comfortably across both.',
  milton:
    'Milton is our home base, full of five and ten year old homes with blank builder-grade yards ready to become something worth spending time in, and we are out here every week.',
  'halton-hills':
    'Halton Hills mixes small-town Georgetown streets with Escarpment acreage, so no two properties here ask for quite the same thing.',
  pickering:
    'Pickering pairs lakeside communities with mature inland neighbourhoods, which leaves plenty of room for decks, landscapes and renovations.',
  ajax:
    'Ajax’s waterfront setting and family neighbourhoods make it one of the east end’s most rewarding places to build outdoors.',
  whitby:
    'Between historic downtown Whitby and the newer homes out in Brooklin, we see everything from character renovations to fresh backyard builds.',
  oshawa:
    'Oshawa offers some of the strongest value in the region, from century homes near the core to fast-growing communities up north.',
  clarington:
    'Clarington’s mix of growing towns and country properties means one week we are finishing a basement and the next we are laying a stone patio on an acre lot.',
  hamilton:
    'Hamilton is split by the Escarpment into a lower city of old brick and an upper city of newer subdivisions, and the two build very differently.',
  ancaster:
    'Ancaster’s ravine and escarpment-edge lots reward outdoor spaces designed to work with the slope rather than fight it.',
  dundas:
    'Dundas sits in a valley at the head of the Escarpment, where Spencer Creek and older stone homes shape a lot of what we build.',
  'stoney-creek':
    'Stoney Creek runs from the lake up over the Escarpment, with former orchard clay under many of its newer streets.',
  waterdown:
    'Waterdown pairs a historic mill-town core near Grindstone Creek with fast-growing modern subdivisions on the Escarpment.',
  'st-catharines':
    'St. Catharines earned the name Garden City honestly, with canal history and creeks running through its established neighbourhoods.',
  'niagara-falls':
    'Beyond the tourist strip, Niagara Falls is a city of established residential neighbourhoods along the gorge and river.',
  'niagara-on-the-lake':
    'Niagara-on-the-Lake blends a protected heritage Old Town with wine-country estates, and both demand a high level of finish.',
  grimsby:
    'Grimsby is pinned between the lake and the Escarpment, a wine-country gateway drawing a steady stream of GTA buyers.',
};

function idx(slugs: string[], slug: string) {
  const i = slugs.indexOf(slug);
  return i < 0 ? 0 : i;
}

// Rotate a window of `n` neighbourhoods so different pages name different areas.
function hoods(city: City, seed: number, n = 3): string {
  const list = city.neighbourhoods;
  if (list.length <= n) return list.join(', ');
  const start = seed % list.length;
  const out: string[] = [];
  for (let i = 0; i < n; i++) out.push(list[(start + i) % list.length]);
  return out.join(', ');
}

function regionPhrase(city: City): string {
  return city.region === 'Toronto' ? 'across the city' : `across ${city.region} Region`;
}

/**
 * Three composed, locally-specific paragraphs, unique per (city, service).
 * Sentence templates are selected by position so neighbouring pages differ in
 * structure, not just in the city name.
 */
export function cityServiceParagraphs(city: City, service: Service): string[] {
  const ci = idx(citySlugs, city.slug);
  const si = idx(serviceSlugs, service.slug);
  const sName = service.name.toLowerCase();
  const nav = service.navName.toLowerCase();
  const ctx = cityContext[city.slug] ?? '';

  // --- Paragraph 1: opener (weaves service + city + neighbourhoods) ---
  const p1s = [
    `${service.name} is one of the projects ${city.name} homeowners call us about most, and it is easy to see why. Done properly, it changes how you use your home every day. We build ${nav} for families in ${hoods(city, ci + si)} and right ${regionPhrase(city)}.`,
    `If you have been searching for ${service.keyword} in ${city.name}, you probably want two things: work that lasts and a crew that actually turns up. Tridan brings both to homes in ${hoods(city, ci + si + 1)} and the surrounding ${city.name} neighbourhoods.`,
    `Good ${sName} starts long before anyone picks up a tool. In ${city.name}, that means understanding the property, the ground it sits on, and the local rules, then building accordingly. We do exactly that for homeowners in ${hoods(city, ci + si + 2)} and beyond.`,
    `A ${nav} project can quietly transform a ${city.name} home, adding space, comfort and real resale value. We handle it end to end for families in ${hoods(city, ci + si + 3)} and throughout ${city.name}.`,
    `When ${city.name} homeowners want ${nav} handled by one accountable team, they come to Tridan. We look after the whole job, from the first measurement to the final walkthrough, for properties in ${hoods(city, ci + si + 4)} and nearby.`,
  ];

  // --- Paragraph 2: local angle (city character + region + price) ---
  const p2s = [
    `${ctx} That local knowledge shapes how we approach every ${city.name} build, right down to how we plan drainage, access and finishes.`,
    `${ctx} It is the kind of thing you only learn by working here, and it is why our ${city.name} clients trust us with the details.`,
    `${ctx} So we do not treat your project like a template. We price it, plan it and build it around your specific ${city.name} property.`,
    `${ctx} Understanding those local realities is half the job, and it is where a lot of out-of-town contractors come up short.`,
    `${ctx} That is the backdrop for every ${nav} project we take on here.`,
  ];

  // --- Paragraph 3: quality + reassurance (service specifics) ---
  const p3s = [
    `Every ${city.name} project is fully licensed and insured, built to the Ontario Building Code, and backed by our written five-year workmanship warranty. Most ${nav} projects run about ${service.timeline}, and we give you a fixed price up front so there are no surprises along the way.`,
    `You get a clear, fixed-price quote, a realistic schedule, and one point of contact from start to finish. We handle the permits where they are needed, keep the site clean, and stand behind the work with a five-year workmanship warranty.`,
    `We build the parts you never see to the same standard as the finishes you do, because that is what makes ${nav} last through our freeze-and-thaw winters. Expect a typical timeline of around ${service.timeline}, a fixed price, and a five-year workmanship warranty on the finished job.`,
    `From the first visit to the final cleanup, you deal with one team that owns the outcome. Your ${city.name} project is quoted at a fixed price, built to code, and covered by our five-year workmanship warranty.`,
    `No disappearing crews and no surprise change orders. We quote your ${city.name} ${nav} project at a fixed price, keep you updated as we go, and warranty the workmanship for five years.`,
  ];

  return [
    p1s[(ci + si) % p1s.length],
    p2s[(ci * 2 + si) % p2s.length],
    p3s[(ci + si * 2) % p3s.length],
  ];
}

// Varied meta description by service category so 240 metas are not one template.
export function cityServiceMeta(city: City, service: Service, phone: string): string {
  const ci = idx(citySlugs, city.slug);
  const si = idx(serviceSlugs, service.slug);
  const variants = [
    `Looking for ${service.keyword} in ${city.name}? Tridan builds ${service.navName.toLowerCase()} to last, with fixed quotes, a 5-year warranty and permits handled. Serving ${city.name} & nearby. Call ${phone}.`,
    `${service.name} in ${city.name} by Tridan Contracting. Licensed, insured, built to code, backed by a 5-year warranty. Free on-site estimates for ${city.name} homeowners. Call ${phone}.`,
    `Need ${service.keyword} in ${city.name}? Get honest advice, a fixed price and lasting work from a local ${city.region} contractor. Free quotes, financing available. Call ${phone}.`,
    `Tridan Contracting provides ${service.navName.toLowerCase()} across ${city.name}. Fixed pricing, no surprises, a 5-year workmanship warranty and free estimates. Call ${phone} today.`,
  ];
  return variants[(ci + si) % variants.length];
}
