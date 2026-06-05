/* =========================================================================
   RENDERER v3.1 — fills the page from CONTENT (js/content.js).
   You should not need to edit this file to change site content.
   ========================================================================= */

(function () {
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => {
    const d = document.createElement("div");
    d.textContent = s ?? "";
    return d.innerHTML;
  };
  const ext = (href) => (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "");

  /* ---- Meta ---- */
  document.title = CONTENT.meta.title;
  $('meta[name="description"]').setAttribute("content", CONTENT.meta.description);

  /* ---- Pill nav ---- */
  const COMPASS = `
    <svg class="compass" viewBox="0 0 26 26" aria-hidden="true">
      <defs>
        <linearGradient id="needle-grad" x1="13" y1="2.6" x2="13" y2="23.4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#14F590"/>
          <stop offset="0.42" stop-color="#14F590" stop-opacity="0.95"/>
          <stop offset="0.66" stop-color="#0FCCD8" stop-opacity="0.35"/>
          <stop offset="0.85" stop-color="#1DCAD5" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <circle cx="13" cy="13" r="11.6" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.4"/>
      <circle cx="13" cy="13" r="9.2" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1" stroke-dasharray="1 2.6"/>
      <g class="needle">
        <path d="M13 2.9 C13.05 2.8 13.2 2.8 13.25 2.9 L15.6 12.55 a1 1 0 0 1 0 0.9 L13.25 23.1 C13.2 23.2 13.05 23.2 13 23.1 L10.65 13.45 a1 1 0 0 1 0 -0.9 Z" fill="#fff"/>
        <path d="M13 2.9 C13.05 2.8 13.2 2.8 13.25 2.9 L15.6 12.55 a1 1 0 0 1 0 0.9 L13.25 23.1 C13.2 23.2 13.05 23.2 13 23.1 L10.65 13.45 a1 1 0 0 1 0 -0.9 Z" fill="url(#needle-grad)"/>
      </g>
    </svg>`;
  const SOCIAL_ICONS = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.4"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" stroke="none"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0zM7.1 20.5H3.6V9h3.5v11.5zM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1zM20.5 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.4v6.4z"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.4 2h6.4l4.4 5.9L18.9 2z"/></svg>`,
  };
  const nav = CONTENT.nav;
  /* nav.logo (optional): image URL replaces the built-in compass SVG.
     nav.logoArrow (optional): second image layered + rotating on top,
     matching the dial-plus-arrow construction of the reference. */
  const logoHTML = nav.logo
    ? `<span class="compass-stack">
         <img class="compass" src="${esc(nav.logo)}" alt="">
         ${nav.logoArrow ? `<img class="compass-arrow" src="${esc(nav.logoArrow)}" alt="">` : ""}
       </span>`
    : COMPASS;
  $("#nav").innerHTML = `
    <div class="nav-pill">
      <div class="nav-left">
        <a class="nav-compass" href="#" aria-label="Home">${logoHTML}</a>
        <div class="nav-sep"></div>
        <div class="nav-links-mid">
          ${nav.links.map((l) => `<a class="link" href="${esc(l.href)}">${esc(l.label)}</a>`).join("")}
        </div>
      </div>
      <div class="nav-right">
        <a class="link" href="${esc(nav.cta.href)}">${esc(nav.cta.label)}</a>
        <div class="nav-sep"></div>
        <div class="nav-socials">
          ${nav.socials.map((s) =>
            `<a href="${esc(s.href)}"${ext(s.href)} aria-label="${esc(s.type)}">${SOCIAL_ICONS[s.type] || ""}</a>`).join("")}
        </div>
      </div>
    </div>`;

  /* ---- Hero ---- */
  const hero = CONTENT.hero;
  /* ph(): renders an <img> when a URL is given, else a gradient placeholder */
  const ph = (cls, style, img) => img
    ? `<img class="ph ${cls}" style="${style};object-fit:cover" src="${esc(img)}" alt="">`
    : `<div class="ph ${cls}" style="${style}"></div>`;
  const CARD_BODIES = {
    pills: (c) => c.pills.map((word, i) => {
      /* stacked, slightly overlapping, mild tilts — per reference */
      const conf = [
        { cls: "pill-green", style: "top:64px;left:80px;transform:rotate(-12deg)" },
        { cls: "pill-teal",  style: "top:134px;left:34px;transform:rotate(-2deg)" },
        { cls: "pill-blue",  style: "top:202px;left:84px;transform:rotate(-9deg)" },
      ][i % 3];
      return `<span class="pill ${conf.cls}" style="${conf.style}">${esc(word)}</span>`;
    }).join(""),
    /* c.images (optional): [bigPolaroidURL, smallPolaroidURL] */
    journey: (c) => `
      <svg class="squiggle" viewBox="0 0 340 320" fill="none" aria-hidden="true">
        <path d="M64 304 C 28 248, 96 236, 84 184 C 72 132, 16 144, 38 100 C 58 62, 122 78, 110 132 C 98 184, 162 194, 202 152 C 242 112, 198 58, 250 48 C 292 40, 306 92, 284 136"
          stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
      </svg>
      <span class="map-dot" style="top:206px;left:218px"></span>
      <span class="map-dot" style="top:280px;left:84px"></span>
      <div class="polaroid" style="top:56px;left:172px;transform:rotate(4deg)">${ph("photo-b", "width:100px;height:122px", c.images && c.images[0])}</div>
      <div class="polaroid" style="top:174px;left:44px;transform:rotate(-6deg)">${ph("photo-a", "width:76px;height:92px", c.images && c.images[1])}</div>`,
    /* c.image: polaroid photo · c.caption: handwritten label
       c.extra: image replacing the CSS player */
    photos: (c) => `
      <div class="polaroid" style="top:54px;left:24px;transform:rotate(-2deg)">
        ${ph("photo-c", "width:168px;height:148px", c.image)}<span class="caption">${esc(c.caption || "photos coming soon")}</span>
      </div>
      ${c.extra
        ? `<img class="ipod-img" src="${esc(c.extra)}" alt="" style="top:58px;left:192px;transform:rotate(12deg)">`
        : `<div class="ipod" style="top:60px;left:194px;transform:rotate(12deg)">
             <span class="ipod-screen"></span><span class="ipod-wheel"></span>
           </div>`}`,
  };
  $("#hero").innerHTML = `
    <div class="wrap">
      <div class="hero-status"><span class="dot"></span>${esc(hero.status)}</div>
      <h1>${esc(hero.heading)}</h1>
      <p class="hero-sub">${esc(hero.sub)}</p>
      <div class="hero-cards">
        ${hero.cards.map((c) => `
          <a class="float-card" href="${esc(c.href)}">
            <div class="fc-inner">
              <div class="fc-head">${esc(c.title)}</div>
              <div class="fc-body">${(CARD_BODIES[c.type] || (() => ""))(c)}</div>
            </div>
          </a>`).join("")}
      </div>
    </div>`;

  /* ---- 01 · Stats + skills ---- */
  const STAT_ICONS = {
    bolt: `<svg viewBox="0 0 24 24" fill="currentColor" style="transform:rotate(2deg)"><path d="M13.2 2.2 4.6 13.4a.4.4 0 0 0 .32.64h5.1l-1.2 7.5c-.07.43.48.66.74.31l8.6-11.2a.4.4 0 0 0-.32-.65h-5.1l1.2-7.49c.07-.43-.48-.66-.74-.3z"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="14.5" width="4.2" height="5.5" rx="1.2"/><rect x="9.9" y="10" width="4.2" height="10" rx="1.2"/><rect x="15.8" y="4.5" width="4.2" height="15.5" rx="1.2"/></svg>`,
    trophy: `<svg viewBox="0 0 24 24" fill="currentColor" style="transform:rotate(-7deg)"><path d="M7 3h10v1.5h3.5V8a4.5 4.5 0 0 1-4.6 4.5A6 6 0 0 1 13 15.6V18h2.5a1 1 0 0 1 1 1v2h-9v-2a1 1 0 0 1 1-1H11v-2.4a6 6 0 0 1-2.9-3.1A4.5 4.5 0 0 1 3.5 8V4.5H7V3zM5 6v2a3 3 0 0 0 2.3 2.9A11 11 0 0 1 7 8V6H5zm14 0h-2v2c0 1-.1 2-.3 2.9A3 3 0 0 0 19 8V6z"/></svg>`,
  };
  const about = CONTENT.about;
  $("#about").innerHTML = `
    <div class="wrap">
      <div class="reveal">
        <h2 class="h-display">${esc(about.heading)}</h2>
        <p class="intro">${esc(about.intro)}</p>
        <div class="stats">
          ${about.stats.map((s) => `
            <div class="stat">
              ${s.icon ? `<div class="stat-icon">${STAT_ICONS[s.icon] || ""}</div>` : ""}
              <h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>
            </div>`).join("")}
        </div>
      </div>
      <div class="skills reveal">
        <h2>${esc(about.skillsHeading)}</h2>
        <div class="skills-grid">
          <div class="skill-list">
            ${about.skills.map((s, i) => `
              <div class="skill-row${i === 0 ? " open" : ""}" data-i="${i}" role="button" tabindex="0">
                <h3>${esc(s.title)}</h3>
                <div class="skill-desc"><p>${esc(s.desc)}</p></div>
              </div>`).join("")}
          </div>
          <div class="knob-wrap">
            <svg class="knob-ticks" viewBox="0 0 380 380">
              <circle cx="190" cy="190" r="170" fill="none" stroke="rgba(0,0,0,0.3)"
                stroke-width="9" stroke-dasharray="1.5 7.4"/>
              ${[45, 135, 225, 315].map((a) =>
                `<line x1="190" y1="6" x2="190" y2="32" stroke="rgba(0,0,0,0.45)" stroke-width="2.5"
                   transform="rotate(${a} 190 190)"/>`).join("")}
            </svg>
            <span class="knob-num" data-n="2" style="top:22px;left:60px">2</span>
            <span class="knob-num" data-n="3" style="top:22px;right:60px">3</span>
            <span class="knob-num" data-n="1" style="bottom:22px;left:60px">1</span>
            <span class="knob-num" data-n="4" style="bottom:22px;right:60px">4</span>
            <div class="knob-bezel">
              <div class="knob-face" id="knob-face"><span class="knob-dot"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  /* ---- 02 · Companies ---- */
  const work = CONTENT.work;
  const card = (p) => {
    const lock = p.locked ? `<span class="wc-lock">🔒 Coming soon</span>` : "";
    /* p.image (optional): full-bleed logo art replaces the emoji body */
    const body = p.image
      ? `<img class="wc-img" src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`
      : `<div class="wc-body"><div class="wc-emoji">${p.emoji}</div>
          ${p.desc ? `<div class="wc-desc">${esc(p.desc)}</div>` : ""}</div>`;
    const inner = `
      <div class="wc-head"><span>${esc(p.name)}</span>${lock}</div>
      ${body}
      <div class="wc-industry">${esc(p.industry)}</div>`;
    return p.link
      ? `<a class="work-card" href="${esc(p.link)}"${ext(p.link)}>${inner}</a>`
      : `<article class="work-card${p.locked ? " locked" : ""}">${inner}</article>`;
  };
  $("#work").innerHTML = `
    <div class="wrap reveal">
      <h2>${esc(work.heading)}</h2>
      <div class="work-grid">${work.items.map(card).join("")}</div>
    </div>`;

  /* ---- 03 · Testimonials ---- */
  const t = CONTENT.testimonials;
  $("#testimonials").innerHTML = `
    <div class="wrap reveal">
      <h2 class="t-center">${esc(t.heading)}</h2>
      <div class="quote-grid">
        ${t.items.map((q) => `
          <figure class="quote-card">
            <blockquote>${esc(q.quote)}</blockquote>
            <figcaption>
              <span class="avatar">${esc(q.initials)}</span>
              <span><strong>${esc(q.name)}</strong><br><em>${esc(q.role)}</em></span>
            </figcaption>
          </figure>`).join("")}
      </div>
    </div>`;

  /* ---- 04 · Story ---- */
  const story = CONTENT.story;
  $("#story").innerHTML = `
    <div class="wrap">
      <h2 class="reveal">${esc(story.heading)}</h2>
      ${story.chapters.map((c) => `
        <div class="chapter reveal">
          <h3>${esc(c.title)}</h3>
          ${c.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
        </div>`).join("")}
    </div>`;

  /* ---- 05 · Life photo wall ---- */
  const life = CONTENT.life;
  $("#life").innerHTML = `
    <div class="wrap reveal">
      <h2>${esc(life.heading)}</h2>
      <div class="photo-wall">
        ${life.photos.map((p, i) => p.img
          ? `<div class="photo" style="--h:${220 + ((i * 53) % 140)}px"><img src="${esc(p.img)}" alt="${esc(p.label)}" loading="lazy"></div>`
          : `<div class="photo placeholder" style="--h:${220 + ((i * 53) % 140)}px"><span>${esc(p.label)}</span></div>`
        ).join("")}
      </div>
    </div>`;

  /* ---- CTA ---- */
  const cta = CONTENT.cta;
  $("#contact").innerHTML = `
    <h2>${esc(cta.heading)}</h2>
    <div><a class="cta-btn" href="${esc(cta.button.href)}">${esc(cta.button.label)}</a></div>
    <div class="cta-footnote">${esc(cta.footnote)}</div>`;

  /* ---- Footer ---- */
  $("#footer").innerHTML = `
    <span>${esc(CONTENT.footer.copyright)}</span>
    <span>${CONTENT.footer.links.map((l) =>
      `<a href="${esc(l.href)}"${ext(l.href)}>${esc(l.label)}</a>`).join("")}</span>`;

  /* ---- Nav: transparent over the hero, glass pill after crossing it.
          Scroll-spy: the section currently in view gets the white + green-dot
          state on its nav link. ---- */
  const pill = $(".nav-pill");
  const spyLinks = [...document.querySelectorAll(".nav-links-mid a.link")]
    .map((a) => ({ a, el: $(a.getAttribute("href")) }))
    .filter((x) => x.el);
  const onScroll = () => {
    /* glass pill as soon as scrolling starts */
    pill.classList.toggle("scrolled", window.scrollY > 10);
    const mark = window.scrollY + window.innerHeight * 0.4;
    let current = null;
    spyLinks.forEach((x) => { if (x.el.offsetTop <= mark) current = x; });
    spyLinks.forEach((x) => x.a.classList.toggle("active", x === current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Skills accordion + knob: one row open at a time, the knob's
          green dot rotates to point at the active row's number ---- */
  (function skillsKnob() {
    const rows = [...document.querySelectorAll(".skill-row")];
    const nums = [...document.querySelectorAll(".knob-num")];
    const face = $("#knob-face");
    if (!rows.length || !face) return;
    const set = (i) => {
      rows.forEach((r, j) => r.classList.toggle("open", i === j));
      nums.forEach((n) => n.classList.toggle("active", +n.dataset.n === i + 1));
      face.style.transform = `rotate(${i * 90}deg)`;
    };
    rows.forEach((r) => {
      r.addEventListener("click", () => set(+r.dataset.i));
      r.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); set(+r.dataset.i); }
      });
    });
    /* the knob is a control too: click a quadrant (or its number)
       to turn the dial and open the matching row */
    const wrap = $(".knob-wrap");
    wrap.addEventListener("click", (e) => {
      const rect = wrap.getBoundingClientRect();
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      const n = dy < 0 ? (dx < 0 ? 2 : 3) : (dx < 0 ? 1 : 4);
      set(n - 1);
    });
    set(0);
  })();

  /* ---- Hero cards: fly-in on load, fan out again on scroll ---- */
  (function heroCardMotion() {
    if (window.innerWidth <= 960 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = [...document.querySelectorAll(".float-card")];
    if (cards.length !== 3) return;
    const rest   = [-3, -12, 12];                       // resting rotations
    const spread = [                                    // offsets when fully spread
      { x: -420, y: 150, r: -14 },
      { x: 20,   y: -210, r: -12 },
      { x: 420,  y: 170, r: 16 },
    ];
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    let loadT = 0;                                      // 0 → 1 over the intro
    const heroBand = $(".hero-cards");
    const apply = () => {
      const scrollP = Math.min(1, Math.max(0,
        window.scrollY / (heroBand.offsetTop + heroBand.offsetHeight * 0.9)));
      const p = Math.min(1, (1 - ease(loadT)) + ease(scrollP));
      cards.forEach((card, i) => {
        const s = spread[i];
        card.style.transform =
          `translate(${s.x * p}px, ${s.y * p}px) rotate(${rest[i] + s.r * p}deg)`;
      });
    };
    const t0 = performance.now();
    const intro = (now) => {
      loadT = Math.min(1, (now - t0) / 1100);
      apply();
      if (loadT < 1) requestAnimationFrame(intro);
    };
    requestAnimationFrame(intro);
    window.addEventListener("scroll", apply, { passive: true });
  })();

  /* ---- Scroll-reveal animation ---- */
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
