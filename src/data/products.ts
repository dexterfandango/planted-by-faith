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
  about?: string[]; // what the book is about, one paragraph per item
  why?: string[]; // Faith's words, one paragraph per item (left out until her interview)
  verse?: { text: string; ref: string };
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
    id: 'coloring-books',
    title: 'Books for Kids',
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
        amazonUrl: 'https://www.amazon.com/dp/B0HQK66LL5',
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
      {
        title: 'My Bible, Book by Book: The Old Testament',
        subtitle: 'A Coloring Book for Ages 4 to 8',
        image: '/images/shop/book-by-book-ot.jpg',
        imageSize: [600, 776],
        details: ['A picture for every book of the Old Testament, Genesis to Malachi', '52 pictures to color, each with a short story and an activity page', '8.5 x 11 in paperback, 108 pages, white paper'],
        // Front page, the Books of the Bible checklist, and Faith's favorite: Daniel and the lions.
        pages: [1, 2, 78, 79].map((n) => `/images/shop/pages/book-by-book-ot-${String(n).padStart(3, '0')}.jpg`),
        pageSize: [560, 725],
        amazonUrl: 'https://www.amazon.com/dp/B0HQY4RTJB',
        slug: 'my-bible-old-testament',
        summary: 'My Bible, Book by Book: The Old Testament. A Christian coloring book for ages 4 to 8 with a picture and short story for every book, Genesis to Malachi.',
        why: [
          'When I was a teen, I remember trying to learn the books of the Bible, and I always felt like I was behind because kids younger than me already knew them. I hope these books help young kids learn each book of the Bible and their importance.',
        ],
        verse: { text: 'I have stored up your word in my heart, that I might not sin against you.', ref: 'Psalm 119:11 (ESV)' },
        pageCount: 108,
        isbn: '9798141044083',
      },
      {
        title: 'My Bible, Book by Book: The New Testament',
        subtitle: 'A Coloring Book for Ages 4 to 8',
        image: '/images/shop/book-by-book-nt.jpg',
        imageSize: [600, 776],
        details: ['A picture for every book of the New Testament, Matthew to Revelation', '50 pictures to color, each with a short story and an activity page', '8.5 x 11 in paperback, 104 pages, white paper'],
        // Front page, the Books of the Bible checklist, and Faith's favorite: the River of Life (Revelation).
        pages: [1, 2, 100, 101].map((n) => `/images/shop/pages/book-by-book-nt-${String(n).padStart(3, '0')}.jpg`),
        pageSize: [560, 725],
        amazonUrl: 'https://www.amazon.com/dp/B0HR352B7W',
        slug: 'my-bible-new-testament',
        summary: 'My Bible, Book by Book: The New Testament. A Christian coloring book for ages 4 to 8 with a picture and short story for every book, Matthew to Revelation.',
        why: [
          'When I was a teen, I remember trying to learn the books of the Bible, and I always felt like I was behind because kids younger than me already knew them. I hope these books help young kids learn each book of the Bible and their importance.',
        ],
        verse: { text: 'I have stored up your word in my heart, that I might not sin against you.', ref: 'Psalm 119:11 (ESV)' },
        pageCount: 104,
        isbn: '9798141053740',
      },
      {
        title: 'Tuck Me In, Jesus',
        image: '/images/shop/tuck-me-in.jpg',
        imageSize: [600, 600],
        details: ['A full-color bedtime story for ages 4 to 8', 'Teaches a simple prayer to say every night', '8.5 x 8.5 in paperback, 36 pages'],
        slug: 'tuck-me-in-jesus',
        summary: 'Tuck Me In, Jesus: a full-color Christian bedtime story for ages 4 to 8 that teaches a simple prayer to say every night. Coming soon to Amazon.',
        about: [
          '“Dad, how do I talk to Jesus at night?”',
          "It’s bedtime, and Bobby has a big question. So Dad shows him how to pray in four simple steps: Thank You, I love You, Please watch over my loved ones, and Amen! When the dark feels a little scary, Bobby learns that Jesus is always with him, even while he sleeps.",
          'Inside: big, easy-to-read words on one page and a full-color picture on the other, a “Let’s Pray Together” page, a short bedtime prayer for every night of the week, and an “I Prayed Every Night This Week!” certificate.',
        ],
        // Coming soon (KDP week of 11-15). Add Faith's why + verse after her interview, amazonUrl when live.
        pageCount: 36,
      },
    ],
  },
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
];

// Shown under the shelves as "on the way".
export const comingSoon = [
  { title: 'Shirts & apparel', note: 'Coming soon' },
];

export const allBooks = shelves.flatMap((s) => s.products);
