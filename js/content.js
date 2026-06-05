/* =========================================================================
   SITE CONTENT — edit this file to change anything on the site.
   No HTML or CSS knowledge needed. Save → commit → push → live in ~30s.
   ========================================================================= */

const CONTENT = {

  /* ---- Browser tab & SEO ------------------------------------------------ */
  meta: {
    title: "Hashim — Builder & Developer",
    description:
      "Hashim builds software products — from mobile apps to full-stack web platforms. Portfolio and selected work.",
  },

  /* ---- Logo (rendered as: first + accent-colored second part) ----------- */
  brand: { first: "hashim", accent: "builds" },

  /* ---- Top navigation ---------------------------------------------------- */
  nav: [
    { label: "About",    href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact" },
  ],

  /* ---- Hero -------------------------------------------------------------- */
  hero: {
    badge: "Available for new projects",
    heading: "I build software products, end to end.",
    sub: "I'm Hashim — a developer who takes ideas from rough sketch to shipped product. Mobile apps, web platforms, and the systems behind them.",
    ctas: [
      { label: "See my work",  href: "#projects", style: "primary" },
      { label: "Get in touch", href: "#contact",  style: "ghost" },
    ],
  },

  /* ---- About ------------------------------------------------------------- */
  about: {
    label: "About",
    title: "Builder first, specialist second.",
    paragraphs: [
      "I work across the full stack — designing interfaces, writing the backend that powers them, and wiring up the infrastructure that keeps everything running. I care about shipping things that work, not just things that demo well.",
      "Recently I've been building customer-facing mobile apps, property-management tooling, and messaging systems. I like small, sharp products with a clear job to do.",
    ],
    toolboxTitle: "Toolbox",
    toolbox: [
      "TypeScript", "React", "React Native", "Node.js",
      "PostgreSQL", "Figma", "AWS",
    ],
  },

  /* ---- Projects ----------------------------------------------------------
     Add/remove/reorder items freely. `link` is optional — if present, the
     whole card becomes clickable. `icon` is any emoji. ---------------------- */
  projects: {
    label: "Selected work",
    title: "Projects",
    items: [
      {
        icon: "📱",
        name: "Guest Mobile App",
        description:
          "A customer-facing mobile app for short-stay guests — booking details, check-in flows, and real-time messaging with property managers, all in one place.",
        tags: ["React Native", "Design system"],
        link: null,
      },
      {
        icon: "💬",
        name: "Unified Messaging",
        description:
          "A messaging layer that merges automated and manual conversations into a single channel per guest — no split threads, no missed context.",
        tags: ["Node.js", "Real-time"],
        link: null,
      },
      {
        icon: "🛠️",
        name: "Operations Platform",
        description:
          "Internal tooling for property management teams — task tracking, audit trails, and hardened infrastructure built for reliability.",
        tags: ["React", "PostgreSQL"],
        link: null,
      },
    ],
  },

  /* ---- Contact ------------------------------------------------------------ */
  contact: {
    label: "Contact",
    title: "Let's build something.",
    text: "Have a project in mind, or want to talk through an idea? I'm always open to interesting work.",
    links: [
      { label: "Email me", href: "mailto:hashim.hma@gmail.com",          style: "primary" },
      { label: "GitHub",   href: "https://github.com/ElbiDigital229",    style: "ghost" },
    ],
  },

  /* ---- Footer ------------------------------------------------------------- */
  footer: {
    copyright: "© 2026 Hashim. All rights reserved.",
    note: "hashimbuilds.com",
  },
};
