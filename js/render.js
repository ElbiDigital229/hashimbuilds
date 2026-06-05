/* =========================================================================
   RENDERER — fills the page from CONTENT (js/content.js).
   You should not need to edit this file to change site content.
   ========================================================================= */

(function () {
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => {
    const d = document.createElement("div");
    d.textContent = s ?? "";
    return d.innerHTML;
  };
  const tags = (list) =>
    `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
  const btn = (l) =>
    `<a class="btn btn-${l.style}" href="${esc(l.href)}"${/^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`;

  /* ---- Meta ---- */
  document.title = CONTENT.meta.title;
  $('meta[name="description"]').setAttribute("content", CONTENT.meta.description);

  /* ---- Nav ---- */
  $("#logo").innerHTML = `${esc(CONTENT.brand.first)}<span>${esc(CONTENT.brand.accent)}</span>`;
  $("#nav-links").innerHTML = CONTENT.nav
    .map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`)
    .join("");

  /* ---- Hero ---- */
  $("#hero").innerHTML = `
    <span class="kicker">${esc(CONTENT.hero.badge)}</span>
    <h1>${esc(CONTENT.hero.heading)}</h1>
    <p class="hero-sub">${esc(CONTENT.hero.sub)}</p>
    <div class="hero-cta">${CONTENT.hero.ctas.map(btn).join("")}</div>`;

  /* ---- About ---- */
  $("#about").innerHTML = `
    <div class="section-label">${esc(CONTENT.about.label)}</div>
    <h2>${esc(CONTENT.about.title)}</h2>
    <div class="about-grid">
      <div class="about-text">
        ${CONTENT.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
      </div>
      <div class="stack-card">
        <h3>${esc(CONTENT.about.toolboxTitle)}</h3>
        ${tags(CONTENT.about.toolbox)}
      </div>
    </div>`;

  /* ---- Projects ---- */
  const card = (p) => {
    const inner = `
      <div class="project-icon">${p.icon}</div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.description)}</p>
      ${tags(p.tags)}`;
    return p.link
      ? `<a class="project" href="${esc(p.link)}" target="_blank" rel="noopener">${inner}</a>`
      : `<article class="project">${inner}</article>`;
  };
  $("#projects").innerHTML = `
    <div class="section-label">${esc(CONTENT.projects.label)}</div>
    <h2>${esc(CONTENT.projects.title)}</h2>
    <div class="projects-grid">${CONTENT.projects.items.map(card).join("")}</div>`;

  /* ---- Contact ---- */
  $("#contact").innerHTML = `
    <div class="contact-card">
      <div class="section-label">${esc(CONTENT.contact.label)}</div>
      <h2>${esc(CONTENT.contact.title)}</h2>
      <p>${esc(CONTENT.contact.text)}</p>
      <div class="contact-links">${CONTENT.contact.links.map(btn).join("")}</div>
    </div>`;

  /* ---- Footer ---- */
  $("#footer").innerHTML = `
    <span>${esc(CONTENT.footer.copyright)}</span>
    <a href="#">${esc(CONTENT.footer.note)}</a>`;

  /* ---- Scroll-reveal animation ---- */
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
