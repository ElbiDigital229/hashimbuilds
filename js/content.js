/* =========================================================================
   SITE CONTENT — edit this file to change anything on the site.
   PLACEHOLDER NOTE: stats, story, and project copy are drafts — replace
   with your real numbers and history before sharing widely.
   ========================================================================= */

const CONTENT = {

  /* ---- Browser tab & SEO ------------------------------------------------ */
  meta: {
    title: "Hashim — Builder & Developer",
    description:
      "Hashim builds software products end to end — mobile apps, web platforms, and the systems behind them.",
  },

  /* ---- Pill nav ---------------------------------------------------------- */
  nav: {
    brand: { first: "hashim", accent: "builds" },
    links: [
      { label: "Work",  href: "#work" },
      { label: "About", href: "#about" },
      { label: "Story", href: "#story" },
    ],
    cta: { label: "Say hi!", href: "mailto:hashim.hma@gmail.com" },
  },

  /* ---- Hero (dark) -------------------------------------------------------- */
  hero: {
    status: "Available for new projects · Remote-friendly",
    heading: "Hashim builds.",
    sub: "Developer who takes ideas from rough sketch to shipped product — mobile apps, web platforms, and the systems that keep them running.",
    cards: [
      { emoji: "🛠️", label: "What I build",   href: "#work",    rotate: -7 },
      { emoji: "📖", label: "How I got here", href: "#story",   rotate: 4 },
      { emoji: "⚡", label: "Let's talk",     href: "#contact", rotate: 9 },
    ],
  },

  /* ---- About / stats (light) — PLACEHOLDER numbers ------------------------ */
  about: {
    heading: "Where I make a dent",
    intro:
      "I work across the full stack — interfaces, backends, and infrastructure. I care about shipping things that work, not just things that demo well.",
    stats: [
      {
        title: "Products shipped end to end",
        desc: "Customer-facing mobile apps, internal ops tooling, and the messaging systems connecting them.",
      },
      {
        title: "Full-stack ownership",
        desc: "Design in Figma, build in TypeScript, deploy and keep it running — one person, whole picture.",
      },
      {
        title: "Small, sharp products",
        desc: "I like tools with a clear job to do, built for the people who actually use them daily.",
      },
    ],
    skillsHeading: "How I work",
    skills: [
      {
        title: "Own the full lifecycle",
        desc: "From messy idea to shipped product — scoping, building, deploying, and iterating after launch.",
      },
      {
        title: "Design and code, together",
        desc: "I design what I build and build what I design, so nothing gets lost in translation.",
      },
      {
        title: "Systems that don't fall over",
        desc: "Audit trails, hardening, backups — the unglamorous work that keeps products trustworthy.",
      },
    ],
  },

  /* ---- Projects (light) --------------------------------------------------- */
  work: {
    heading: "Things I've built",
    items: [
      {
        emoji: "📱",
        name: "Guest Mobile App",
        industry: "Hospitality / Mobile",
        desc: "Booking details, check-in flows, and real-time messaging for short-stay guests.",
        link: null,
      },
      {
        emoji: "💬",
        name: "Unified Messaging",
        industry: "Real-time / Backend",
        desc: "Automated and manual conversations merged into one channel per guest — no split threads.",
        link: null,
      },
      {
        emoji: "🛠️",
        name: "Operations Platform",
        industry: "Internal tools / SaaS",
        desc: "Task tracking, audit trails, and hardened infrastructure for property management teams.",
        link: null,
      },
      {
        emoji: "🔒",
        name: "What's next?",
        industry: "Your project here",
        desc: "Have something in mind? Let's scope it together.",
        link: "mailto:hashim.hma@gmail.com",
      },
    ],
  },

  /* ---- Story (dark) — PLACEHOLDER, replace with your real story ----------- */
  story: {
    heading: "How I found my way in",
    chapters: [
      {
        title: "Origins",
        paragraphs: [
          "It started the way it usually does — taking things apart to see how they work, and occasionally getting them back together.",
          "The first time I made a computer do something I told it to, I was hooked. Still am.",
        ],
      },
      {
        title: "Going deeper",
        paragraphs: [
          "Learning by building: small tools, broken prototypes, projects that taught me more by failing than any course did.",
          "Somewhere along the way, 'I wonder if I could build that' became the default response to every problem.",
        ],
      },
      {
        title: "Today",
        paragraphs: [
          "Now I build products end to end — mobile apps, web platforms, the systems behind them.",
          "Still that curious kid. The difference is now the things I build get used by real people every day.",
        ],
      },
    ],
  },

  /* ---- CTA (radial gradient) ----------------------------------------------- */
  cta: {
    heading: "Let's build something",
    button: { label: "Say hi!", href: "mailto:hashim.hma@gmail.com" },
    footnote: "Usually replies within a day · hashim.hma@gmail.com",
  },

  /* ---- Footer ---------------------------------------------------------------- */
  footer: {
    copyright: "© 2026 Hashim. All rights reserved.",
    links: [
      { label: "GitHub", href: "https://github.com/ElbiDigital229" },
      { label: "Email",  href: "mailto:hashim.hma@gmail.com" },
    ],
  },
};
