// The shop on the home page: an "Amazon showroom" (Tim + Faith, 2026-10-29).
// Nothing is sold on this site; each item links to its Amazon listing.
// To put an item on sale: paste its Amazon link into `amazonUrl`. Items
// without a link show "Coming soon to Amazon".
// Each book also gets its own page at /books/<slug>/ (Tim's idea, Faith's OK,
// 2026-11-05). `why` is Faith's own words from her interview
// (private/book-pages-interview.md); keep them hers.

export interface Product {
  title: string;
  subtitle?: string;
  image: string;
  imageSize?: [number, number]; // pixels, when not the journals' 600 x 900
  details: string[];
  pages?: string[]; // "Look inside" previews: the first few interior pages
  pageSize?: [number, number]; // pixels, when not the journals' 560 x 840
  amazonUrl?: string;
  slug: string; // the book page: /books/<slug>/
  summary: string; // the book page's search description, ~150 characters
  why: string[]; // Faith's words, one paragraph per item
  verse: { text: string; ref: string };
  pageCount: number;
  isbn?: string;
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
        slug: 'daily-gratitude',
        summary: 'A 365-day Christian gratitude journal from Faith at Planted by Faith: a guided page for every day of the year, made for a hard season of life.',
        why: [
          "I made this journal because writing down what I'm grateful for gives me something to look back on when I'm feeling down. I figured it might help others too.",
          'I made it with someone going through a hard season of life in mind. Keep it next to your morning coffee and use it during your quiet time with Jesus.',
        ],
        verse: { text: 'I will give thanks to the LORD with my whole heart; I will recount all of your wonderful deeds.', ref: 'Psalms 9:1 (ESV)' },
        pageCount: 368,
      },
      {
        title: 'Daily Gratitude',
        subtitle: 'A Journal for a Thankful Heart',
        image: '/images/shop/daily-gratitude-lined.jpg',
        details: ['Lined pages with a date line, room to write freely', '6 x 9 in paperback, 120 pages, cream paper'],
        pages: [1, 3, 4, 5].map((n) => `/images/shop/pages/daily-gratitude-lined-00${n}.jpg`),
        amazonUrl: 'https://www.amazon.com/dp/B0HPYTWKWK',
        slug: 'a-thankful-heart',
        summary: 'A lined Christian gratitude journal with a date line on every page and room to write freely. No prompts, no full-year commitment, and a sweet gift.',
        why: [
          "This one is for anyone who likes to write freely instead of following prompts, or who isn't ready to commit to a full year. It also makes a sweet gift.",
        ],
        verse: { text: 'Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!', ref: 'Psalms 100:4 (ESV)' },
        pageCount: 120,
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
        amazonUrl: 'https://www.amazon.com/dp/B0HQ4CS9RV',
        slug: 'who-is-jesus',
        summary: 'Who Is Jesus? A Christian coloring book for ages 4 to 8 with 54 pictures and an activity page for each. For home, Sunday school or homeschool.',
        why: [
          'When I was a child, nobody really told me about God, other than that He was "the big man upstairs." We need to start them out young and train them up in the way they should go.',
          'This book works at home with parents or grandparents, in Sunday school, or with homeschool families.',
        ],
        verse: { text: 'Train up a child in the way he should go; even when he is old he will not depart from it.', ref: 'Proverbs 22:6 (ESV)' },
        pageCount: 110,
      },
      {
        title: 'Better Than All My Toys',
        subtitle: 'Bobby Learns to Share Jesus',
        image: '/images/shop/better-than-toys.jpg',
        imageSize: [600, 776],
        details: ['A story coloring book for ages 4 to 8', '22 pictures to color, each facing its part of the story', '8.5 x 11 in paperback, 48 pages, white paper'],
        // Front page, the first spread, and Faith's favorite part (Mom answers Henry's question).
        pages: [1, 2, 3, 36, 37].map((n) => `/images/shop/pages/better-than-toys-${String(n).padStart(3, '0')}.jpg`),
        pageSize: [560, 725],
        slug: 'better-than-all-my-toys',
        summary: 'Better Than All My Toys: a Christian story coloring book for ages 4 to 8. Bobby shares his truck, then learns to share Jesus with his friend Henry.',
        why: [
          'I want kids to be able to tell others about Jesus without being scared or nervous.',
          "This book works at home with parents or grandparents, in Sunday school, or with homeschool families. I really like the part where Bobby's mom answers Henry's question.",
        ],
        // The book prints the WEB wording; the site stays ESV (hard rule in CLAUDE.md).
        verse: { text: 'Go into all the world and proclaim the gospel to the whole creation.', ref: 'Mark 16:15 (ESV)' },
        pageCount: 48,
        isbn: '9798140187842',
      },
    ],
  },
];

// Shown under the shelves as "on the way".
export const comingSoon = [
  { title: 'Shirts & apparel', note: 'Coming soon' },
];

export const allBooks = shelves.flatMap((s) => s.products);
