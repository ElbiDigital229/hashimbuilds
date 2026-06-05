/* =========================================================================
   SITE CONTENT — edit this file to change anything on the site.
   ⚠️ ALL COMPANIES, TESTIMONIALS, NUMBERS AND STORY BELOW ARE FICTIONAL
   FILLER so the design previews naturally. Replace with Hashim's real
   details before sharing this site with anyone.
   ========================================================================= */

const CONTENT = {

  /* ---- Browser tab & SEO ------------------------------------------------ */
  meta: {
    title: "Hashim Hussain — Product Owner & Designer",
    description:
      "Hashim Hussain is a Product Owner & Designer who ships the code too — mobile apps, web platforms, and the systems behind them.",
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
    heading: "Hashim Hussain",
    sub: "Product Owner & Designer who ships the code too — without coordinating a team of four.",
    /* type: "pills" = 3D word badges · "journey" = dotted path + polaroids
       · "photos" = tilted photo frames (placeholders until you add images) */
    cards: [
      { title: "Where I help",    href: "#work",  type: "pills", pills: ["Product", "Design", "Build"] },
      { title: "How I got here",  href: "#story", type: "journey", images: ["img/reference/journey-1.webp", "img/reference/journey-2.webp"] },
      { title: "Life off-screen", href: "#life",  type: "photos", image: "img/hero-life.jpg", caption: "Off the grid", extra: "img/ipod.png" },
    ],
  },

  /* ---- 01 · Stats (light) — FICTIONAL FILLER ------------------------------- */
  about: {
    heading: "Where I drive outcomes",
    intro:
      "Since 2011, I've worked at the intersection of product, design, and engineering — helping founders ship faster, fix what's broken, and turn stalled products into ones that grow.",
    stats: [
      {
        icon: "bolt",
        title: "341 projects shipped",
        desc: "From early-stage MVPs to legacy rebuilds. Across fintech, marketplaces, SaaS, and AI-native products.",
      },
      {
        icon: "chart",
        title: "$100K+ earned on Upwork",
        desc: "Top Rated Plus. 97% Job Success. Across 18+ countries.",
      },
      {
        icon: "trophy",
        title: "15 years in tech",
        desc: "UI/UX → product ownership → full-stack shipping. Now AI-native with Claude Code.",
      },
    ],
    skillsHeading: "How I move the needle",
    skills: [
      {
        title: "Diagnose before building",
        desc: "Most founders want to start coding. I start with the business model, the pricing, and the funnel. At MakersRow, the fix wasn't a feature — it was restructuring two-sided pricing economics. Often what looks like a product problem is a positioning problem.",
      },
      {
        title: "Ship in weeks, not months",
        desc: "Claude Code as primary dev environment. Spec-locked CLAUDE.md workflows. I write the spec, AI executes, I review, we ship. What used to take a team of four — designer, frontend dev, backend dev, PM — now takes one senior operator and 2–3 weeks.",
      },
      {
        title: "Co-own outcomes, not just deliverables",
        desc: "At MakersRow, I owned MRR. At GoVisually, I owned growth. At VictorFi, I owned the design system for 3 years. I don't ship wireframes and disappear — I stay embedded until the metric moves, the launch lands, or the product holds up in production.",
      },
      {
        title: "Translate between founder, design, and engineering",
        desc: "15 years bridging the gap. I can sit with a founder for pricing strategy at 10am, open Figma to redesign a flow by noon, and open my IDE to ship it by 2pm. Same person, same context, no handoff friction.",
      },
    ],
  },

  /* ---- 02 · Companies (light) — FICTIONAL NAMES -----------------------------
     `locked: true` renders a "Coming soon" 🔒 card.
     The last card links to your email. ---------------------------------------- */
  work: {
    heading: "Companies I've helped grow",
    items: [
      {
        emoji: "🏠", name: "Stayloop", industry: "Hospitality / SaaS B2B", desc: "", link: null,
        caseStudy: {
          area: "Hospitality · SaaS B2B · Dubai, AE",
          when: "2022–2024",
          role: "Role: Lead Engineer · Remote",
          headline: "Building the operating system\nfor boutique hotels",
          summary: "End-to-end property management for independent hotels that couldn't afford enterprise platforms. I led engineering from MVP through Series A, shipping booking engines, channel managers, and a guest-facing mobile app.",
          sections: [
            { title: "The problem", body: "Boutique hotel owners were juggling five different tools — none of which talked to each other. Overbookings, missed reviews, and hours of manual reconciliation every week." },
            { title: "What I built", body: "A unified dashboard connecting reservations, housekeeping, and guest messaging. Real-time sync with OTAs (Booking.com, Expedia), automated pricing rules, and a guest app for check-in and requests." },
            { title: "The outcome", body: "12 properties onboarded in the first quarter. Average time-to-resolution for guest issues dropped 60%. The founder closed a $2.1M seed round with the product live in demo." },
          ],
        },
      },
      {
        emoji: "💬", name: "Threadbase", industry: "Messaging / Real-time", desc: "", link: null,
        caseStudy: {
          area: "Messaging · Real-time · San Francisco, US",
          when: "2023–2024",
          role: "Role: Full-Stack Engineer · Remote",
          headline: "Real-time messaging\nbuilt for async teams",
          summary: "A Slack alternative designed around threads-first communication for distributed teams. I owned the real-time infrastructure and the client-side rendering pipeline.",
          sections: [
            { title: "The problem", body: "Distributed teams were drowning in Slack noise — important threads buried under reactions and off-topic chatter. Decisions got lost, context disappeared." },
            { title: "What I built", body: "WebSocket-based real-time engine handling 50k concurrent connections. Thread-first UI with smart notifications, read-state sync, and a markdown-native editor with inline previews." },
            { title: "The outcome", body: "Beta users reported 40% less time spent catching up on messages. Message-to-resolution time dropped from hours to minutes for support threads." },
          ],
        },
      },
      {
        emoji: "🛡️", name: "Vaultic", industry: "Cybersecurity / SaaS B2B", desc: "", link: null,
        caseStudy: {
          area: "Cybersecurity · SaaS B2B · Zurich, CH",
          when: "2024–2026",
          role: "Role: GTM & Product Lead · Remote",
          headline: "Building a cybersecurity\nplatform for early-stage startups",
          summary: "Automated infrastructure security for startups that couldn't afford enterprise-grade tools. I led GTM and Product alongside the founding team and two advisors.",
          sections: [
            { title: "The problem", body: "Early-stage startups knew they needed security but couldn't justify $50k/year tools or a dedicated security hire. Compliance requirements were growing, and most founders just hoped nothing would break." },
            { title: "What I built", body: "A self-serve vulnerability scanner that plugged into existing CI/CD pipelines. Automated CVE detection, misconfiguration alerts, and a compliance dashboard mapping to SOC 2 and ISO 27001 controls." },
            { title: "The outcome", body: "200+ startups onboarded in six months. Three enterprise customers converted from the free tier. The product became the default security recommendation in two major accelerator programs." },
          ],
        },
      },
      { emoji: "📊", name: "Quantelle",   industry: "Data / SaaS B2B",          desc: "", locked: true, link: null },
      { emoji: "💳", name: "Ferropay",    industry: "Fintech / SaaS B2B",       desc: "", locked: true, link: null },
      {
        emoji: "✉️", name: "What's next?", industry: "Your project here", desc: "", link: "mailto:hashim.hma@gmail.com",
        caseStudy: {
          isContact: true,
          headline: "Let's build\nsomething together",
          summary: "Got a project, a rough idea, or just want to talk shop? I'm always open to hearing what you're working on.",
          contactEmail: "hashim.hma@gmail.com",
          contactLinks: [
            { label: "Email me", href: "mailto:hashim.hma@gmail.com" },
            { label: "LinkedIn", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "GitHub", href: "https://github.com/ElbiDigital229" },
          ],
        },
      },
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
    heading: “How I found my way in”,
    chapters: [
      {
        title: “Origins”,
        paragraphs: [
          “Lahore, Pakistan. 1993. Born into a family where engineers were respected and doctors were celebrated, and I was supposed to become one of them.”,
          “I became neither.”,
          “What I became was the kid who took things apart. The remote control. The cassette player. The first computer my dad reluctantly brought home — a beige box that I broke within a month trying to open the case to see how it worked.”,
          “He still mentions it.”,
        ],
      },
      {
        title: “Going places”,
        paragraphs: [
          “At 14, I made my first logo for a small shop near my house. I think they paid me 500 rupees. Maybe it was a free meal. What I remember is the feeling: someone wanted the thing I made enough to give me money for it.”,
          “By the time I finished school, I was already designing on the side. Studying business at university, building websites at night, billing in dirhams when I could find a Gulf client and rupees when I couldn't.”,
          “In 2011, I joined Upwork. I thought I'd do it for a few months until something \”real\” came along. 341 projects later, I'm still there. Top Rated Plus. 18+ countries. Most of the work I'm proudest of came through that platform.”,
          “For most of those years, I was \”the designer.\” Good at it. Fast. The person you hired to make the screens beautiful.”,
        ],
      },
      {
        title: “The turning point”,
        paragraphs: [
          “In 2022, a founder hired me to redesign his B2B marketplace. By the second week, I'd stopped opening Figma. I was reading Stripe data. I was lurking on Reddit looking for customer complaints. I was arguing with him about pricing.”,
          “He kept asking when I'd start designing. I kept telling him we couldn't design our way out of a business model problem.”,
          “MRR was $35K when I joined. Four years later it was $65K. Somewhere in between, I stopped calling myself a designer.”,
          “That's when Claude Code entered the picture too. Not as a tool — as a partner. The gap between \”I have an idea\” and \”I have a working product\” collapsed from months to weeks. Suddenly I wasn't just diagnosing problems — I was shipping the fix.”,
        ],
      },
      {
        title: “Now”,
        paragraphs: [
          “These days I do three things.”,
          “I work with founders as a fractional Product Owner — usually on stalled SaaS or marketplace products that need someone to figure out why the numbers aren't moving.”,
          “I build my own products solo, using Claude Code as my full-stack team. Arbeitly, an AI-powered job matching platform. A multi-tenant SaaS for coworking operators. Whatever I want to ship next.”,
          “And I co-own Launchbox, a coworking space in Lahore where I get to watch other founders build their own version of this story.”,
          “Mornings start with my kids, coffee, and a spec file open in three windows. I still get a small kick every time something I built lands in production.”,
          “Still that curious kid trying to open the case. Just with better tools now.”,
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
