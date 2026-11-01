// The shop on the home page: an "Amazon showroom" (Tim + Faith, 2026-10-29).
// Nothing is sold on this site; each item links to its Amazon listing.
// To put an item on sale: paste its Amazon link into `amazonUrl`. Items
// without a link show "Coming soon to Amazon".

export interface Product {
  title: string;
  subtitle?: string;
  image: string;
  imageSize?: [number, number]; // pixels, when not the journals' 600 x 900
  details: string[];
  pages?: string[]; // "Look inside" previews: the first few interior pages
  pageSize?: [number, number]; // pixels, when not the journals' 560 x 840
  amazonUrl?: string;
}

export interface Shelf {
  id: string;
  title: string;
  products: Product[];
}

export const shelves: Shelf[] = [
  {
    id: 'journals',
    title: 'Journals',
    products: [
      {
        title: 'Daily Gratitude',
        subtitle: '365 Days of Gratitude',
        image: '/images/shop/daily-gratitude.jpg',
        details: ['A full year of guided daily pages', '6 x 9 in paperback, 368 pages, cream paper'],
        pages: [1, 2, 3, 4, 5].map((n) => `/images/shop/pages/daily-gratitude-00${n}.jpg`),
        amazonUrl: 'https://www.amazon.com/dp/B0HPZ6YBDJ',
      },
      {
        title: 'Daily Gratitude',
        subtitle: 'A Journal for a Thankful Heart',
        image: '/images/shop/daily-gratitude-lined.jpg',
        details: ['Lined pages with a date line, room to write freely', '6 x 9 in paperback, 120 pages, cream paper'],
        pages: [1, 3, 4, 5].map((n) => `/images/shop/pages/daily-gratitude-lined-00${n}.jpg`),
        amazonUrl: 'https://www.amazon.com/dp/B0HPYTWKWK',
      },
    ],
  },
  {
    id: 'coloring-books',
    title: 'Coloring Books',
    products: [
      {
        title: 'Who Is Jesus?',
        subtitle: 'A Coloring Book for Ages 4 to 8',
        image: '/images/shop/who-is-jesus.jpg',
        imageSize: [600, 776],
        details: ['54 pictures to color, each with its own activity page', '8.5 x 11 in paperback, 110 pages, white paper'],
        // A small sample on purpose: Faith worries about copies being re-uploaded to KDP.
        pages: [1, 4, 5, 8, 9].map((n) => `/images/shop/pages/who-is-jesus-${String(n).padStart(3, '0')}.jpg`),
        pageSize: [560, 725],
      },
    ],
  },
];

// Shown under the shelves as "on the way".
export const comingSoon = [
  { title: 'Shirts & apparel', note: 'Coming soon' },
];
