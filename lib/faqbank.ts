// ---------------------------------------------------------------------------
// Research-driven FAQ bank (real GTA homeowner questions, 2026 figures).
// Grouped by topic so each page can surface the most relevant questions at the
// bottom, rendered with FAQPage schema. Answers are natural, contractor-voice.
// ---------------------------------------------------------------------------

import type { FaqItem } from './content';

export const faqBank = {
  hiring: [
    { q: 'Do I need a licensed contractor to renovate in Ontario?', a: 'Ontario does not license general contractors province-wide, but specific trades must be certified: electricians through the ESA, gas fitters through the TSSA, and plumbers as master plumbers. A reputable contractor should also carry general liability insurance and be registered with WSIB.' },
    { q: 'How do I know if a contractor is legitimate?', a: 'Ask for proof of WSIB coverage, a general liability insurance certificate, a written detailed quote, and recent local references you can actually call. A legitimate contractor provides all of these without hesitation.' },
    { q: 'How much deposit should I pay a contractor upfront?', a: 'A standard deposit is around 10 to 15% of the project value. Anything above 30% upfront is a red flag unless custom or special-order materials make up a large share of the cost. Later payments should follow completed milestones.' },
    { q: 'Should I get multiple quotes for my project?', a: 'Yes. Get at least three written quotes on the same defined scope so you are comparing like for like. Be cautious of a bid that is dramatically lower than the others, since it often signals missing scope or corners being cut.' },
  ],
  cost: [
    { q: 'How much does a backyard renovation cost in the GTA?', a: 'It depends on scope, but interlock patios generally run about $18 to $35 per square foot and pool surrounds $25 to $40. A full backyard transformation combining hardscape, planting and structures typically starts in the tens of thousands.' },
    { q: 'How much does it cost to build a deck in Toronto?', a: 'Most Toronto homeowners pay roughly $30 to $80 per square foot in 2026. Pressure-treated is at the low end, cedar in the middle, and composite or PVC at the top. Height and site access also affect the price.' },
    { q: 'Why do renovation quotes include HST?', a: 'Ontario’s 13% HST applies to renovation labour and materials, so on a $40,000 project that is about $5,200. Any contractor offering to skip HST for cash is not operating legitimately, and it leaves you with no paper trail or protection.' },
    { q: 'How much should I budget for surprises?', a: 'Set aside 10 to 15% of your total budget as a contingency. Older GTA homes often reveal hidden issues like outdated wiring, plumbing or structural surprises once walls are opened up.' },
  ],
  permits: [
    { q: 'Do I need a permit to build a deck in Ontario?', a: 'Generally yes if the deck is attached to the house, more than about 24 inches above grade, or larger than 10 square metres and not on grade. Even permit-exempt decks still have to meet the Ontario Building Code and local zoning.' },
    { q: 'Do I need a permit to remove a load-bearing wall?', a: 'Yes. Removing a structural wall always requires a building permit and engineered drawings stamped by a professional engineer. A structural assessment typically costs $500 to $1,500.' },
    { q: 'Can I legally have a basement apartment in Toronto?', a: 'In most Toronto residential zones a basement second suite is now permitted as-of-right. It still has to meet zoning, the Ontario Building Code and the Fire Code, including egress and a 1.95 m ceiling height over most of the floor.' },
    { q: 'What happens if I build without a permit?', a: 'Unpermitted work can lead to fines, orders to remove or rebuild, and voided insurance. It also causes problems at resale, since buyers and lenders usually require permits to be closed and inspected.' },
  ],
  outdoor: [
    { q: 'Is interlock or concrete better for a patio or driveway?', a: 'Interlock costs roughly 50% more upfront but lasts longer, flexes with freeze-thaw instead of cracking, and lets you lift and repair individual pavers. In the GTA’s climate it usually wins on long-term value.' },
    { q: 'How long does interlock last?', a: 'A professionally installed interlock patio or driveway in the GTA typically lasts 25 to 30 years, and a well-built, well-maintained installation can reach 35 to 40, longer than poured concrete in our freeze-thaw climate.' },
    { q: 'What is the best decking material for Ontario weather?', a: 'Pressure-treated is the budget choice, cedar offers natural looks, and composite or PVC deliver the lowest maintenance and longest life in freeze-thaw conditions. The right pick depends on budget, upkeep tolerance and use.' },
    { q: 'How do I fix standing water in my backyard?', a: 'Water should drain within 24 hours of rain. If puddles linger past 48 hours you have a drainage problem. Common fixes are regrading to about a 2% slope away from the house, plus swales and French drains on clay soil.' },
  ],
  interior: [
    { q: 'How long does a kitchen renovation take?', a: 'A minor, same-layout refresh usually takes two to four weeks, while a major renovation involving layout changes, plumbing or electrical can run three to six weeks or more depending on scope and material lead times.' },
    { q: 'Does a kitchen renovation add value to my home?', a: 'Yes, though returns vary. Minor kitchen updates recoup a high share of their cost, while high-end full remodels return less. Lighter updates like refinishing, hardware and paint tend to give the best return.' },
    { q: 'What is the minimum ceiling height for a legal basement apartment?', a: 'The Ontario Building Code requires 1.95 m, about 6 feet 5 inches, over at least 75% of the habitable floor area. In older GTA homes this is the most common dealbreaker, and fixing it via underpinning adds significant cost.' },
    { q: 'How much does it cost to open up my kitchen and living room?', a: 'Removing a wall runs from about $3,500 for a simple single-storey wall up to $30,000 or more for long two-storey spans. Most two-storey GTA homes land in the $8,000 to $20,000 range once beam, posts, permit and finishing are included.' },
  ],
  painting: [
    { q: 'How much does it cost to paint the interior of a house in Toronto?', a: 'Interior painting generally runs about $1.80 to $3.00 per square foot on a whole-house project, or roughly $300 to $800 per room. Single rooms cost more per square foot because setup time is similar regardless of size.' },
    { q: 'Does painting increase home value?', a: 'Yes. Fresh, neutral paint is one of the highest-return updates available. It modernizes a space cheaply and improves first impressions for buyers, which is why it is a staple of pre-sale prep.' },
    { q: 'When is the cheapest time to paint my house?', a: 'Interior painting is often 15 to 25% cheaper in the slower fall-to-winter window, and bundling several rooms into one job lowers the per-room cost since the setup is shared.' },
  ],
  warranty: [
    { q: 'What warranty should a contractor provide?', a: 'Reputable GTA contractors typically offer a workmanship warranty of two to five years, on top of any manufacturer warranties on materials. Always get the warranty terms in writing in your contract. Tridan backs every project with a written five-year workmanship warranty.' },
    { q: 'What insurance should my contractor carry?', a: 'At minimum, general liability insurance and WSIB coverage for their workers. This protects you if there is property damage or a workplace injury on your project. Ask for current certificates before work begins.' },
    { q: 'How long does a permit take in Toronto?', a: 'Small residential permits like decks can move quickly through the online portal, but major projects such as second-storey additions can take three to five months for permitting alone. We build this time into your schedule.' },
  ],
} satisfies Record<string, FaqItem[]>;

// Curated per-topic sets for page bottoms (mix so pages are not identical).
export function faqsFor(topics: (keyof typeof faqBank)[], limit = 6): FaqItem[] {
  const seen = new Set<string>();
  const out: FaqItem[] = [];
  for (const t of topics) {
    for (const item of faqBank[t]) {
      if (seen.has(item.q)) continue;
      seen.add(item.q);
      out.push(item);
      if (out.length >= limit) return out;
    }
  }
  return out;
}
