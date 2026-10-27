// Site-wide settings for plantedbyfaith.com.
export const site = {
  name: 'Planted by Faith',
  url: 'https://plantedbyfaith.com',
  email: 'hello@plantedbyfaith.com',
  prayerEmail: 'prayer@plantedbyfaith.com', // Cloudflare email routing → Faith's Gmail (set up from the Mac)
  description: 'Planted by Faith: Christian books, apparel and gifts from Faith, rooted in Psalms 1:3. Read my story, say hello, or send a private prayer request.',

  // noindex: off since launch (Tim, 2026-10-27). The pages.dev copy gets X-Robots-Tag
  // noindex from functions/_middleware.js. showDrafts: Faith's words went in 2026-10-23.
  noindex: false,
  showDrafts: false,
};

// English Standard Version, Faith's choice (2026-10-27). Crossway allows short
// quotes like this one on a website as long as the notice below is shown.
export const verse = {
  text: 'He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers.',
  ref: 'Psalms 1:3 (ESV)',
};
export const scriptureNotice = 'Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.';
