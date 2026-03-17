const routes = ["home", "research", "hacking", "press", "side-quests"];

const content = {
  research: [
    {
      id: "r1",
      title: "Research Project 1",
      subtitle: "A paper-like section header with a one-line abstract.",
      flow: [
        { img: "./assets/research/r1-1.jpg", cap: "Step 1 / Setup" },
        { img: "./assets/research/r1-2.jpg", cap: "Step 2 / Method" },
        { img: "./assets/research/r1-3.jpg", cap: "Step 3 / Result" },
      ],
      bodyHtml: `
        <h3>Overview</h3>
        <p>Replace with the project description. Keep it narrative, like a research paper section.</p>
        <h3>Links</h3>
        <ul>
          <li><a href="https://example.com" target="_blank" rel="noreferrer">Project page</a></li>
          <li><a href="https://example.com" target="_blank" rel="noreferrer">Paper / preprint</a></li>
        </ul>
      `,
    },
    { id: "r2", title: "Research Project 2", subtitle: "Subtitle/abstract line.", flow: [], bodyHtml: `<p>Describe project 2 here.</p>` },
    { id: "r3", title: "Research Project 3", subtitle: "Subtitle/abstract line.", flow: [], bodyHtml: `<p>Describe project 3 here.</p>` },
    { id: "r4", title: "Research Project 4", subtitle: "Subtitle/abstract line.", flow: [], bodyHtml: `<p>Describe project 4 here.</p>` },
  ],

  hacking: [
    {
      id: "h1",
      title: "Hacking Project 1",
      keywords: ["security", "tooling", "web"],
      summary: "One-line summary that fits on the post-it wall.",
      details:
        "Longer description shown in the pop-out. Include what you built, why it matters, and what you learned.",
      images: ["./assets/hacking/h1-1.jpg", "./assets/hacking/h1-2.jpg"],
      links: [
        { label: "GitHub", href: "https://example.com" },
        { label: "Demo", href: "https://example.com" },
      ],
    },
    { id: "h2", title: "Hacking Project 2", keywords: ["ml", "systems"], summary: "Short wall summary.", details: "Details here.", images: [], links: [] },
    { id: "h3", title: "Hacking Project 3", keywords: ["hardware", "rf"], summary: "Short wall summary.", details: "Details here.", images: [], links: [] },
    { id: "h4", title: "Hacking Project 4", keywords: ["reverse", "ctf"], summary: "Short wall summary.", details: "Details here.", images: [], links: [] },
    { id: "h5", title: "Hacking Project 5", keywords: ["privacy", "osint"], summary: "Short wall summary.", details: "Details here.", images: [], links: [] },
  ],

  press: [
    {
      id: "p1",
      title: "Press Feature",
      youtubeId: "dQw4w9WgXcQ",
      description: "Replace with a short description under the video (what it is, why it matters, your role).",
    },
  ],

  sideQuests: [
    {
      id: "s1",
      title: "Side-Quest 1",
      subtitle: "Short description (compact, teaser-like).",
      flow: [
        { img: "./assets/sidequests/s1-1.jpg", cap: "Snapshot" },
        { img: "./assets/sidequests/s1-2.jpg", cap: "Another snapshot" },
      ],
      more: {
        images: ["./assets/sidequests/s1-3.jpg", "./assets/sidequests/s1-4.jpg"],
        descriptionHtml: `<p>More detail goes here: what you do, how you do it, and what you enjoy about it.</p>`,
        reflection: "A short reflection: what this hobby teaches you, how it connects to your work, etc.",
      },
    },
    { id: "s2", title: "Side-Quest 2", subtitle: "Short description.", flow: [], more: { images: [], descriptionHtml: "<p>More details.</p>", reflection: "Reflection." } },
    { id: "s3", title: "Side-Quest 3", subtitle: "Short description.", flow: [], more: { images: [], descriptionHtml: "<p>More details.</p>", reflection: "Reflection." } },
    { id: "s4", title: "Side-Quest 4", subtitle: "Short description.", flow: [], more: { images: [], descriptionHtml: "<p>More details.</p>", reflection: "Reflection." } },
  ],
};

function getRouteFromHash() {
  const raw = (location.hash || "#/home").replace(/^#\//, "");
  if (!routes.includes(raw)) return "home";
  return raw;
}

function setActiveRoute(route) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.toggle("is-active", p.dataset.page === route);
  });
  document.querySelectorAll(".nav__link").forEach((a) => {
    a.classList.toggle("is-active", a.dataset.route === route);
  });
}

function renderResearch() {
  const root = document.getElementById("researchRoot");
  root.innerHTML = "";

  content.research.forEach((proj) => {
    const el = document.createElement("article");
    el.className = "paper";

    const flowHtml =
      proj.flow && proj.flow.length
        ? proj.flow
            .map(
              (n) => `
                <div class="flow__node">
                  <img src="${n.img}" alt="${escapeAttr(n.cap)}" />
                  <div class="flow__cap">${escapeHtml(n.cap)}</div>
                </div>
              `
            )
            .join("")
        : `<div class="flow__node"><div class="flow__cap">Add flow images in <code>assets/research/</code></div></div>`;

    el.innerHTML = `
      <header class="paper__header">
        <h2 class="paper__title">${escapeHtml(proj.title)}</h2>
        <p class="paper__subtitle">${escapeHtml(proj.subtitle || "")}</p>
      </header>
      <div class="paper__body">
        <div class="flow" aria-label="Project flowchart images">
          ${flowHtml}
        </div>
        <div class="rich">
          ${proj.bodyHtml || ""}
        </div>
      </div>
    `;

    root.appendChild(el);
  });
}

function renderHackingWall() {
  const wall = document.getElementById("hackingWall");
  wall.innerHTML = "";

  content.hacking.forEach((p, idx) => {
    const note = document.createElement("button");
    note.type = "button";
    note.className = "note";
    note.style.setProperty("--rot", `${randomRotation(idx)}deg`);
    note.setAttribute("aria-label", `Open details for ${p.title}`);

    note.innerHTML = `
      <div class="note__title">${escapeHtml(p.title)}</div>
      <div class="note__chips">
        ${p.keywords.map((k) => `<span class="chip">${escapeHtml(k)}</span>`).join("")}
      </div>
      <div style="margin-top:10px;color:rgba(0,0,0,.65);font-weight:650;line-height:1.4;">
        ${escapeHtml(p.summary || "")}
      </div>
    `;

    note.addEventListener("click", () => openProjectModal(p.id));
    wall.appendChild(note);
  });
}

function openProjectModal(projectId) {
  const p = content.hacking.find((x) => x.id === projectId);
  if (!p) return;

  const modal = document.getElementById("projectModal");
  document.getElementById("modalTitle").textContent = p.title;

  const chips = document.getElementById("modalChips");
  chips.innerHTML = p.keywords.map((k) => `<span class="chip">${escapeHtml(k)}</span>`).join("");

  const media = document.getElementById("modalMedia");
  media.innerHTML =
    p.images && p.images.length
      ? p.images.map((src) => `<img src="${src}" alt="${escapeAttr(p.title)} image" />`).join("")
      : `<div class="callout">Add images in <code>assets/hacking/</code> to showcase this project.</div>`;

  const desc = document.getElementById("modalDesc");
  desc.textContent = p.details || "";

  const links = document.getElementById("modalLinks");
  links.innerHTML =
    p.links && p.links.length
      ? p.links
          .map((l) => `<a href="${l.href}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>`)
          .join("")
      : "";

  if (typeof modal.showModal === "function") modal.showModal();
  else alert("Your browser doesn't support <dialog>. Use a modern browser.");
}

function renderPress() {
  const root = document.getElementById("pressRoot");
  root.innerHTML = "";

  content.press.forEach((v) => {
    const el = document.createElement("article");
    el.className = "press__item";
    el.innerHTML = `
      <iframe
        class="press__frame"
        src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtubeId)}"
        title="${escapeAttr(v.title)}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="press__meta">
        <h2 class="press__title">${escapeHtml(v.title)}</h2>
        <p class="press__desc">${escapeHtml(v.description)}</p>
      </div>
    `;
    root.appendChild(el);
  });
}

function renderSideQuests() {
  const root = document.getElementById("sideQuestsRoot");
  root.innerHTML = "";

  content.sideQuests.forEach((q) => {
    const el = document.createElement("article");
    el.className = "paper";

    const flowHtml =
      q.flow && q.flow.length
        ? q.flow
            .map(
              (n) => `
                <div class="flow__node">
                  <img src="${n.img}" alt="${escapeAttr(n.cap)}" />
                  <div class="flow__cap">${escapeHtml(n.cap)}</div>
                </div>
              `
            )
            .join("")
        : `<div class="flow__node"><div class="flow__cap">Add a couple images in <code>assets/sidequests/</code></div></div>`;

    el.innerHTML = `
      <header class="paper__header">
        <h2 class="paper__title">${escapeHtml(q.title)}</h2>
        <p class="paper__subtitle">${escapeHtml(q.subtitle || "")}</p>
      </header>

      <div class="paper__body side__grid">
        <div class="flow">
          ${flowHtml}
        </div>

        <div class="rich">
          <p>${escapeHtml(q.subtitle || "")}</p>
        </div>

        <div>
          <button class="arrow-btn" type="button" data-toggle="${escapeAttr(q.id)}">
            Expand <span class="arrow">→</span>
          </button>
        </div>
      </div>

      <div class="paper__body">
        <div class="expand" id="expand-${escapeAttr(q.id)}">
          <div class="expand__grid">
            <div class="modal__media">
              ${
                q.more?.images?.length
                  ? q.more.images.map((src) => `<img src="${src}" alt="${escapeAttr(q.title)} image" />`).join("")
                  : `<div class="callout">Add “expanded” images in <code>assets/sidequests/</code>.</div>`
              }
            </div>
            <div>
              <div class="rich">
                ${q.more?.descriptionHtml || "<p>Add expanded description here.</p>"}
              </div>
              <div class="callout" style="margin-top:12px;">
                <strong>Reflection:</strong> ${escapeHtml(q.more?.reflection || "")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    root.appendChild(el);
  });

  root.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-toggle");
      const panel = document.getElementById(`expand-${id}`);
      panel.classList.toggle("is-open");
      btn.innerHTML = panel.classList.contains("is-open")
        ? `Collapse <span class="arrow">→</span>`
        : `Expand <span class="arrow">→</span>`;
    });
  });
}

function initMouseTracking() {
  const stage = document.getElementById("mouseStage");
  if (!stage) return;

  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const blob1 = stage.querySelector(".blob--one");
  const blob2 = stage.querySelector(".blob--two");
  const ring = stage.querySelector(".cursor-ring");

  let target = { x: stage.clientWidth * 0.25, y: stage.clientHeight * 0.45 };
  let p1 = { x: target.x, y: target.y };
  let p2 = { x: target.x + 120, y: target.y + 40 };
  let pr = { x: target.x, y: target.y };

  function onMove(e) {
    const r = stage.getBoundingClientRect();
    target = { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  stage.addEventListener("pointermove", onMove);

  function tick() {
    // spring-ish easing
    p1.x += (target.x - p1.x) * 0.08;
    p1.y += (target.y - p1.y) * 0.08;

    p2.x += (target.x - p2.x) * 0.05;
    p2.y += (target.y - p2.y) * 0.05;

    pr.x += (target.x - pr.x) * 0.18;
    pr.y += (target.y - pr.y) * 0.18;

    blob1.style.transform = `translate(${p1.x}px, ${p1.y}px) translate(-50%, -50%)`;
    blob2.style.transform = `translate(${p2.x}px, ${p2.y}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${pr.x}px, ${pr.y}px) translate(-50%, -50%)`;

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function randomRotation(idx) {
  const base = [-2.2, 1.6, -1.1, 2.4, -0.6, 1.1, -1.8, 2.0];
  return base[idx % base.length];
}

function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(s) {
  return escapeHtml(s).replaceAll("`", "&#096;");
}

function renderAll() {
  renderResearch();
  renderHackingWall();
  renderPress();
  renderSideQuests();
}

function onRoute() {
  const route = getRouteFromHash();
  setActiveRoute(route);
}

function init() {
  document.getElementById("year").textContent = String(new Date().getFullYear());

  renderAll();
  initMouseTracking();

  window.addEventListener("hashchange", onRoute);
  if (!location.hash) location.hash = "#/home";
  onRoute();
}

init();
