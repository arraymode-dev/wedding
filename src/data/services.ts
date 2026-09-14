export interface Service {
  id: string;
  index: string;
  name: string;
  summary: string;
  from: string;
  lead: string;
  includes: string[];
  best: string;
  accent: 'coral' | 'indigo' | 'sage' | 'champagne';
}

/**
 * PLACEHOLDER PRICING — the figures below are illustrative so the layouts read
 * correctly. Replace every `from` and `lead` value with real studio numbers
 * before the site goes live.
 */
export const services: Service[] = [
  {
    id: 'bespoke',
    index: '01',
    name: 'Fully bespoke',
    summary:
      'A suite drawn from nothing but your wedding — your venue, your colours, the way you two actually talk. Nothing off a shelf, nothing reused.',
    from: 'From £850',
    lead: '12–16 weeks',
    best: 'Couples who want the stationery to be a piece of the day, not an announcement of it.',
    includes: [
      'Discovery call & written design direction',
      'Two original concepts, one taken to final',
      'Custom illustration — venue, portrait or motif',
      'Save the dates, invitation & full detail cards',
      'Print management on your chosen stock',
      'Envelope addressing in matching lettering',
    ],
    accent: 'coral',
  },
  {
    id: 'destination',
    index: '02',
    name: 'Destination suites',
    summary:
      'Passports, boarding passes and itineraries that do the heavy lifting — the bits guests need when the wedding is a flight away.',
    from: 'From £1,100',
    lead: '14–18 weeks',
    best: 'Weddings abroad, long weekends, anywhere a guest needs a plan as well as an invitation.',
    includes: [
      'Passport-style booklet or boarding-pass suite',
      'Foil, emboss or deboss finishing',
      'Multi-day itinerary & travel guidance pages',
      'Illustrated map of the area',
      'Matching RSVP with QR or reply card',
      'Guest-address list management',
    ],
    accent: 'champagne',
  },
  {
    id: 'illustration',
    index: '03',
    name: 'Illustration',
    summary:
      'Hand-drawn venue portraits, couple portraits and small repeating motifs — commissioned on their own, or threaded through a whole suite.',
    from: 'From £320',
    lead: '4–6 weeks',
    best: 'A venue you love, a first-look gift, or a motif you want carried across the whole day.',
    includes: [
      'Line or full-colour venue illustration',
      'Couple & wedding-party portraits',
      'Pet portraits (genuinely, often the favourite bit)',
      'Print-ready files at any scale',
      'Licence to reuse across your own pieces',
      'Optional framed original',
    ],
    accent: 'indigo',
  },
  {
    id: 'on-the-day',
    index: '04',
    name: 'On the day',
    summary:
      'Everything the day itself needs — place cards, menus, order of service, table plans and signage, all speaking the same language as the invitation.',
    from: 'From £450',
    lead: '6–8 weeks',
    best: 'Anyone who has their invitations sorted and wants the day to match.',
    includes: [
      'Place cards & escort cards',
      'Menus, orders of service, orders of the day',
      'Table plans & table numbers',
      'Welcome signage and large-format boards',
      'Favour tags, napkin wraps & small extras',
      'Delivery timed to your venue access',
    ],
    accent: 'sage',
  },
];
