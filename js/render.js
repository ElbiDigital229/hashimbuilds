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
      const conf = [
        { cls: "pill-green", style: "top:40px;left:104px;transform:rotate(-27deg)" },
        { cls: "pill-teal",  style: "top:124px;left:40px;transform:rotate(-6deg)" },
        { cls: "pill-blue",  style: "top:204px;left:88px;transform:rotate(-17deg)" },
      ][i % 3];
      return `<span class="pill ${conf.cls}" style="${conf.style}">${esc(word)}</span>`;
    }).join(""),
    /* c.images (optional): [bigPolaroidURL, smallPolaroidURL] */
    journey: (c) => `
      <svg class="squiggle" viewBox="0 0 340 320" fill="none" aria-hidden="true">
        <path d="M64 304 C 28 248, 96 236, 84 184 C 72 132, 16 144, 38 100 C 58 62, 122 78, 110 132 C 98 184, 162 194, 202 152 C 242 112, 198 58, 250 48 C 292 40, 306 92, 284 136"
          stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
      </svg>
      <div class="polaroid" style="top:52px;left:192px;transform:rotate(5deg)">${ph("photo-b", "width:96px;height:118px", c.images && c.images[0])}</div>
      <div class="polaroid" style="top:168px;left:34px;transform:rotate(-5deg)">${ph("photo-a", "width:72px;height:88px", c.images && c.images[1])}</div>
      <span class="map-dot" style="top:286px;left:92px"></span>
      <span class="map-dot" style="top:194px;left:260px"></span>`,
    /* c.image: polaroid photo · c.caption: handwritten label
       c.extra: image replacing the CSS player */
    photos: (c) => `
      <div class="polaroid" style="top:46px;left:30px;transform:rotate(-8deg)">
        ${ph("photo-c", "width:152px;height:152px", c.image)}<span class="caption">${esc(c.caption || "photos coming soon")}</span>
      </div>
      ${c.extra
        ? `<img class="ipod-img" src="${esc(c.extra)}" alt="" style="top:64px;left:196px;transform:rotate(12deg)">`
        : `<div class="ipod" style="top:78px;left:206px;transform:rotate(12deg)">
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
            <div class="fc-head">${esc(c.title)}</div>
            <div class="fc-body">${(CARD_BODIES[c.type] || (() => ""))(c)}</div>
          </a>`).join("")}
      </div>
    </div>`;

  /* ---- 01 · Stats + skills ---- */
  const about = CONTENT.about;
  $("#about").innerHTML = `
    <div class="wrap">
      <div class="reveal">
        <h2 class="h-display">${esc(about.heading)}</h2>
        <p class="intro">${esc(about.intro)}</p>
        <div class="stats">
          ${about.stats.map((s) => `
            <div class="stat"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>`).join("")}
        </div>
      </div>
      <div class="skills reveal">
        <h2>${esc(about.skillsHeading)}</h2>
        ${about.skills.map((s) => `
          <div class="skill-row"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>`).join("")}
      </div>
    </div>`;

  /* ---- 02 · Companies ---- */
  const work = CONTENT.work;
  const card = (p) => {
    const lock = p.locked ? `<span class="wc-lock">🔒 Coming soon</span>` : "";
    const inner = `
      <div class="wc-head"><span>${esc(p.name)}</span>${lock}</div>
      <div class="wc-body"><div class="wc-emoji">${p.emoji}</div>
        ${p.desc ? `<div class="wc-desc">${esc(p.desc)}</div>` : ""}</div>
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

  /* ---- Scroll-reveal animation ---- */
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
