/* =========================================================================
   RENDERER v3 — fills the page from CONTENT (js/content.js).
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
  const nav = CONTENT.nav;
  $("#nav").innerHTML = `
    <div class="nav-pill">
      <div class="nav-left">
        <a class="nav-brand" href="#">${esc(nav.brand.first)}<span>${esc(nav.brand.accent)}</span></a>
        <div class="nav-sep"></div>
        <div class="nav-left nav-links-mid">
          ${nav.links.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join("")}
        </div>
      </div>
      <div class="nav-right">
        <a href="${esc(nav.cta.href)}">${esc(nav.cta.label)}</a>
      </div>
    </div>`;

  /* ---- Hero ---- */
  const hero = CONTENT.hero;
  $("#hero").innerHTML = `
    <div class="wrap">
      <div class="hero-status"><span class="dot"></span>${esc(hero.status)}</div>
      <h1>${esc(hero.heading)}</h1>
      <p class="hero-sub">${esc(hero.sub)}</p>
      <div class="hero-cards">
        ${hero.cards.map((c) => `
          <a class="float-card" href="${esc(c.href)}" style="transform: rotate(${Number(c.rotate) || 0}deg)">
            <div class="fc-head">${esc(c.label)}</div>
            <div class="fc-body">${c.emoji}</div>
          </a>`).join("")}
      </div>
    </div>`;

  /* ---- About: stats + skills ---- */
  const about = CONTENT.about;
  $("#about").innerHTML = `
    <div class="wrap">
      <div class="reveal">
        <h2>${esc(about.heading)}</h2>
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

  /* ---- Work ---- */
  const work = CONTENT.work;
  const card = (p) => {
    const inner = `
      <div class="wc-head">${esc(p.name)}</div>
      <div class="wc-body"><div class="wc-emoji">${p.emoji}</div>
        <div class="wc-desc">${esc(p.desc)}</div></div>
      <div class="wc-industry">${esc(p.industry)}</div>`;
    return p.link
      ? `<a class="work-card" href="${esc(p.link)}"${ext(p.link)}>${inner}</a>`
      : `<article class="work-card">${inner}</article>`;
  };
  $("#work").innerHTML = `
    <div class="wrap reveal">
      <h2>${esc(work.heading)}</h2>
      <div class="work-grid">${work.items.map(card).join("")}</div>
    </div>`;

  /* ---- Story ---- */
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

  /* ---- Scroll-reveal animation ---- */
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
