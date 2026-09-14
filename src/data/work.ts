export type Variant =
  | 'retro'
  | 'passport'
  | 'venue'
  | 'botanical'
  | 'portrait'
  | 'map';

export interface Project {
  slug: string;
  couple: string;
  title: string;
  /** Shown on the card, under the title. */
  tags: string[];
  year: string;
  venue: string;
  /** One line on the card rail / index. */
  summary: string;
  /** Opening paragraphs on the project page. */
  body: string[];
  /** Spec list on the project page. */
  pieces: string[];
  detail: { label: string; value: string }[];
  variant: Variant;
  /** Card ground; pulled from the token palette. */
  ground: string;
  /** Overlay text colour on the card — 'dark' means a dark ground, light text. */
  tone?: 'light' | 'dark';
}

/**
 * PLACEHOLDER CASE-STUDY COPY.
 * Couple names are taken from the studio's public Instagram grid so the
 * layouts read truthfully, but every description below is written copy, not
 * a client's own account of the project. Replace before launch.
 */
export const projects: Project[] = [
  {
    slug: 'meg-and-james',
    couple: 'Meg & James',
    title: 'A Manchester wedding that behaves like a night out',
    tags: ['Invitation suite', 'Illustration', 'On the day'],
    year: '2025',
    venue: 'Manchester city centre',
    summary:
      'Coral line art, a wavy border and a disco ball — an invitation that tells guests exactly what kind of evening this is.',
    body: [
      'Meg and James were clear from the first call: the wedding was a party, and the stationery should say so before anyone read a word of it. No calligraphy, no muted greys, nothing that looked like an apology for having fun.',
      'The suite is built on a soft wavy border that repeats at every size — invitation, details card, RSVP — so the pieces read as a set even when they are scattered across a kitchen table. Inside it, a small alphabet of hand-drawn icons: a disco ball, a martini, a tiered cake, two figures mid-dance.',
      'RSVPs run through a QR code on the reverse of the details card, which meant no reply envelopes, no stamps, and a response rate that closed inside three weeks.',
    ],
    pieces: [
      'Save the date — postcard, 350gsm',
      'Invitation — 5×7, rounded corners',
      'Details card with QR RSVP',
      'Icon set — twelve hand-drawn marks',
      'Table plan & table numbers',
      'Menus and place cards',
    ],
    detail: [
      { label: 'Service', value: 'Fully bespoke' },
      { label: 'Printing', value: 'Digital, rounded corners' },
      { label: 'Stock', value: '350gsm uncoated, blush' },
      { label: 'Quantity', value: '90 suites' },
    ],
    variant: 'retro',
    ground: 'var(--color-butter)',
  },
  {
    slug: 'the-wedding-passport',
    couple: 'Destination suite',
    title: 'A passport, because the wedding was a flight away',
    tags: ['Destination', 'Foil', 'Itinerary'],
    year: '2025',
    venue: 'Puglia, Italy',
    summary:
      'A gold-foiled booklet that works as an invitation, an itinerary and a guest handbook for a three-day wedding abroad.',
    body: [
      'A destination wedding asks more of its stationery than a local one. Guests are not deciding whether to come to a party; they are deciding whether to book flights, take leave, and bring children across a border. The invitation has to answer questions the couple has not been asked yet.',
      'So it became a passport. A foiled cover and crest, a photo page for the couple, then spreads for each day of the weekend — the welcome dinner, the ceremony, the long lunch after. Travel notes, transfer times and the nearest airports sit where a visa page would.',
      'The gold is a genuine hot foil on a heavy uncoated stock, which is what gives the cover its weight. Guests kept them. Several turned up at the wedding in pockets.',
    ],
    pieces: [
      'Passport booklet — 16pp, foiled cover',
      'Boarding-pass RSVP with perforated stub',
      'Illustrated area map',
      'Three-day itinerary spreads',
      'Luggage-tag escort cards',
      'Envelope addressing',
    ],
    detail: [
      { label: 'Service', value: 'Destination suite' },
      { label: 'Printing', value: 'Litho + hot gold foil' },
      { label: 'Stock', value: '540gsm cover, 120gsm inners' },
      { label: 'Quantity', value: '60 booklets' },
    ],
    variant: 'passport',
    ground: 'var(--color-navy)',
    tone: 'dark',
  },
  {
    slug: 'lucy-and-ross',
    couple: 'Lucy & Ross',
    title: 'The venue, drawn line by line',
    tags: ['Illustration', 'Fold-out', 'Monochrome'],
    year: '2024',
    venue: 'Cheshire',
    summary:
      'A single-colour venue illustration on a fold-out card — the building on the outside, everything else within.',
    body: [
      'Lucy and Ross had fallen for a building, and the brief was essentially: draw it properly. No colour wash, no photograph, nothing that would date. A line drawing, on good paper, that would still look right framed in ten years.',
      'The illustration was drawn from three reference photographs and two visits, and covers the full spread of the opened card. Closed, guests see the façade. Opened, the drawing breaks apart around the wording and the detail sits inside it.',
      'It printed in one ink on a soft white mould-made stock. The whole suite cost less than most colour work and outlasts all of it.',
    ],
    pieces: [
      'Venue illustration — original line drawing',
      'Fold-out invitation, 210×210 flat',
      'Detail insert',
      'Matching RSVP postcard',
      'Order of service',
      'Framed original for the couple',
    ],
    detail: [
      { label: 'Service', value: 'Illustration + suite' },
      { label: 'Printing', value: 'Single-colour litho' },
      { label: 'Stock', value: '300gsm mould-made' },
      { label: 'Quantity', value: '75 suites' },
    ],
    variant: 'venue',
    ground: 'var(--color-periwinkle)',
  },
  {
    slug: 'laura-and-gareth',
    couple: 'Laura & Gareth',
    title: 'Sage, vellum, and as few words as possible',
    tags: ['Invitation suite', 'Vellum', 'QR RSVP'],
    year: '2024',
    venue: 'Peak District',
    summary:
      'Fine botanical line work under a vellum wrap, with the wording stripped back to what a guest actually needs.',
    body: [
      'The starting point here was subtraction. Laura and Gareth had a long guest list and a short amount to say, and the first job was cutting the wording down until only the necessary lines were left.',
      'What remains is set small and low on the card, with a botanical sprig drawn from the hedgerow around the venue running up the left edge. A vellum wrap softens the whole thing before it is opened — you see the drawing through the sheet before you see it directly.',
      'The RSVP is a QR code on a small card, deliberately the plainest piece in the suite.',
    ],
    pieces: [
      'Invitation, 5×7, sage on soft white',
      'Vellum wrap with belly band',
      'Botanical sprig — original drawing',
      'Details card with QR RSVP',
      'Place cards & menus',
      'Welcome sign, A1',
    ],
    detail: [
      { label: 'Service', value: 'Fully bespoke' },
      { label: 'Printing', value: 'Digital on uncoated' },
      { label: 'Stock', value: '330gsm + 110gsm vellum' },
      { label: 'Quantity', value: '120 suites' },
    ],
    variant: 'botanical',
    ground: 'var(--color-periwinkle-pale)',
  },
  {
    slug: 'jemima-and-jack',
    couple: 'Jemima & Jack',
    title: 'Two portraits, and a room that knew where to sit',
    tags: ['Portraits', 'On the day', 'Signage'],
    year: '2025',
    venue: 'Lancashire',
    summary:
      'Hand-drawn portraits of the couple carried from easel signage down to the place settings.',
    body: [
      'This one started at the other end — not with the invitation, but with the day itself. Jemima and Jack wanted their guests to walk in and immediately find something of the two of them in the room.',
      'The portraits were drawn from photographs the couple chose, then rendered flat and clean so they would hold up at both A2 on an easel and 55mm on a place card. Getting a likeness to survive that reduction is most of the work.',
      'From there the pieces multiply quietly: bride and groom signs at the top table, portrait place cards for the two of them, and a matching set of plain cards for everyone else so the room does not become a gallery.',
    ],
    pieces: [
      'Two original portrait illustrations',
      'A2 easel signage, pair',
      'Portrait place settings',
      'Table plan',
      'Orders of the day',
      'Favour tags with ribbon',
    ],
    detail: [
      { label: 'Service', value: 'Illustration + on the day' },
      { label: 'Printing', value: 'Digital, mounted board' },
      { label: 'Stock', value: '400gsm, 3mm foamex signage' },
      { label: 'Quantity', value: '140 place settings' },
    ],
    variant: 'portrait',
    ground: 'var(--color-butter-pale)',
  },
  {
    slug: 'olive-grove',
    couple: 'Private commission',
    title: 'An illustrated map for a weekend in the hills',
    tags: ['Destination', 'Map', 'Illustration'],
    year: '2024',
    venue: 'Provence, France',
    summary:
      'A drawn map of the valley — where to eat, where to swim, and how long the drive from the airport really takes.',
    body: [
      'Guests arriving for a three-day wedding in an unfamiliar valley need a map more than they need another card. This one was drawn rather than printed from satellite imagery, which meant it could be honest about scale: the things worth walking to are large, the motorway is a thin line.',
      'Marked on it are the ceremony, the two hotels, the village with the good bakery, the swimming spot, and the pharmacy — which, over three days in August, turned out to be the most consulted item on the sheet.',
      'It printed as a folded A3 sheet tucked into the back of the invitation, in two inks on a warm stock.',
    ],
    pieces: [
      'Illustrated valley map, A3 folded',
      'Two-colour invitation',
      'Weekend itinerary card',
      'Accommodation & travel insert',
      'Wax-sealed outer envelope',
      'Welcome-bag tags',
    ],
    detail: [
      { label: 'Service', value: 'Destination suite' },
      { label: 'Printing', value: 'Two-colour litho' },
      { label: 'Stock', value: '120gsm warm white' },
      { label: 'Quantity', value: '55 suites' },
    ],
    variant: 'map',
    ground: 'var(--color-coral)',
    tone: 'dark',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
