/* =========================================================================
   SITE CONTENT — edit this file to change anything on the site.
   Structure mirrors the reference portfolio 1:1. Anything in [brackets]
   is a placeholder — replace with your real details.
   ========================================================================= */

const CONTENT = {

  /* ---- Browser tab & SEO ------------------------------------------------ */
  meta: {
    title: "Hashim — Builder & Developer",
    description:
      "Hashim builds software products end to end — and keeps the people around them on the same page.",
  },

  /* ---- Pill nav ---------------------------------------------------------- */
  nav: {
    brand: { first: "hashim", accent: "builds" },
    links: [
      { label: "Work",  href: "#work" },
      { label: "Story", href: "#story" },
      { label: "Life",  href: "#life" },
    ],
    cta: { label: "Say hi!", href: "mailto:hashim.hma@gmail.com" },
  },

  /* ---- Hero (dark) -------------------------------------------------------- */
  hero: {
    status: "[Your City, Country] · Remote · [Timezone]-friendly",
    heading: "Hashim [Lastname]",
    sub: "[One-liner: who you are and the value you bring — e.g. “Developer who ships products end to end — without pretending the details don't matter.”]",
    cards: [
      { emoji: "🛠️", label: "Where I help",    href: "#work",  rotate: -7 },
      { emoji: "📖", label: "How I got here",  href: "#story", rotate: 4 },
      { emoji: "🏔️", label: "Life off-screen", href: "#life",  rotate: 9 },
    ],
  },

  /* ---- 01 · Stats (light) -------------------------------------------------- */
  about: {
    heading: "Where I drive impact",
    intro:
      "Since [year], I've worked at the intersection of [discipline 1], [discipline 2] and [discipline 3] — helping teams ship, launch, and grow without the chaos.",
    stats: [
      {
        title: "[30+] teams served",
        desc: "From early-stage to scale-up — across [fintech, devtools, cybersec], and beyond.",
      },
      {
        title: "[$1.5M+] in shipped work",
        desc: "Scoped, built, delivered — without burning the relationship.",
      },
      {
        title: "[6] years in tech",
        desc: "[Sales, product, engineering] — agency, product, remote.",
      },
    ],
    skillsHeading: "How I move the needle",
    skills: [
      {
        title: "Own the full lifecycle",
        desc: "[From messy brief to shipped product — you manage the timeline, the tradeoffs, and the follow-through, so nobody is chasing you at 11pm.]",
      },
      {
        title: "Product fluency",
        desc: "[You've sat in roadmap meetings, filed bug reports, run demos. When something escalates you troubleshoot, not just relay.]",
      },
      {
        title: "Close without burning bridges",
        desc: "[How you pitch, scope, and land work while keeping people happy to come back.]",
      },
      {
        title: "Communicate so things move",
        desc: "[Clear briefs, sharp kickoffs, feedback that lands. Less back-and-forth, faster decisions.]",
      },
    ],
  },

  /* ---- 02 · Companies (light) ----------------------------------------------
     `locked: true` renders a "Coming soon" 🔒 card.
     The last card links to your email. ---------------------------------------- */
  work: {
    heading: "Companies I've helped grow",
    items: [
      { emoji: "🛡️", name: "[Company One]",   industry: "Cybersecurity / SaaS B2B", desc: "", link: null },
      { emoji: "⛓️", name: "[Company Two]",   industry: "Web3 / SaaS B2B",          desc: "", link: null },
      { emoji: "👁️", name: "[Company Three]", industry: "Cybersecurity / SaaS B2B", desc: "", link: null },
      { emoji: "📊", name: "[Company Four]",  industry: "Data / SaaS B2B",          desc: "", locked: true, link: null },
      { emoji: "💳", name: "[Company Five]",  industry: "Fintech / SaaS B2B",       desc: "", locked: true, link: null },
      { emoji: "✉️", name: "What's next?",    industry: "Your project here",        desc: "", link: "mailto:hashim.hma@gmail.com" },
    ],
  },

  /* ---- 03 · Testimonials (light) -------------------------------------------- */
  testimonials: {
    heading: "What clients actually say",
    items: [
      {
        quote: "[“Hashim was our primary point of contact and owned the relationship end-to-end. He translated our goals into a clear plan and kept everything moving without us needing to chase.”]",
        name: "[Client Name]",
        role: "[Title, Company · ex-Somewhere]",
        initials: "CN",
      },
      {
        quote: "[“Hashim ran the whole engagement without us needing to babysit the process. We got the product fast — and it captured our concept better than anything we'd tried internally.”]",
        name: "[Client Name]",
        role: "[CEO & Co-Founder, Company]",
        initials: "CN",
      },
      {
        quote: "[“Not only on time and efficient, but a great communicator. An engineer at heart — I truly enjoyed our brainstorming sessions.”]",
        name: "[Client Name]",
        role: "[Founder & CEO, Company · ex-BigCo]",
        initials: "CN",
      },
    ],
  },

  /* ---- 04 · Story (dark) ------------------------------------------------------ */
  story: {
    heading: "How I found my way in",
    chapters: [
      {
        title: "Origins",
        paragraphs: [
          "[Hometown, Country]. [Birth year]. [A line about where you started and what you were like as a kid.]",
          "[The moment tech hooked you — e.g. the first computer, the dial-up modem, the first thing you built. Why it felt magical.]",
          "[A closing beat — an entire universe on the other end of a cable, and you, impatient to break into it.]",
        ],
      },
      {
        title: "Going places",
        paragraphs: [
          "[Teen years — what you tinkered with, built, broke, traded. The clunky early-internet stuff that shaped you.]",
          "[A move, a school, a first job at 16 — whatever changed your trajectory.]",
          "[Coming back / moving on — older, sharper, same instinct to poke at things until they made sense.]",
        ],
      },
      {
        title: "The turning point",
        paragraphs: [
          "[The detour — the degree or job that taught you what you didn't want, and what it taught you anyway.]",
          "[The leap — the city, the company, the week you got hooked on this work for good.]",
          "[Where you are now — still that curious kid. Back then you waited for the connection. Now you create them.]",
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
      { img: null, label: "[Travel photo]" },
      { img: null, label: "[Hobby photo]" },
      { img: null, label: "[Workspace photo]" },
      { img: null, label: "[Family / friends]" },
      { img: null, label: "[The view outside]" },
      { img: null, label: "[Something you made]" },
      { img: null, label: "[A place you love]" },
      { img: null, label: "[Pet / nature]" },
      { img: null, label: "[Anything fun]" },
    ],
  },

  /* ---- CTA (radial gradient) ---------------------------------------------------- */
  cta: {
    heading: "Let's build something",
    button: { label: "Say hi!", href: "mailto:hashim.hma@gmail.com" },
    footnote: "[30+] teams, from early-stage to scale-ups · hashim.hma@gmail.com",
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
