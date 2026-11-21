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
  // Short label that tells look-alike books apart (the two Daily Gratitude
  // journals share a title and cover). Shown as a tag and used in the page title.
  edition?: string;
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
        // Faith's back-cover words (approved when the book was made).
        about: [
          'Who is Jesus? What did He do? Why does it matter? And how much does He love you?',
          'Little hands can find out in this four-part coloring book for ages 4 to 8. Each of the 54 pictures comes with a simple activity to go with it: trace a word, talk it over with a grown-up, and draw. Most pictures have a Bible verse too. And when the last page is colored, a certificate is waiting!',
        ],
        why: [
          'When I was a child, nobody really told me about God, other than that He was "the big man upstairs." We need to start them out young and train them up in the way they should go.',
          'This book works at home with parents or grandparents, in Sunday school, or with homeschool families.',
        ],
        verse: { text: 'Train up a child in the way he should go; even when he is old he will not depart from it.', ref: 'Proverbs 22:6 (ESV)' },
        pageCount: 110,
        isbn: '9798166983268',
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
        // Faith's back-cover words (approved when the book was made).
        about: [
          'Bobby loves his big red truck. But he has something even better to share!',
          'When Bobby shares his new truck with a lonely boy at the park, he makes a new friend. Then at Sunday school he learns that Jesus wants us to tell everyone about Him. Sharing Jesus feels a little scary at first, but with a prayer and a brave heart, Bobby tells his friend Henry about Jesus and invites him to church. This story coloring book for ages 4 to 8 has 22 pictures to color, a page to draw a friend you can share Jesus with, and an “I Can Share Jesus!” certificate to cut out.',
        ],
        why: [
          "I want kids to be able to tell others about Jesus without being scared or nervous. It's important to be able to share our faith with others, no matter the age.",
          "My favorite part is how Bobby's mom answers Henry's hard question.",
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
        // Faith's back-cover words (approved when the book was made).
        about: [
          'Noah and the rainbow. Moses and the Red Sea. David and his sling. Jonah and the big fish.',
          'Every book of the Old Testament, from Genesis to Malachi, has its own picture in this coloring book for ages 4 to 8. Each of the 52 pictures comes with a short telling of the story for a grown-up to read aloud, a word to trace and something to draw. Kids color in each book on the Books of the Bible list as they go, and when the last page is colored, a certificate is waiting!',
        ],
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
        // Faith's back-cover words (approved when the book was made).
        about: [
          'Jesus died for us and rose again! Peter’s chains fall off. The armor of God.',
          'Every book of the New Testament, from Matthew to Revelation, has its own picture in this coloring book for ages 4 to 8. Each of the 50 pictures comes with a short telling of the story for a grown-up to read aloud, a word to trace and something to draw. Kids color in each book on the Books of the Bible list as they go, and when the last page is colored, a certificate is waiting!',
        ],
        why: [
          'When I was a teen, I remember trying to learn the books of the Bible, and I always felt like I was behind because kids younger than me already knew them. I hope these books help young kids learn each book of the Bible and their importance.',
        ],
        verse: { text: 'I have stored up your word in my heart, that I might not sin against you.', ref: 'Psalm 119:11 (ESV)' },
        pageCount: 104,
        isbn: '9798141053740',
      },
      {
        title: 'Countdown to Christmas',
        subtitle: '25 Days to Color the Story of Jesus',
        image: '/images/shop/countdown-to-christmas.jpg',
        imageSize: [600, 776],
        details: ['A Bible picture to color for every day of December, 1 to 25', 'A short story and a verse for each day, plus a countdown chart', '8.5 x 11 in paperback, 56 pages, white paper'],
        // Front page, the countdown chart, and Day 25 (Happy Birthday, Jesus!).
        pages: [1, 2, 52, 53].map((n) => `/images/shop/pages/countdown-to-christmas-${String(n).padStart(3, '0')}.jpg`),
        pageSize: [560, 725],
        slug: 'countdown-to-christmas',
        summary: 'Countdown to Christmas: a Christian Advent coloring book for ages 4 to 8, with a Bible story, verse and picture for every day from December 1 to 25.',
        // Faith's back-cover words (2026-11-11).
        about: [
          'An angel visits Mary. Shepherds hear good news. Wise men follow the star!',
          'Count down to Christmas one day at a time! From December 1st to December 25th, each day has a short Bible story for a grown-up to read aloud, a Bible verse, and a picture to color, from God’s promise of a Savior all the way to Jesus’s birthday. Kids color a star on the countdown chart each day, and on Christmas they earn a certificate to cut out and keep. A coloring book for ages 4 to 8, made for families to share. May your Christmas be filled with many blessings!',
        ],
        why: [
          'I made this book so little ones can know the true meaning of Christmas. Growing up I thought Christmas was all about Santa Claus and getting presents. I feel that every child should know that it is actually about celebrating one of the best days ever, the birth of Jesus!',
        ],
        verse: { text: 'Thanks be to God for his inexpressible gift!', ref: '2 Corinthians 9:15 (ESV)' },
        amazonUrl: 'https://www.amazon.com/dp/B0HS2RW4MM',
        // Live on Amazon 2026-11-17.
        isbn: '9798143639331',
        pageCount: 56,
      },
      {
        title: 'Tuck Me In, Jesus',
        subtitle: 'Bobby Learns a Nighttime Prayer',
        image: '/images/shop/tuck-me-in.jpg',
        imageSize: [600, 600],
        details: ['A full-color bedtime story for ages 4 to 8', 'Teaches a simple prayer to say every night', '8.5 x 8.5 in paperback, 36 pages'],
        // Front page, then Dad teaching Bobby to pray (Faith's favorite part).
        pages: [1, 10, 11, 12, 13].map((n) => `/images/shop/pages/tuck-me-in-${String(n).padStart(3, '0')}.jpg`),
        pageSize: [553, 560],
        slug: 'tuck-me-in-jesus',
        summary: 'Tuck Me In, Jesus: a full-color Christian bedtime story for ages 4 to 8 that teaches a simple prayer to say every night.',
        about: [
          '“Dad, how do I talk to Jesus at night?”',
          "It’s bedtime, and Bobby has a big question. So Dad shows him how to pray in four simple steps: Thank You, I love You, Please watch over my loved ones, and Amen! When the dark feels a little scary, Bobby learns that Jesus is always with him, even while he sleeps.",
          'Inside: big, easy-to-read words on one page and a full-color picture on the other, a “Let’s Pray Together” page, a short bedtime prayer for every night of the week, and an “I Prayed Every Night This Week!” certificate.',
        ],
        // Faith's words (2026-11-12).
        why: [
          'Looking back, I really wish I had a nighttime prayer routine when I was little. I feel like this book is a great way to learn to pray and to get in the habit of praying every night before bed. I pictured parents reading it to their kids at night.',
        ],
        verse: { text: 'In peace I will both lie down and sleep; for you alone, O LORD, make me dwell in safety.', ref: 'Psalm 4:8 (ESV)' },
        amazonUrl: 'https://www.amazon.com/dp/B0HS2Z8LG1',
        // Live on Amazon 2026-11-17.
        isbn: '9798143631489',
        pageCount: 36,
      },
      {
        title: 'Bobby and the Broken Window',
        subtitle: 'Learning to Tell the Truth',
        image: '/images/shop/bobby-and-the-broken-window.jpg',
        imageSize: [600, 600],
        details: ['A full-color picture book for ages 4 to 8', 'A gentle story about telling the truth', '8.5 x 8.5 in paperback, 36 pages'],
        // Front page, the opening spread, and Mom asking kindly (Faith's favorite part).
        pages: [1, 4, 5, 10, 11].map((n) => `/images/shop/pages/bobby-window-${String(n).padStart(3, '0')}.jpg`),
        pageSize: [553, 560],
        slug: 'bobby-and-the-broken-window',
        summary: 'Bobby and the Broken Window: a full-color Christian picture book for ages 4 to 8 about honesty, courage and telling the truth. Coming soon to Amazon.',
        // Faith's back-cover words (approved 2026-11-12).
        about: [
          '“I don’t know how it happened…”',
          'CRACK! Bobby’s baseball flies right through the kitchen window. When Mom asks what happened, Bobby tells a little fib. But the fib gives him a heavy feeling inside that just won’t go away, not at dinner and not even at prayer time. Will Bobby find the courage to tell the truth?',
          'A warm, gentle story for ages 4 to 8 about honesty, courage and a dad’s love, with a Let’s Pray Together page and questions to talk about together.',
        ],
        // Faith's words (2026-11-12).
        why: [
          'I made this book to help parents teach their kids that telling “little white lies” is not OK, and that Jesus wants us to tell the truth. My favorite part is when Bobby’s mom doesn’t give him a harsh scolding, even though she knows he isn’t telling the truth.',
        ],
        verse: { text: 'And you will know the truth, and the truth will set you free.', ref: 'John 8:32 (ESV)' },
        // Coming soon (still being finished). Add amazonUrl + isbn when live.
        pageCount: 36,
      },
    ],
  },
  {
    id: 'grown-up-coloring',
    title: 'Coloring Books for Grown-Ups',
    products: [
      {
        title: 'Do Not Be Anxious',
        subtitle: '31 Days of Peace',
        image: '/images/shop/do-not-be-anxious.jpg',
        imageSize: [600, 776],
        details: ['31 detailed designs to color, each with a verse, a reflection and a prayer', '8.5 x 11 in paperback, 66 pages, white paper'],
        // Title page, Day 1, and Day 16, the tree planted by the water (Faith's favorite).
        pages: [1, 4, 5, 34, 35].map((n) => `/images/shop/pages/do-not-be-anxious-${String(n).padStart(3, '0')}.jpg`),
        pageSize: [560, 725],
        slug: 'do-not-be-anxious',
        summary: 'Do Not Be Anxious: a 31-day Christian adult coloring book with Scripture, reflections and prayers for worried hearts. Coming soon to Amazon.',
        // Faith's back-cover words (approved 2026-11-16).
        about: [
          '“When worry crowds in, come sit awhile.”',
          'Do Not Be Anxious is a 31-day journey through Scripture for anyone who worries more than they should, needs reminding that God has everything under control, or simply needs quiet time with Him instead of the worries of this world.',
          'Each day opens to two pages: a detailed coloring design with its verse lettered right into the picture, and facing it the full verse, a short reflection, a prayer, and lines to write your own thoughts. 31 original designs, from wildflowers and lilies to a lighthouse and a sleeping fawn, on large 8.5 x 11 inch pages.',
          'Set your worries down, pick up your pencils, and let God’s peace settle in.',
        ],
        // Faith's words (2026-11-20).
        why: [
          'I made this book to help encourage the ones that have an anxious heart. God has everything under control. You only need to cast your worries on Him.',
          'I made it for anyone that needs to relax their mind and just spend some quiet time with God. I absolutely love the picture of the tree planted by the water.',
        ],
        // KJV at Faith's request (the rest of the site uses ESV).
        verse: { text: 'Casting all your care upon him; for he careth for you.', ref: '1 Peter 5:7 (KJV)' },
        // Coming soon. Add amazonUrl + isbn when live.
        pageCount: 66,
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
        edition: '365-Day Guided Journal',
        image: '/images/shop/daily-gratitude.jpg',
        details: ['A full year of guided daily pages', '6 x 9 in paperback, 368 pages, cream paper'],
        pages: [1, 2, 3, 4, 5].map((n) => `/images/shop/pages/daily-gratitude-00${n}.jpg`),
        amazonUrl: 'https://www.amazon.com/dp/B0HPZ6YBDJ',
        slug: 'daily-gratitude',
        summary: 'A 365-day Christian gratitude journal from Faith at Planted by Faith: a guided page for every day of the year, made for a hard season of life.',
        // Claude's draft from the Amazon description, approved by Faith 2026-11-18.
        about: [
          '“Those who have gratitude always see the glass half full.”',
          'Daily Gratitude is a year of thankfulness, one page at a time. Every page has a line for the date and three simple prompts: Today I am grateful for (three things), A moment that made me smile, and Lord, thank You for. The pages are undated, so you can begin any day of the year, and they are numbered Day 1 to Day 365, so you can see how far you have come.',
          'A soft watercolor border of apple blossoms frames every page, on cream paper. A thoughtful gift for a friend, a mother, a Bible study group, or yourself.',
        ],
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
        edition: 'Lined Journal',
        image: '/images/shop/daily-gratitude-lined.jpg',
        details: ['Lined pages with a date line, room to write freely', '6 x 9 in paperback, 120 pages, cream paper'],
        pages: [1, 3, 4, 5].map((n) => `/images/shop/pages/daily-gratitude-lined-00${n}.jpg`),
        amazonUrl: 'https://www.amazon.com/dp/B0HPYTWKWK',
        slug: 'a-thankful-heart',
        summary: 'A lined Christian gratitude journal with a date line on every page and room to write freely. No prompts, no full-year commitment, and a sweet gift.',
        // Claude's draft from the Amazon description, approved by Faith 2026-11-18.
        about: [
          'Room to write down the good things in each day.',
          'Every page has a line for the date and lined space for your own words, with no prompts to follow. Write a list, a prayer, or a few lines about your day, and start whenever you like.',
          '117 lined pages with a soft watercolor border of apple blossoms, on cream paper. A thoughtful gift for a friend, a mother, a Bible study group, or yourself.',
        ],
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
