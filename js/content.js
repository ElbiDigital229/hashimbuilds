/* =========================================================================
   SITE CONTENT — edit this file to change anything on the site.
   ⚠️ ALL COMPANIES, TESTIMONIALS, NUMBERS AND STORY BELOW ARE FICTIONAL
   FILLER so the design previews naturally. Replace with Hashim's real
   details before sharing this site with anyone.
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
    links: [
      { label: "Work",  href: "#work" },
      { label: "Story", href: "#story" },
      { label: "Life",  href: "#life" },
    ],
    cta: { label: "Say hi!", href: "mailto:hashim.hma@gmail.com" },
    socials: [
      { type: "instagram", href: "#" },
      { type: "linkedin",  href: "#" },
      { type: "x",         href: "#" },
    ],
  },

  /* ---- Hero (dark) -------------------------------------------------------- */
  hero: {
    status: "Dubai, UAE · Remote · GST/CET-friendly",
    heading: "Hashim Builds",
    sub: "Developer who takes products from rough sketch to shipped — without pretending the details don't matter.",
    /* type: "pills" = 3D word badges · "journey" = dotted path + polaroids
       · "photos" = tilted photo frames (placeholders until you add images) */
    cards: [
      { title: "Where I help",    href: "#work",  type: "pills", pills: ["Design", "Build", "Ship"] },
      { title: "How I got here",  href: "#story", type: "journey" },
      { title: "Life off-screen", href: "#life",  type: "photos" },
    ],
  },

  /* ---- 01 · Stats (light) — FICTIONAL FILLER ------------------------------- */
  about: {
    heading: "Where I drive revenue",
    intro:
      "Since 2020, I've worked at the intersection of engineering, design and product — helping startup teams ship faster, launch cleaner, and grow their products without the usual chaos.",
    stats: [
      {
        icon: "bolt",
        title: "25+ products shipped",
        desc: "From early-stage to scale-up — across hospitality, fintech, internal tooling, and beyond.",
      },
      {
        icon: "chart",
        title: "End-to-end ownership",
        desc: "Scoped, designed, built, deployed — without anyone needing to chase status updates.",
      },
      {
        icon: "trophy",
        title: "6 years in tech",
        desc: "Engineering, product, and design — agency, startup, remote.",
      },
    ],
    skillsHeading: "How I move the needle",
    skills: [
      {
        title: "Own the full lifecycle",
        desc: "From messy brief to shipped product. I manage timelines, tradeoffs, and follow-through — so nobody's sending 11pm messages about scope creep.",
      },
      {
        title: "Product fluency",
        desc: "I've sat in roadmap meetings, filed the bug reports, run the demos. When something breaks, I troubleshoot — I don't just relay.",
      },
      {
        title: "Build without burning out the team",
        desc: "Realistic scoping, honest estimates, and the discipline to cut the right corners — never the load-bearing ones.",
      },
      {
        title: "Communicate so things move",
        desc: "Clear briefs, sharp kickoffs, feedback that lands. Less back-and-forth, faster decisions, happier clients.",
      },
    ],
  },

  /* ---- 02 · Companies (light) — FICTIONAL NAMES -----------------------------
     `locked: true` renders a "Coming soon" 🔒 card.
     The last card links to your email. ---------------------------------------- */
  work: {
    heading: "Companies I've helped grow",
    items: [
      { emoji: "🏠", name: "Stayloop",    industry: "Hospitality / SaaS B2B",  desc: "", link: null },
      { emoji: "💬", name: "Threadbase",  industry: "Messaging / Real-time",   desc: "", link: null },
      { emoji: "🛡️", name: "Vaultic",     industry: "Cybersecurity / SaaS B2B", desc: "", link: null },
      { emoji: "📊", name: "Quantelle",   industry: "Data / SaaS B2B",          desc: "", locked: true, link: null },
      { emoji: "💳", name: "Ferropay",    industry: "Fintech / SaaS B2B",       desc: "", locked: true, link: null },
      { emoji: "✉️", name: "What's next?", industry: "Your project here",       desc: "", link: "mailto:hashim.hma@gmail.com" },
    ],
  },

  /* ---- 03 · Testimonials (light) — FICTIONAL PEOPLE -------------------------- */
  testimonials: {
    heading: "What clients actually say",
    items: [
      {
        quote: "“Hashim was our primary point of contact and owned the build end-to-end. He turned our goals into a clear plan and kept everything moving without us needing to chase.”",
        name: "Dana Whitfield",
        role: "Co-founder, Stayloop",
        initials: "DW",
      },
      {
        quote: "“He ran the whole engagement without us babysitting the process. We got the product fast — and it captured our concept better than anything we'd tried internally.”",
        name: "Marcus Oyelaran",
        role: "CEO & Co-Founder, Vaultic",
        initials: "MO",
      },
      {
        quote: "“On time, efficient, and a great communicator. An engineer at heart — I genuinely enjoyed our brainstorming sessions.”",
        name: "Priya Raghunathan",
        role: "Founder & CEO, Threadbase",
        initials: "PR",
      },
      {
        quote: "“Hashim took a vague idea and turned it into a working product in weeks. Clear updates, no surprises, and the final build was better than the brief.”",
        name: "Tomas Eriksen",
        role: "Founder, Stayloop Labs",
        initials: "TE",
      },
    ],
  },

  /* ---- 04 · Story (dark) — FICTIONAL FILLER ----------------------------------- */
  story: {
    heading: "How I found my way in",
    chapters: [
      {
        title: "Origins",
        paragraphs: [
          "A kid with a screwdriver and zero patience for being bored. Everything with a battery got opened; some of it even got reassembled.",
          "Then the first family computer arrived, and with it the first time a machine did exactly what I told it to. That was it. Hooked.",
          "An entire universe on the other end of a cable — and me, impatient to break into it.",
        ],
      },
      {
        title: "Going places",
        paragraphs: [
          "Teenage years were forums, half-broken prototypes, and games modded until they crashed. Clunky, slow — and, looking back, kind of amazing.",
          "First real job at 16. First paid website not long after. Every project taught me more by failing than any course ever did.",
          "Somewhere along the way, “I wonder if I could build that” became the default response to every problem.",
        ],
      },
      {
        title: "The turning point",
        paragraphs: [
          "A degree that taught me what I didn't want — and discipline I still use every day.",
          "Then the leap: a small agency, a chaotic first week, and the realization that shipping real products for real people was the only work that didn't feel like work.",
          "Still that curious kid. Back then I waited for the connection. Now I create them.",
        ],
      },
    ],
  },

  /* ---- 05 · Life off-screen (light photo wall) --------------------------------
     Replace `img: null` with a URL (e.g. "img/photo1.jpg") to show a photo.
     Until then each tile renders as a labeled placeholder. ---------------------- */
  life: {
    heading: "What my world looks like",
    photos: [
      { img: null, label: "Travel" },
      { img: null, label: "The desk where it happens" },
      { img: null, label: "Weekend hikes" },
      { img: null, label: "Family" },
      { img: null, label: "The view outside" },
      { img: null, label: "Side projects" },
      { img: null, label: "Favorite city" },
      { img: null, label: "Coffee, always" },
      { img: null, label: "More soon" },
    ],
  },

  /* ---- CTA (radial gradient) ---------------------------------------------------- */
  cta: {
    heading: "Let's build something",
    button: { label: "Say hi!", href: "mailto:hashim.hma@gmail.com" },
    footnote: "25+ products, from early-stage to scale-ups:",
    /* logos: 4 slots; each slot is a list the split-flap cycles through.
       {img} renders an image wordmark; {name} renders styled text. */
    logos: [
      [{ name: "Stayloop" },   { name: "Quantelle" }],
      [{ name: "Threadbase" }, { name: "Northwind" }],
      [{ name: "Vaultic" },    { name: "Acme Cloud" }],
      [{ name: "Ferropay" },   { name: "Ironleaf" }],
    ],
  },

  /* ---- Footer ---------------------------------------------------------------------- */
  footer: {
    copyright: "© 2026 Hashim. All rights reserved.",
    links: [
      { label: "GitHub",    href: "https://github.com/ElbiDigital229" },
      { label: "LinkedIn",  href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Email",     href: "mailto:hashim.hma@gmail.com" },
    ],
  },
};
