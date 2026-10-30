// The shop on the home page: an "Amazon showroom" (Tim + Faith, 2026-10-29).
// Nothing is sold on this site; each item links to its Amazon listing.
// To put an item on sale: paste its Amazon link into `amazonUrl`. Items
// without a link show "Coming soon to Amazon".

export interface Product {
  title: string;
  subtitle?: string;
  image: string;
  details: string[];
  pages?: string[]; // "Look inside" previews: the first few interior pages
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
      },
      {
        title: 'Daily Gratitude',
        subtitle: 'A Journal for a Thankful Heart',
        image: '/images/shop/daily-gratitude-lined.jpg',
        details: ['Lined pages with a date line, room to write freely', '6 x 9 in paperback, 120 pages, cream paper'],
        pages: [1, 3, 4, 5].map((n) => `/images/shop/pages/daily-gratitude-lined-00${n}.jpg`),
      },
    ],
  },
];

// Shown under the shelves as "on the way".
export const comingSoon = [
  { title: 'Coloring book', note: 'In the works' },
  { title: 'Shirts & apparel', note: 'Coming soon' },
];
