/* ============ Helpers ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia("(prefers-reduced-motion: reduce)");
const DESK = matchMedia("(min-width: 900px)");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const money = n => CURRENCY + Number(n).toLocaleString("en-US");
const wa = text => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
const ext = 'target="_blank" rel="noopener noreferrer"';

function img(key, alt, { eager = false, cls = "", parallax = 0 } = {}) {
  const m = IMG[key];
  return `<img src="${m.src}" width="${m.w}" height="${m.h}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${cls ? ` class="${cls}"` : ""}${parallax ? ` data-parallax="${parallax}"` : ""}>`;
}

const I = {
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z"/></svg>',
  left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
  right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>',
  go: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>'
};
const STEAM_SVG = `<svg viewBox="0 0 120 104" aria-hidden="true"><g class="steam"><path d="M46 34c-7-8 7-12 0-24"/><path d="M60 34c-7-8 7-12 0-24"/><path d="M74 34c-7-8 7-12 0-24"/></g><circle cx="60" cy="52" r="5" fill="#A6CE39"/><path fill="#A6CE39" d="M20 94a40 40 0 0 1 80 0Z"/><rect x="12" y="94" width="96" height="6" rx="3" fill="#A6CE39"/></svg>`;

/* ============ Shared sections ============ */
function heroBlock({ img: key, alt, title, lede, buttons = "", home = false, pos }) {
  const lines = title.map((t, i) => `<span class="line"><span style="transition-delay:${120 + i * 110}ms">${t}</span></span>`).join("");
  return `<section class="hero${home ? "" : " page-hero"}" aria-labelledby="h-title">
    <div class="hero-media">${img(key, alt, { eager: true }).replace("<img", `<img${pos ? ` style="object-position:${pos}"` : ""}`)}</div>
    <div class="wrap hero-in">
      <div class="hero-foot">
        <div>
          <h1 id="h-title" class="display">${lines}</h1>
          ${lede ? `<p class="lede">${lede}</p>` : ""}
          ${buttons ? `<div class="btn-row">${buttons}</div>` : ""}
        </div>
        ${home ? `<a class="scroll-cue" href="#/home/paths"><i></i>Scroll to explore</a>` : ""}
      </div>
    </div>
  </section>`;
}

function tickerBlock() {
  const ul = `<ul>${TICKER.map(t => `<li>${t}</li>`).join("")}</ul>`;
  return `<div class="ticker" aria-label="A taste of the menu"><div class="ticker-track">${ul}<ul aria-hidden="true">${TICKER.map(t => `<li>${t}</li>`).join("")}</ul></div></div>`;
}

function pathsBlock() {
  return `<section class="sec light" id="paths" aria-labelledby="paths-h">
    <div class="wrap">
      <div class="sec-head split">
        <h2 id="paths-h" class="h2 rv">Two kitchens.<br>One obsession with good food.</h2>
        <p class="lede muted rv" style="--d:1">Since 2013 we have cooked for Harare's tables, and since 2019 we have taught people to cook for theirs. Pick the side of the pass you want to stand on.</p>
      </div>
      <div class="paths rv" style="--d:2">
        <a class="path" href="#/academy">
          ${img("r-students", "Students in green academy aprons cooking together")}
          <span class="tag">Academy</span>
          <div class="path-body">
            <span class="h2" style="display:block">Learn the craft</span>
            <p>Professional qualifications, patisserie, short courses and one-day masterclasses in a hands-on teaching kitchen.</p>
            <span class="path-go"><b>${I.go}</b>Explore the academy</span>
          </div>
        </a>
        <a class="path" href="#/catering">
          ${img("r-garden-event", "Guests enjoying an outdoor garden event")}
          <span class="tag">Catering</span>
          <div class="path-body">
            <span class="h2" style="display:block">Experience the flavour</span>
            <p>Event catering, private dining, spit roasts, snack platters and corporate lunch packs.</p>
            <span class="path-go"><b>${I.go}</b>Explore catering & menus</span>
          </div>
        </a>
      </div>
    </div>
  </section>`;
}

function academyTeaser() {
  const tiles = [
    { k: "chef-training", alt: "Culinary students in whites preparing vegetables together", t: "Professional chef training", p: "Certificate and diploma routes, including City & Guilds and HEXCO qualifications, for people building a career in the kitchen.", type: "training" },
    { k: "patisserie", alt: "A pastry student piping cream onto fruit tartlets beside chocolate eclairs", t: "Patisserie", p: "Laminated doughs, tarts, eclairs and plated desserts, taught with the precision pastry demands.", type: "patisserie", arch: true },
    { k: "masterclass", alt: "Adults rolling fresh pasta at a hobby cooking class", t: "Hobby courses & masterclasses", p: "Short courses for keen home cooks and one-day masterclasses for birthdays, bridal parties, kids and more.", type: "masterclass" }
  ];
  return `<section class="sec dark" aria-labelledby="ac-h">
    <div class="wrap">
      <div class="sec-head split">
        <div><p class="kicker rv">The academy</p><h2 id="ac-h" class="h2 rv" style="--d:1">Learn to cook like you mean it.</h2></div>
        <p class="lede muted rv" style="--d:2">Small groups, real equipment and lecturers who cook for a living. Whether you want a qualification or a brilliant Saturday, you leave with skills that stay.</p>
      </div>
      <div class="prog-grid" data-stagger>
        ${tiles.map(t => `<article class="prog rv">
          <div class="frame zoom${t.arch ? " arch" : ""}">${img(t.k, t.alt)}</div>
          <h3 class="h3">${t.t}</h3>
          <p>${t.p}</p>
          <a class="tlink" href="#/contact?type=${t.type}">Enquire about ${t.t.toLowerCase()}</a>
        </article>`).join("")}
      </div>
      <div class="btn-row rv" style="justify-content:center;margin-top:4rem"><a class="btn" href="#/academy">Explore our courses</a></div>
    </div>
  </section>`;
}

function stepsBlock(theme = "light") {
  const steps = [
    ["Choose a package", "Classic, Deluxe, Premium or Executive, depending on your guest count and occasion."],
    ["Select your dishes", "Fill your slots from our starch, protein, harvest, vegan and dessert menus."],
    ["We handle the rest", "From prep to plating, our team delivers a seamless experience from kitchen to table."]
  ];
  return `<div class="steps" data-stagger>${steps.map(s => `<div class="step rv"><h3 class="h4">${s[0]}</h3><p class="${theme === "dark" ? "muted" : "muted"}" style="margin:.5rem 0 0">${s[1]}</p></div>`).join("")}</div>`;
}

function occasionsBlock() {
  const o = [["Corporate events", "Board lunches, team days, product launches and client entertaining."], ["Private dining", "Intimate dinner parties, milestone celebrations and home dining."], ["Social events", "Birthdays, garden parties and casual gatherings."]];
  return `<div class="rows" data-stagger>${o.map(r => `<div class="row-tab rv"><b>${r[0]}</b><span>${r[1]}</span></div>`).join("")}</div>`;
}

function cateringTeaser() {
  return `<section class="sec light" aria-labelledby="ca-h">
    <div class="wrap grid-2 wide-left" style="align-items:center">
      <div class="collage rv">
        <div class="frame a" style="aspect-ratio:4/3">${img("private-dining", "A candlelit outdoor dinner table with roast chicken and sharing dishes at sunset", { parallax: .08 })}</div>
        <div class="frame b" style="aspect-ratio:3/4">${img("r-plated-chicken", "A plated chicken roulade on rice at a dressed table")}</div>
      </div>
      <div>
        <p class="kicker rv">Catering & private dining</p>
        <h2 id="ca-h" class="h2 rv" style="--d:1">Food that becomes the story of your event.</h2>
        <p class="lede muted rv" style="--d:2">Every occasion is different, so every menu is built your way. Choose a package, pick your dishes, and our team takes it from kitchen to table.</p>
        <div class="rv" style="--d:3;margin-top:2rem">${occasionsBlock()}</div>
        <div class="btn-row rv" style="--d:4"><a class="btn btn-dark" href="#/home/menu">Build your menu</a><a class="btn btn-ghost" href="#/contact?type=catering">Plan your event</a></div>
      </div>
    </div>
  </section>`;
}

function spitBanner() {
  return `<section class="sec dark" style="padding-block:0" aria-labelledby="sp-h">
    <div style="position:relative;min-height:min(86vh,720px);display:flex;align-items:flex-end;overflow:hidden">
      <div style="position:absolute;inset:0">${img("spit-roast", "A pit master tending a whole lamb roasting on a spit over glowing coals", { parallax: .1 }).replace("<img", '<img style="width:100%;height:115%;object-fit:cover;object-position:60% 50%;margin-top:-5%"')}</div>
      <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(18,18,17,.92),rgba(18,18,17,.1) 65%)"></div>
      <div class="wrap" style="position:relative;padding-block:clamp(3rem,7vw,5.5rem);width:100%">
        <p class="kicker rv">Spit services</p>
        <h2 id="sp-h" class="h2 rv" style="--d:1;max-width:12em">Whole lamb or pork, slow-turned over live coals.</h2>
        <p class="lede rv" style="--d:2;color:#E2DED3">The centrepiece your event deserves, with a dedicated pit master, the full rig and carving at the spit.</p>
        <div class="btn-row rv" style="--d:3"><a class="btn" href="#/catering/spit">See what's included</a><a class="btn btn-ghost" href="#/contact?type=spit">Request spit pricing</a></div>
      </div>
    </div>
  </section>`;
}

/* ---------- Menu builder ---------- */
const B = { pkg: null, picks: {}, guests: MIN_GUESTS, tab: "proteins" };
function resetPicks() { B.picks = {}; SLOT_ORDER.forEach(s => (B.picks[s] = [])); }
resetPicks();

function menuBlock(id = "menu") {
  return `<section class="sec menu-sec" id="${id}" aria-labelledby="mn-h">
    <div class="menu-bg">${img("ingredients", "")}</div>
    <div class="wrap" style="position:relative">
      <div class="sec-head split">
        <div><p class="kicker rv">Packages & menus</p><h2 id="mn-h" class="h2 rv" style="--d:1">Build your perfect menu.</h2></div>
        <p class="lede muted rv" style="--d:2">Pick a package, then fill your plate from the menu below. When it looks right, send it to us on WhatsApp for a custom quote. All packages are customisable, with a minimum of ${MIN_GUESTS} guests.</p>
      </div>
      <div class="pkgs" role="group" aria-label="Catering packages" data-stagger>
        ${PACKAGES.map(p => `<button type="button" class="pkg rv" data-pkg="${p.id}" aria-pressed="${B.pkg === p.id}">
          ${p.popular ? '<span class="flag">Most popular</span>' : ""}
          <span class="sel">${I.check}</span>
          <span class="pname">${p.name}</span>
          <span class="price">${money(p.price)}<small> per person</small></span>
          <span class="for">${p.for}</span>
          <ul>${p.incl.map(i => `<li>${i}</li>`).join("")}</ul>
        </button>`).join("")}
      </div>
      <div class="builder">
        <div>
          <div class="tabs" role="tablist" aria-label="Menu categories"><span class="tab-ink" aria-hidden="true"></span>
            ${MENU.map(m => `<button type="button" role="tab" class="tab" id="tab-${m.id}" aria-controls="panel" aria-selected="${B.tab === m.id}" tabindex="${B.tab === m.id ? 0 : -1}" data-tab="${m.id}">${m.label}</button>`).join("")}
          </div>
          <div class="panel" id="panel" role="tabpanel" tabindex="0" aria-labelledby="tab-${B.tab}"></div>
          <div class="plate-mini" hidden><span data-mini></span><button type="button" class="btn" data-view-plate>View plate</button></div>
        </div>
        <aside class="plate-card" aria-label="Your menu" aria-live="polite"></aside>
      </div>
    </div>
  </section>`;
}

function renderPanel(root) {
  const m = MENU.find(x => x.id === B.tab);
  const pkg = PACKAGES.find(p => p.id === B.pkg);
  let i = 0;
  const groups = m.groups.map(g => {
    const items = g.items.map(it => {
      const name = Array.isArray(it) ? it[0] : it;
      const price = Array.isArray(it) ? `<span class="pr">${money(it[1])}${m.unit || ""}</span>` : "";
      let action = "";
      if (g.slot && pkg) {
        const cap = pkg.slots[g.slot] || 0;
        const chosen = B.picks[g.slot].includes(name);
        const full = B.picks[g.slot].length >= cap;
        action = !cap ? `<span class="small" style="color:var(--on-dark-muted)">Not in ${pkg.name}</span>` : `<button type="button" class="add" data-slot="${g.slot}" data-name="${esc(name)}" aria-pressed="${chosen}" ${!chosen && full ? "disabled" : ""} aria-label="${chosen ? "Remove" : "Add"} ${esc(name)}">${chosen ? "Added" : full ? "Slots full" : "Add"}</button>`
      }
      return `<li class="item" style="--i:${i++}"><span class="nm">${esc(name)}</span>${price || action}</li>`;
    }).join("");
    return `<div class="group"><h4>${g.name}${g.sizes ? ` <span class="small muted" style="font-weight:500">${g.sizes}</span>` : ""}${g.hint && pkg ? ` <span class="small muted" style="font-weight:500">${g.hint}</span>` : ""}</h4><ul class="items">${items}</ul></div>`;
  }).join("");
  const builderNote = m.groups.some(g => g.slot)
    ? (pkg ? "" : `<p class="note">Choose a package above to start adding dishes to your plate.</p>`)
    : `<div class="btn-row" style="margin-top:1.5rem"><a class="btn" href="${wa(m.id === "snacks" ? "Hello Fine Dining Chefs Academy, I'd like to order snack platters (priced per dozen). Items and quantities:\n" : "Hello Fine Dining Chefs Academy, I'd like to arrange a drinks service for an event.\n")}" ${ext}>${I.wa}${m.id === "snacks" ? "Order snack platters on WhatsApp" : "Ask about drinks service"}</a></div>`;
  root.innerHTML = `<div class="panel-head"><div class="panel-img">${img(m.img, m.alt)}</div><p class="muted">${m.intro}</p></div>
    <div class="groups">${groups}</div>${builderNote}`;
}

function plateSVG(pkg) {
  const total = pkg ? SLOT_ORDER.reduce((a, s) => a + (pkg.slots[s] || 0), 0) : 6;
  let segs = "", k = 0;
  const gap = 4, R = 56, r = 40;
  const pt = (a, rad) => [60 + rad * Math.cos(a), 60 + rad * Math.sin(a)];
  SLOT_ORDER.forEach(s => {
    const n = pkg ? (pkg.slots[s] || 0) : (s === "dessert" ? 0 : (s === "starch" || s === "protein" ? 2 : 1));
    for (let j = 0; j < n; j++) {
      const a0 = (k / total) * 2 * Math.PI - Math.PI / 2 + gap / R / 2, a1 = ((k + 1) / total) * 2 * Math.PI - Math.PI / 2 - gap / R / 2;
      const large = a1 - a0 > Math.PI ? 1 : 0;
      const [x0, y0] = pt(a0, R), [x1, y1] = pt(a1, R), [x2, y2] = pt(a1, r), [x3, y3] = pt(a0, r);
      const on = pkg && B.picks[s][j];
      segs += `<path class="seg${on ? " on" : ""}" data-seg="${s}-${j}" fill="#E7E2D4" d="M${x0.toFixed(2)} ${y0.toFixed(2)}A${R} ${R} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}L${x2.toFixed(2)} ${y2.toFixed(2)}A${r} ${r} 0 ${large} 0 ${x3.toFixed(2)} ${y3.toFixed(2)}Z"/>`;
      k++;
    }
  });
  return `<svg class="plate-svg" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="59" fill="#fff" stroke="#E3DED1"/>${segs}<circle cx="60" cy="60" r="34" fill="#F6F3EC"/><path d="M48 66a12 12 0 0 1 24 0Z" fill="#A6CE39"/><circle cx="60" cy="52" r="2.2" fill="#A6CE39"/><rect x="45" y="66" width="30" height="2.4" rx="1.2" fill="#A6CE39"/></svg>`;
}

function filledCount(pkg) { return SLOT_ORDER.reduce((a, s) => a + Math.min(B.picks[s].length, pkg.slots[s] || 0), 0); }
function slotCount(pkg) { return SLOT_ORDER.reduce((a, s) => a + (pkg.slots[s] || 0), 0); }

function renderPlate(root, opts = {}) {
  const pkg = PACKAGES.find(p => p.id === B.pkg);
  if (!pkg) {
    root.innerHTML = `<div class="plate-top">${plateSVG(null)}<div><h3>Your plate</h3><p class="plate-empty" style="margin:.3rem 0 0">Empty for now. Choose a package to begin.</p></div></div>
      <p class="plate-empty">Prefer to talk it through? We build custom menus all the time.</p>
      <a class="btn btn-wa" href="${wa("Hello Fine Dining Chefs Academy, I'd like help planning a catering menu.")}" ${ext}>${I.wa}Chat on WhatsApp</a>`;
    updateMini(root, null);
    return;
  }
  const done = filledCount(pkg), all = slotCount(pkg);
  let list = "";
  if (pkg.starter) list += `<li class="slot filled"><span><small>Starter course</small>Agreed with our chef</span></li>`;
  SLOT_ORDER.forEach(s => {
    for (let j = 0; j < (pkg.slots[s] || 0); j++) {
      const v = B.picks[s][j];
      list += v
        ? `<li class="slot filled"><span><small>${SLOT_LABEL[s]}</small>${esc(v)}</span><button type="button" data-remove="${s}" data-name="${esc(v)}" aria-label="Remove ${esc(v)}">${I.x}</button></li>`
        : `<li class="slot"><span>Choose a ${SLOT_LABEL[s].toLowerCase()}</span></li>`;
    }
  });
  const total = pkg.price * B.guests;
  root.innerHTML = `<div class="plate-top">${plateSVG(pkg)}<div><h3>${pkg.name}</h3><p class="small" style="margin:.2rem 0 0;color:#55544e">${money(pkg.price)} per person<br><b>${done} of ${all}</b> dishes chosen</p></div></div>
    <ul class="slots">${list}</ul>
    <div class="guests"><label for="g-in" class="h4" style="font-size:.95rem">Guests</label>
      <div class="stepper"><button type="button" data-g="-1" aria-label="Fewer guests" ${B.guests <= MIN_GUESTS ? "disabled" : ""}>−</button><input id="g-in" type="number" inputmode="numeric" min="${MIN_GUESTS}" max="2000" value="${B.guests}"><button type="button" data-g="1" aria-label="More guests">+</button></div></div>
    <div class="total"><span class="small" style="color:#55544e">Estimated total</span><strong data-total="${total}">${money(opts.from ?? total)}</strong></div>
    <p class="small" style="color:#66655e;margin:.4rem 0 0">Before extras like soup, drinks or spit services. Final quote confirmed by our team.</p>
    <a class="btn btn-wa" data-send href="#">${I.wa}Send this menu on WhatsApp</a>
    <button type="button" class="btn btn-ghost" data-reset style="color:#2B2B29;margin-top:.6rem">Start again</button>`;
  if (opts.from !== undefined && opts.from !== total) tween($("[data-total]", root), opts.from, total);
  updateMini(root, pkg, done, all, total);
}
function updateMini(plate, pkg, done, all, total) {
  const mini = plate.closest(".builder") && $(".plate-mini", plate.closest(".builder"));
  if (!mini) return;
  mini.hidden = !pkg;
  if (pkg) $("[data-mini]", mini).innerHTML = `<b>${pkg.name}</b> ${done} of ${all} chosen<br><span>${money(total)} for ${B.guests} guests</span>`;
}

function tween(el, from, to) {
  if (RM.matches) { el.textContent = money(to); return; }
  const t0 = performance.now(), d = 500;
  const f = t => { const p = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - p, 3); el.textContent = money(Math.round(from + (to - from) * e)); if (p < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f);
}

function builderMessage() {
  const pkg = PACKAGES.find(p => p.id === B.pkg);
  const lines = [`Hello Fine Dining Chefs Academy, I'd like a catering quote.`, ``, `Package: ${pkg.name} (${money(pkg.price)} per person)`, `Guests: ${B.guests}`];
  if (pkg.starter) lines.push(`Starter course: to agree with the chef`);
  SLOT_ORDER.forEach(s => { if (pkg.slots[s]) lines.push(`${pkg.slots[s] > 1 ? SLOT_PLURAL[s] : SLOT_LABEL[s]}: ${B.picks[s].length ? B.picks[s].join(", ") : "to be chosen"}`); });
  lines.push(``, `Estimated total: ${money(pkg.price * B.guests)}`, `Event date:`, `Venue:`);
  return lines.join("\n");
}

function leafBurst(origin) {
  if (RM.matches || !origin) return;
  const r = origin.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  for (let n = 0; n < 22; n++) {
    const l = document.createElement("span"); l.className = "leaf";
    l.style.left = cx + "px"; l.style.top = cy + "px";
    if (n % 3 === 0) l.style.background = "#4A7311";
    document.body.appendChild(l);
    const a = Math.random() * Math.PI * 2, d = 70 + Math.random() * 130;
    l.animate([{ transform: "translate(-50%,-50%) rotate(0) scale(.4)", opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d + 60}px) rotate(${Math.random() * 540 - 270}deg) scale(1)`, opacity: 0 }], { duration: 1100 + Math.random() * 600, easing: "cubic-bezier(.2,.7,.2,1)" }).onfinish = () => l.remove();
  }
}

function initBuilder(sec) {
  if (!sec) return;
  const panel = $("#panel", sec), plate = $(".plate-card", sec), tabs = $$(".tab", sec), ink = $(".tab-ink", sec);
  const moveInk = () => { const t = $(`.tab[aria-selected="true"]`, sec); if (!t) return; ink.style.width = t.offsetWidth + "px"; ink.style.transform = `translateX(${t.offsetLeft}px)`; };
  const selectTab = (id, focus) => {
    B.tab = id; panel.classList.remove("static");
    tabs.forEach(t => { const on = t.dataset.tab === id; t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); if (on) t.scrollIntoView({ block: "nearest", inline: "nearest" }); });
    panel.setAttribute("aria-labelledby", "tab-" + id);
    renderPanel(panel); moveInk();
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => selectTab(t.dataset.tab));
    t.addEventListener("keydown", e => {
      const k = e.key; let n = null;
      if (k === "ArrowRight") n = (i + 1) % tabs.length; if (k === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
      if (k === "Home") n = 0; if (k === "End") n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); selectTab(tabs[n].dataset.tab, true); }
    });
  });
  window._ink = moveInk;
  requestAnimationFrame(moveInk); setTimeout(moveInk, 400);
  document.fonts && document.fonts.ready.then(moveInk);

  $$(".pkg", sec).forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.pkg;
    const prev = PACKAGES.find(p => p.id === B.pkg);
    B.pkg = B.pkg === id ? null : id;
    const pkg = PACKAGES.find(p => p.id === B.pkg);
    if (pkg) SLOT_ORDER.forEach(s => (B.picks[s] = B.picks[s].slice(0, pkg.slots[s] || 0)));
    $$(".pkg", sec).forEach(x => x.setAttribute("aria-pressed", x.dataset.pkg === B.pkg));
    panel.classList.remove("static"); renderPlate(plate, { from: prev ? prev.price * B.guests : 0 }); renderPanel(panel);
    if (pkg && !DESK.matches) { /* keep context on mobile */ }
  }));

  panel.addEventListener("click", e => {
    const b = e.target.closest(".add"); if (!b || b.disabled) return;
    const s = b.dataset.slot, n = b.dataset.name, arr = B.picks[s];
    const pkg = PACKAGES.find(p => p.id === B.pkg);
    const wasComplete = filledCount(pkg) === slotCount(pkg);
    const idx = arr.indexOf(n);
    if (idx > -1) arr.splice(idx, 1); else if (arr.length < (pkg.slots[s] || 0)) arr.push(n);
    const keep = b.dataset.name;
    renderPanel(panel);
    panel.classList.add("static");
    const again = $(`.add[data-name="${CSS.escape(keep)}"]`, panel); again && again.focus();
    renderPlate(plate);
    const seg = $(`[data-seg="${s}-${Math.max(0, arr.indexOf(n))}"]`, plate); if (idx === -1 && seg) seg.classList.add("pop");
    if (!wasComplete && filledCount(pkg) === slotCount(pkg)) leafBurst($(".plate-svg", plate));
  });

  plate.addEventListener("click", e => {
    const rm = e.target.closest("[data-remove]");
    if (rm) { const a = B.picks[rm.dataset.remove]; a.splice(a.indexOf(rm.dataset.name), 1); renderPlate(plate); renderPanel(panel); panel.classList.add("static"); return; }
    const g = e.target.closest("[data-g]");
    if (g) { const pkg = PACKAGES.find(p => p.id === B.pkg); const from = pkg.price * B.guests; B.guests = Math.max(MIN_GUESTS, B.guests + +g.dataset.g); renderPlate(plate, { from }); const inp = $("#g-in", plate); inp.classList.add("bump"); $(`[data-g="${g.dataset.g}"]`, plate).focus(); return; }
    if (e.target.closest("[data-reset]")) { resetPicks(); B.pkg = null; B.guests = MIN_GUESTS; $$(".pkg", sec).forEach(x => x.setAttribute("aria-pressed", "false")); renderPlate(plate); renderPanel(panel); return; }
    const send = e.target.closest("[data-send]");
    if (send) { e.preventDefault(); window.open(wa(builderMessage()), "_blank", "noopener"); }
  });
  const vp = $("[data-view-plate]", sec);
  vp && vp.addEventListener("click", () => { plate.scrollIntoView({ behavior: RM.matches ? "auto" : "smooth", block: "start" }); setTimeout(() => ($("[data-send]", plate) || plate).focus({ preventScroll: true }), 600); });
  plate.addEventListener("change", e => {
    if (e.target.id !== "g-in") return;
    const pkg = PACKAGES.find(p => p.id === B.pkg); const from = pkg.price * B.guests;
    let v = parseInt(e.target.value, 10); if (isNaN(v) || v < MIN_GUESTS) v = MIN_GUESTS; if (v > 2000) v = 2000;
    B.guests = v; renderPlate(plate, { from });
  });
  renderPanel(panel); renderPlate(plate);
}

/* ---------- Lunch packs ---------- */
const L = {};
function lunchBlock() {
  const row = (id, name, sub, price) => `<li class="lunch-item${L[id] ? " has" : ""}" data-row="${id}"><div><div class="nm">${name}</div><div class="sub">${sub ? sub + ", " : ""}${money(price)}</div></div>
    <div class="stepper"><button type="button" data-l="${id}" data-d="-1" aria-label="Remove one ${esc(name)}" ${L[id] ? "" : "disabled"}>−</button><output aria-live="polite" aria-label="${esc(name)} quantity">${L[id] || 0}</output><button type="button" data-l="${id}" data-d="1" aria-label="Add one ${esc(name)}">+</button></div></li>`;
  return `<section class="sec linen" id="lunch" aria-labelledby="lu-h">
    <div class="wrap grid-2" style="align-items:start">
      <div>
        <p class="kicker rv">Corporate lunch packs</p>
        <h2 id="lu-h" class="h2 rv" style="--d:1">Lunch, sorted. ${money(LUNCH.packPrice)} a pack.</h2>
        <p class="lede muted rv" style="--d:2">Meetings, training days and team events, fed properly. Build your order here, then place it on WhatsApp.</p>
        <div class="collage rv" style="--d:3;margin-top:2.5rem">
          <div class="frame a" style="aspect-ratio:4/3">${img("lunch-packs", "Lunch boxes with roast chicken and rice, and sadza with beef stew and greens")}</div>
          <div class="frame b" style="aspect-ratio:3/4">${img("r-parfait", "Yogurt parfait jars labelled Fine Dining Chefs Academy")}</div>
        </div>
      </div>
      <div class="rv" style="--d:2">
        <h3 class="h4" style="margin-bottom:1rem">Lunch packs</h3>
        <ul class="lunch-list">${LUNCH.packs.map(p => row(p.id, p.name, p.sub, LUNCH.packPrice)).join("")}</ul>
        <h3 class="h4" style="margin:2rem 0 1rem">Extras</h3>
        <ul class="lunch-list">${LUNCH.extras.map(x => row(x.id, x.name, "", x.price)).join("")}</ul>
        <p class="small muted" style="margin-top:1rem">Hot drinks, cold drinks and mocktails are also available. See Beverages in the menu.</p>
        <div class="order-bar"><div><span class="small" style="color:var(--on-dark-muted)">Order total</span><br><strong data-ltotal>${money(lunchTotal())}</strong></div>
          <a class="btn btn-wa" data-lsend href="#">${I.wa}Place order via WhatsApp</a></div>
      </div>
    </div>
  </section>`;
}
function lunchTotal() { let t = 0; LUNCH.packs.forEach(p => t += (L[p.id] || 0) * LUNCH.packPrice); LUNCH.extras.forEach(x => t += (L[x.id] || 0) * x.price); return t; }
function lunchMessage() {
  const lines = ["Hello Fine Dining Chefs Academy, I'd like to order:"];
  LUNCH.packs.forEach(p => L[p.id] && lines.push(`${L[p.id]} × ${p.name} lunch pack`));
  LUNCH.extras.forEach(x => L[x.id] && lines.push(`${L[x.id]} × ${x.name}`));
  if (lines.length === 1) lines.push("(I'd like to see what's available today)");
  else lines.push("", `Estimated total: ${money(lunchTotal())}`);
  lines.push("", "Collection or delivery details:");
  return lines.join("\n");
}
function initLunch(sec) {
  if (!sec) return;
  sec.addEventListener("click", e => {
    const b = e.target.closest("[data-l]");
    if (b) {
      const id = b.dataset.l, before = lunchTotal();
      L[id] = Math.max(0, Math.min(99, (L[id] || 0) + +b.dataset.d));
      const row = $(`[data-row="${id}"]`, sec), out = $("output", row);
      out.textContent = L[id]; out.classList.remove("bump"); void out.offsetWidth; out.classList.add("bump");
      row.classList.toggle("has", !!L[id]); $(`[data-d="-1"]`, row).disabled = !L[id];
      tween($("[data-ltotal]", sec), before, lunchTotal());
      return;
    }
    if (e.target.closest("[data-lsend]")) { e.preventDefault(); window.open(wa(lunchMessage()), "_blank", "noopener"); }
  });
}

function teamBlock() {
  return `<section class="sec light" id="team" aria-labelledby="tb-h">
    <div class="wrap grid-2 wide-right" style="align-items:center">
      <div>
        <p class="kicker rv">Corporate team building</p>
        <h2 id="tb-h" class="h2 rv" style="--d:1">The best meetings end with dessert.</h2>
        <p class="lede muted rv" style="--d:2">Your team in a professional kitchen, cooking from scratch and celebrating what they made together. It sparks creativity, communication and the kind of camaraderie a slide deck never will.</p>
        <div class="btn-row rv" style="--d:3"><a class="btn btn-dark" href="#/contact?type=team">Plan a team day</a></div>
      </div>
      <div class="collage rv" style="--d:1">
        <div class="frame a" style="aspect-ratio:4/3">${img("r-teambuild", "Colleagues in chef hats rolling fresh pasta together in the academy kitchen")}</div>
        <div class="frame b" style="aspect-ratio:3/4">${img("team-building", "Colleagues laughing while tossing a salad together")}</div>
      </div>
    </div>
  </section>`;
}

function galleryBlock(title = "From our kitchens and tables.") {
  return `<section class="sec dark" aria-labelledby="ga-h" style="overflow:hidden;overflow:clip">
    <div class="wrap" style="display:flex;justify-content:space-between;align-items:end;gap:2rem;flex-wrap:wrap;margin-bottom:3rem">
      <div><p class="kicker rv">Gallery</p><h2 id="ga-h" class="h2 rv" style="--d:1;max-width:11em">${title}</h2></div>
      <div class="g-ctrl rv" style="--d:2"><button type="button" data-g-prev aria-label="Previous photos">${I.left}</button><button type="button" data-g-next aria-label="Next photos">${I.right}</button></div>
    </div>
    <div class="gallery rv" style="--d:2" tabindex="0" aria-label="Photo gallery, scroll horizontally">
      ${GALLERY.map(g => `<figure class="g-item"><div class="frame zoom">${img(g.img, g.alt)}</div><figcaption class="cap">${g.cap}</figcaption></figure>`).join("")}
      <div style="flex:none;width:1px"></div>
    </div>
  </section>`;
}
function initGallery(sec) {
  const g = sec && $(".gallery", sec); if (!g) return;
  const prev = $("[data-g-prev]", sec), next = $("[data-g-next]", sec);
  const step = () => Math.max(260, g.clientWidth * .7);
  const upd = () => { prev.disabled = g.scrollLeft < 8; next.disabled = g.scrollLeft + g.clientWidth >= g.scrollWidth - 8; };
  prev.onclick = () => g.scrollBy({ left: -step(), behavior: RM.matches ? "auto" : "smooth" });
  next.onclick = () => g.scrollBy({ left: step(), behavior: RM.matches ? "auto" : "smooth" });
  g.addEventListener("scroll", upd, { passive: true }); upd();
  g.addEventListener("keydown", e => { if (e.key === "ArrowRight") { e.preventDefault(); next.click(); } if (e.key === "ArrowLeft") { e.preventDefault(); prev.click(); } });
  let down = false, sx = 0, sl = 0, moved = false;
  g.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = g.scrollLeft; });
  addEventListener("pointermove", e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) { moved = true; g.classList.add("dragging"); } g.scrollLeft = sl - dx; });
  addEventListener("pointerup", () => { if (!down) return; down = false; g.classList.remove("dragging"); });
  g.addEventListener("click", e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
}

function aboutTeaser() {
  return `<section class="sec light" aria-labelledby="ab-h">
    <div class="wrap">
      <div class="sec-head split">
        <div><p class="kicker rv">Our story</p><h2 id="ab-h" class="h2 rv" style="--d:1">A home-grown passion that kept growing.</h2></div>
        <p class="lede muted rv" style="--d:2">It started with catering for events. Then people kept asking how we did it, so we built a school to show them.</p>
      </div>
      <div class="years" data-stagger>
        <div class="year rv"><b>2013</b><h3 class="h3" style="margin:.75rem 0 .5rem">The catering kitchen</h3><p class="muted measure">Trading as Mano's Kitchen, we began cooking for events across Harare.</p></div>
        <div class="year rv"><b>2019</b><h3 class="h3" style="margin:.75rem 0 .5rem">The academy</h3><p class="muted measure">Fine Dining Chefs Academy was registered, bringing professional and hobby training under one roof.</p></div>
      </div>
      <div class="btn-row rv"><a class="btn btn-dark" href="#/about">Read our story</a></div>
    </div>
  </section>`;
}

/* ---------- Enquiry form ---------- */
function formBlock({ type = "", heading = "Tell us what you're planning.", bg = true } = {}) {
  return `<section class="sec light enquire" id="enquire" aria-labelledby="en-h">
    ${bg ? `<div class="enquire-bg">${img("table", "")}</div>` : ""}
    <div class="wrap grid-2" style="position:relative;align-items:start">
      <div>
        <p class="kicker rv">Enquire</p>
        <h2 id="en-h" class="h2 rv" style="--d:1">${heading}</h2>
        <p class="lede muted rv" style="--d:2">Courses, events, lunch packs or a spit roast: send us the details and we'll come back with dates, availability and a custom quote.</p>
        <ul class="contact-list rv" style="--d:3;margin-top:2.5rem">${contactItems()}</ul>
      </div>
      <form class="form rv" style="--d:2" novalidate aria-describedby="form-help">
        <p id="form-help" class="small muted" style="margin-top:0">This form prepares a WhatsApp message for you to send. Fields marked * are required.</p>
        <div class="field"><label for="f-name">Your name *</label><input class="input" id="f-name" name="name" autocomplete="name" required><span class="err" id="e-name"></span></div>
        <div class="field"><label for="f-contact">Email or phone *</label><input class="input" id="f-contact" name="contact" autocomplete="email" inputmode="email" required aria-describedby="e-contact"><span class="err" id="e-contact"></span></div>
        <div class="field"><label for="f-type">What's it about? *</label><select class="select" id="f-type" name="type" required aria-describedby="e-type"><option value="">Choose an option</option>${ENQUIRY_TYPES.map(t => `<option${t === type ? " selected" : ""}>${t}</option>`).join("")}</select><span class="err" id="e-type"></span></div>
        <div class="reveal-fields${EVENT_TYPES.includes(type) ? " open" : ""}" id="f-event"><div>
          <div class="two">
            <div class="field"><label for="f-date">Event date</label><input class="input" type="date" id="f-date" name="date"></div>
            <div class="field"><label for="f-guests">Guest count <span class="hint">Packages from ${MIN_GUESTS} guests</span></label><input class="input" type="number" min="1" inputmode="numeric" id="f-guests" name="guests" aria-describedby="e-guests"><span class="err" id="e-guests"></span></div>
          </div>
        </div></div>
        <div class="field"><label for="f-msg">Message *</label><textarea class="textarea" id="f-msg" name="message" required aria-describedby="e-msg" placeholder="Dates, occasion, dietary needs, questions…"></textarea><span class="err" id="e-msg"></span></div>
        <div class="form-actions"><button class="btn btn-wa" type="submit">${I.wa}Continue in WhatsApp</button><a class="tlink" data-mail href="mailto:${SITE.email}">Or send by email</a></div>
        <div class="form-status" role="status" aria-live="polite"></div>
      </form>
    </div>
  </section>`;
}
function contactItems() {
  return `<li><span class="ico">${I.wa}</span><div><span class="lbl">WhatsApp</span><a href="https://wa.me/${SITE.whatsapp}" ${ext}>${SITE.phones[0].label}</a></div></li>
    <li><span class="ico">${I.phone}</span><div><span class="lbl">Call us</span>${SITE.phones.map(p => `<a href="tel:${p.tel}">${p.label}</a>`).join("<br>")}</div></li>
    <li><span class="ico">${I.mail}</span><div><span class="lbl">Email</span><a href="mailto:${SITE.email}">${SITE.email}</a></div></li>
    <li><span class="ico">${I.pin}</span><div><span class="lbl">Visit</span><a href="${SITE.maps}" ${ext}>${SITE.address}</a></div></li>`;
}
function initForm(sec) {
  const f = sec && $("form", sec); if (!f) return;
  const type = $("#f-type", f), ev = $("#f-event", f), status = $(".form-status", f), mail = $("[data-mail]", f);
  const toggle = () => { const open = EVENT_TYPES.includes(type.value); ev.classList.toggle("open", open); ev.inert = !open; ev.setAttribute("aria-hidden", !open); };
  type.addEventListener("change", toggle); toggle();
  const setErr = (id, msg) => { const fl = $("#f-" + id, f).closest(".field"); fl.classList.toggle("bad", !!msg); $("#e-" + id, f).textContent = msg || ""; $("#f-" + id, f).setAttribute("aria-invalid", !!msg); };
  const build = () => {
    const v = k => $("#f-" + k, f).value.trim();
    const lines = [`Hello Fine Dining Chefs Academy,`, ``, `Name: ${v("name")}`, `Contact: ${v("contact")}`, `Enquiry: ${type.value}`];
    if (ev.classList.contains("open")) { if (v("date")) lines.push(`Event date: ${v("date")}`); if (v("guests")) lines.push(`Guests: ${v("guests")}`); }
    lines.push(``, v("msg"));
    return lines.join("\n");
  };
  const syncMail = () => { mail.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry: " + (type.value || "General"))}&body=${encodeURIComponent(build())}`; };
  f.addEventListener("input", syncMail); syncMail();
  f.addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#f-name", f).value.trim(), c = $("#f-contact", f).value.trim(), msg = $("#f-msg", f).value.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c), isPhone = (c.match(/\d/g) || []).length >= 7 && /^[+\d\s()-]+$/.test(c);
    const errs = {
      name: name.length < 2 ? "Enter your name." : "",
      contact: !c ? "Enter an email address or phone number." : (!isEmail && !isPhone ? "Enter a valid email or a phone number with at least 7 digits." : ""),
      type: !type.value ? "Choose what your enquiry is about." : "",
      msg: msg.length < 5 ? "Add a short message so we know how to help." : "",
      guests: ev.classList.contains("open") && $("#f-guests", f).value && +$("#f-guests", f).value < 1 ? "Guest count must be at least 1." : ""
    };
    Object.entries(errs).forEach(([k, m]) => setErr(k, m));
    const first = Object.keys(errs).find(k => errs[k]);
    if (first) { $("#f-" + first, f).focus(); status.classList.remove("show"); return; }
    const url = wa(build());
    const w = window.open(url, "_blank", "noopener");
    status.innerHTML = `WhatsApp should now be open with your message ready. Tap send in WhatsApp to deliver it. Nothing has been sent from this website.${w ? "" : ` If WhatsApp didn't open, <a href="${url}" ${ext} class="tlink">open it here</a>.`}`;
    status.classList.add("show");
  });
}

/* ---------- Footer ---------- */
function footer() {
  return `<footer class="footer" aria-labelledby="ft-h">
    <div class="wrap">
      <div class="footer-top">
        <div>
          <picture>${img("logo-dark", "Fine Dining Chefs Academy. Mastering the art of culinary.", { cls: "foot-logo" })}</picture>
          <p id="ft-h" class="big">Let's create something memorable.</p>
          <a class="btn" href="#/contact">Enquire now</a>
          <div class="socials"><a href="${SITE.instagram}" ${ext} aria-label="Instagram">${I.ig}</a><a href="${SITE.facebook}" ${ext} aria-label="Facebook">${I.fb}</a><a href="https://wa.me/${SITE.whatsapp}" ${ext} aria-label="WhatsApp">${I.wa}</a></div>
        </div>
        <div><h4>Academy</h4><ul><li><a href="#/academy/courses">Professional courses</a></li><li><a href="#/academy/courses">Patisserie</a></li><li><a href="#/academy/masterclasses">Masterclasses</a></li><li><a href="#/academy/team">Team building</a></li><li><a href="#/contact?type=trade">Trade test reps</a></li></ul></div>
        <div><h4>Catering</h4><ul><li><a href="#/catering/menu">Packages & menus</a></li><li><a href="#/catering/spit">Spit services</a></li><li><a href="#/catering/soup">Soup station</a></li><li><a href="#/catering/lunch">Lunch packs</a></li><li><a href="#/about">About us</a></li></ul></div>
        <div><h4>Contact</h4><ul class="small" style="gap:.8rem"><li><a href="${SITE.maps}" ${ext}>${SITE.address}</a></li>${SITE.phones.map(p => `<li><a href="tel:${p.tel}">${p.label}</a></li>`).join("")}<li><a href="mailto:${SITE.email}">${SITE.email}</a></li><li><a href="${SITE.web}" ${ext}>fdcazimbabwe.org</a></li></ul></div>
      </div>
      <div class="footer-bot"><span>© ${new Date().getFullYear()} Fine Dining Chefs Academy (Pvt) Ltd, Harare</span><span>Mastering the art of culinary</span></div>
    </div>
  </footer>`;
}

/* ============ Views ============ */
const VIEWS = {
  home: () => heroBlock({ home: true, img: "hero", alt: "A chef garnishing a plate of grilled fish, rice and charred vegetables in a dark professional kitchen",
      title: ["Where culinary", "passion becomes", "extraordinary."],
      lede: "A Harare culinary school and catering kitchen. We train tomorrow's chefs and cook for the moments people remember.",
      buttons: `<a class="btn" href="#/academy">Explore our courses</a><a class="btn btn-ghost" href="#/contact?type=catering">Plan your event</a>` })
    + pathsBlock() + academyTeaser() + tickerBlock() + cateringTeaser() + menuBlock() + spitBanner() + lunchBlock() + teamBlock() + galleryBlock() + aboutTeaser() + formBlock(),

  academy: () => heroBlock({ img: "chef-training", alt: "Culinary students in chef whites preparing vegetables together", pos: "50% 35%",
      title: ["The academy."], lede: "Professional qualifications, patisserie and hobby cooking, taught hands-on by people who cook for a living.",
      buttons: `<a class="btn" href="#/academy/courses">See the courses</a><a class="btn btn-ghost" href="#/contact?type=training">Ask about intakes</a>` })
    + `<section class="sec light" id="courses" aria-labelledby="co-h"><div class="wrap">
        <div class="sec-head split"><div><p class="kicker rv">Programmes</p><h2 id="co-h" class="h2 rv" style="--d:1">Find your way into the kitchen.</h2></div>
        <p class="lede muted rv" style="--d:2">From a first certificate to a diploma in patisserie, or simply one great day at the stove. Accredited routes include City & Guilds and HEXCO qualifications.</p></div>
        ${COURSES.map(g => `<h3 class="h3 rv" style="margin:3.5rem 0 1rem">${g.group}</h3>${g.items.map(c => `<article class="course rv">
          <div><h3>${c.title}</h3><div class="meta">${c.tag ? `<span class="pill green">${c.tag}</span>` : ""}${c.dur ? `<span class="pill">${c.dur}</span>` : ""}</div></div>
          <div><p class="muted" style="margin:0">${c.body}</p>${c.chips ? `<div class="chips">${c.chips.map(x => `<span class="pill">${x}</span>`).join("")}</div>` : ""}</div>
          <a class="btn btn-ghost" href="#/contact?type=${Object.keys(TYPE_KEYS).find(k => TYPE_KEYS[k] === c.type)}" aria-label="Enquire about ${esc(c.title)}">Enquire</a>
        </article>`).join("")}`).join("")}
        <p class="small muted rv" style="margin-top:2rem">Durations reflect our most recent prospectus. Current fees, intake dates and class days are confirmed when you enquire.</p>
      </div></section>`
    + `<section class="sec dark" id="masterclasses" aria-labelledby="mc-h"><div class="wrap grid-2" style="align-items:center">
        <div class="collage rv"><div class="frame a" style="aspect-ratio:4/3">${img("r-class", "Students in green aprons baking together with a lecturer")}</div><div class="frame b" style="aspect-ratio:3/4">${img("r-chef-bowl", "A chef in academy uniform whisking in a steel bowl")}</div></div>
        <div><p class="kicker rv">Masterclasses</p><h2 id="mc-h" class="h2 rv" style="--d:1">One day. One apron. A lot of fun.</h2>
        <p class="lede muted rv" style="--d:2">Day masterclasses built around your people: a birthday, a bridal party, a parent-and-child day, a kids' class, Valentine's, or training for house helps.</p>
        <div class="chips rv" style="--d:3">${COURSES[1].items[2].chips.map(x => `<span class="pill">${x}</span>`).join("")}</div>
        <div class="btn-row rv" style="--d:4"><a class="btn" href="#/contact?type=masterclass">Book a masterclass</a></div></div>
      </div></section>`
    + teamBlock() + galleryBlock("Inside the academy.") + formBlock({ heading: "Ask about the next intake." }),

  catering: () => heroBlock({ img: "private-dining", alt: "A candlelit garden dinner table with sharing platters at sunset", pos: "50% 60%",
      title: ["Catering &", "menus."], lede: "Private dining, corporate events and social celebrations, each menu built around your occasion.",
      buttons: `<a class="btn" href="#/catering/menu">Build your menu</a><a class="btn btn-ghost" href="#/contact?type=catering">Plan your event</a>` })
    + `<section class="sec light" aria-labelledby="hw-h"><div class="wrap">
        <div class="sec-head split"><div><p class="kicker rv">How it works</p><h2 id="hw-h" class="h2 rv" style="--d:1">Your menu, built your way.</h2></div>
        <p class="lede muted rv" style="--d:2">We work on a build-your-own model: choose a package that fits your event, then select from our curated categories.</p></div>
        ${stepsBlock()}
        <div class="grid-2" style="margin-top:clamp(3rem,6vw,5rem);align-items:center"><div><h3 class="h3 rv" style="margin-bottom:1.5rem">Where we serve</h3>${occasionsBlock()}</div>
        <div class="frame rv" style="aspect-ratio:4/3">${img("r-corporate-lunch", "Guests in suits enjoying a plated lunch at an outdoor corporate event", { parallax: .06 })}</div></div>
      </div></section>`
    + menuBlock()
    + `<section class="sec linen" id="soup" aria-labelledby="so-h"><div class="wrap grid-2" style="align-items:start">
        <div><p class="kicker rv">Soup station</p><h2 id="so-h" class="h2 rv" style="--d:1">Something warm to open the table.</h2>
        <p class="lede muted rv" style="--d:2">Flavour-rich soups, priced at ${money(SOUP.price)} per person and sold separately from the main packages.</p>
        <h3 class="h4 rv" style="margin:2rem 0 .75rem">Served with a choice of</h3><div class="chips rv">${SOUP.sides.map(s => `<span class="pill">${s}</span>`).join("")}</div></div>
        <div class="rv" style="--d:2"><ul class="plist">${SOUP.soups.map(s => `<li><span>${s} Soup</span><span class="pr">${money(SOUP.price)} pp</span></li>`).join("")}</ul></div>
      </div></section>`
    + `<section class="sec dark" id="spit" aria-labelledby="sv-h"><div class="wrap">
        <div class="sec-head split"><div><p class="kicker rv">Spit services</p><h2 id="sv-h" class="h2 rv" style="--d:1">The whole beast, slow-roasted.</h2></div>
        <div class="frame rv" style="--d:2;aspect-ratio:16/9">${img("spit-roast", "A pit master tending a whole lamb on the spit")}</div></div>
        <div class="spit" data-stagger>${SPIT.map(s => `<article class="spit-card rv"><h3 class="h3">${s.name}</h3><p class="serves">${s.weight}, ${s.serves.toLowerCase()}</p><p class="muted" style="margin:.75rem 0 0">${s.body}</p><ul>${s.incl.map(i => `<li>${i}</li>`).join("")}</ul></article>`).join("")}</div>
        <p class="fine rv">Pricing on request. A minimum of 48 hours' notice is required, and the venue must provide adequate outdoor space.</p>
        <div class="btn-row rv"><a class="btn" href="#/contact?type=spit">Request spit pricing</a></div>
      </div></section>`
    + lunchBlock() + galleryBlock() + formBlock({ type: "Event catering", heading: "Let's plan your event." }),

  about: () => heroBlock({ img: "r-garden-guests", alt: "A server in academy uniform attending to guests at a garden dinner", pos: "50% 40%",
      title: ["Our story."], lede: "A home-grown passion for food, now a culinary school and catering kitchen in Mt Pleasant, Harare." })
    + `<section class="sec light" aria-labelledby="st-h"><div class="wrap grid-2 wide-right">
        <div><p class="kicker rv">Since 2013</p><h2 id="st-h" class="h2 rv" style="--d:1">We cook. We teach. Usually at the same time.</h2>
        <p class="lede muted rv" style="--d:2">Fine Dining Chefs Academy began in 2013 offering catering, mainly for events. In 2019 it grew into an academy, answering the call to excellence in food. Today we are an established events and culinary school offering both training and culinary services.</p>
        <p class="muted rv" style="--d:3">The school is regularly contracted for high-profile and VIP catering and for menu consulting. We stay current through our membership of industry bodies, so what our students learn reflects how kitchens actually work now.</p></div>
        <div><ol class="timeline rv"><span class="fill" aria-hidden="true"></span>${HISTORY.map(h => `<li><time>${h.date}</time><h3>${h.title}</h3><p class="muted" style="margin:.25rem 0 0">${h.body}</p></li>`).join("")}</ol></div>
      </div></section>`
    + `<section class="sec dark" aria-labelledby="mv-h"><div class="wrap">
        <div class="grid-2"><div><p class="kicker rv">Mission</p><h2 id="mv-h" class="h3 rv" style="--d:1">Quality, affordable education and training for the leading chefs of tomorrow, and mastery of the culinary art in all our food services.</h2></div>
        <div><p class="kicker rv">Vision</p><p class="h3 rv" style="--d:1;font-family:var(--serif)">To lead in rich, sound, memorable and effective culinary experiences across Southern Africa.</p></div></div>
        <h3 class="h4 rv" style="margin:4rem 0 1.25rem;color:var(--on-dark-muted)">What we stand for</h3>
        <div class="values rv">${VALUES.map(v => `<span>${v}</span>`).join("")}</div>
      </div></section>`
    + `<section class="sec linen" aria-labelledby="aw-h"><div class="wrap grid-2 wide-right" style="align-items:start">
        <div><div class="frame arch rv" style="aspect-ratio:3/4;max-width:360px">${img("r-head", "Tracy Maoneke, Head of Centre, holding a cup of tea")}</div>
        <p class="h3 rv" style="margin-top:1.25rem;font-family:var(--serif)">Tracy Maoneke</p><p class="muted rv">Head of Centre</p></div>
        <div><p class="kicker rv">Awards & recognition</p><h2 id="aw-h" class="h2 rv" style="--d:1;margin-bottom:2rem">Recognised for leadership in food and education.</h2>
        <ul class="awards" data-stagger>${AWARDS.map(a => `<li class="rv"><span class="yr">${a.yr}</span><span><b>${a.title}</b><br><span class="muted small">${a.org}</span></span></li>`).join("")}</ul></div>
      </div></section>`
    + `<section class="sec light" aria-labelledby="af-h"><div class="wrap grid-2">
        <div><p class="kicker rv">Affiliations</p><h2 id="af-h" class="h3 rv" style="--d:1;margin-bottom:1.75rem">Accredited and connected.</h2><ul class="names" data-stagger>${AFFILIATES.map(a => `<li class="rv">${a}</li>`).join("")}</ul></div>
        <div><p class="kicker rv">Brands that trust us</p><h2 class="h3 rv" style="--d:1;margin-bottom:1.75rem">Clients we've cooked for.</h2><ul class="names" data-stagger>${BRANDS.map(a => `<li class="rv">${a}</li>`).join("")}</ul></div>
      </div></section>`
    + galleryBlock() + formBlock({ heading: "Come and cook with us." }),

  contact: () => heroBlock({ img: "ingredients", alt: "Fresh vegetables, herbs and spices on a dark stone surface", pos: "80% 50%",
      title: ["Let's talk", "food."], lede: "Courses, catering, lunch packs or a spit roast. WhatsApp is the fastest way to reach us." ,
      buttons: `<a class="btn btn-wa" href="https://wa.me/${SITE.whatsapp}" ${ext}>${I.wa}Chat on WhatsApp</a><a class="btn btn-ghost" href="tel:${SITE.phones[0].tel}">Call ${SITE.phones[0].label}</a>` })
    + formBlock({ type: Q.type, heading: "Tell us what you're planning.", bg: true })
};

/* ============ Router ============ */
let Q = {};
const NAV = [["academy", "Academy"], ["catering", "Catering & Menus"], ["about", "About"], ["contact", "Contact"]];
function parse() {
  const h = location.hash.replace(/^#\/?/, "");
  const [path, qs] = h.split("?");
  const [page, anchor] = (path || "home").split("/");
  const q = {}; (qs || "").split("&").filter(Boolean).forEach(p => { const [k, v] = p.split("="); q[k] = decodeURIComponent(v || ""); });
  return { page: VIEWS[page] ? page : "home", anchor, q };
}
let current = null;
function render(r) {
  Q = { type: TYPE_KEYS[r.q.type] || "" };
  const main = $("#main");
  main.innerHTML = `<div class="view">${VIEWS[r.page]()}</div>` + footer();
  if (r.page !== "contact" && Q.type) { const t = $("#f-type"); if (t) t.value = Q.type; }
  document.title = (r.page === "home" ? "" : NAV.find(n => n[0] === r.page)[1] + " | ") + "Fine Dining Chefs Academy, Harare";
  $$("[data-nav] a, .drawer a").forEach(a => { const p = (a.getAttribute("href") || "").replace(/^#\/?/, "").split(/[/?]/)[0]; a.toggleAttribute("aria-current", p === r.page); if (p === r.page) a.setAttribute("aria-current", "page"); });
  initBuilder($(".menu-sec")); initLunch($("#lunch")); initGallery($(".gallery")?.closest("section")); initForm($("#enquire"));
  $$("[data-stagger]").forEach(c => [...c.children].forEach((el, i) => el.style.setProperty("--d", i)));
  observe(); parallaxEls = $$("[data-parallax]"); timelineEl = $(".timeline");
  current = r.page;
}
function goTo(r, first) {
  const scrollTarget = () => {
    const el = r.anchor && document.getElementById(r.anchor);
    if (el) el.scrollIntoView({ behavior: first || RM.matches ? "auto" : "smooth" });
    else if (r.q.type && $("#enquire") && r.page !== "contact") $("#enquire").scrollIntoView();
    else scrollTo(0, 0);
  };
  closeMenu();
  if (!first && r.page === current && !r.q.type) { scrollTarget(); return; }
  if (first || RM.matches) { render(r); requestAnimationFrame(() => { scrollTarget(); requestAnimationFrame(() => document.body.classList.add("loaded")); }); if (!first) $("#main").focus({ preventScroll: true }); return; }
  const c = $(".curtain");
  c.className = "curtain up";
  setTimeout(() => {
    document.body.classList.remove("loaded");
    render(r); scrollTo(0, 0); scrollTarget();
    $("#main").focus({ preventScroll: true });
    c.className = "curtain down";
    setTimeout(() => document.body.classList.add("loaded"), 120);
    setTimeout(() => (c.className = "curtain"), 650);
  }, 560);
}
addEventListener("hashchange", () => goTo(parse()));

/* ============ Nav / drawer ============ */
function closeMenu() { document.body.classList.remove("menu-open"); const b = $(".menu-btn"); b && b.setAttribute("aria-expanded", "false"); $(".drawer").setAttribute("aria-hidden", "true"); }
function initNav() {
  const btn = $(".menu-btn"), dr = $(".drawer");
  btn.addEventListener("click", () => {
    const open = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", open); btn.setAttribute("aria-expanded", open); dr.setAttribute("aria-hidden", !open);
    if (open) setTimeout(() => $("a", dr).focus(), 300);
  });
  $$(".drawer li").forEach((li, i) => $("a", li).style.transitionDelay = `${120 + i * 70}ms`);
  addEventListener("keydown", e => { if (e.key === "Escape" && document.body.classList.contains("menu-open")) { closeMenu(); btn.focus(); } });
}

/* ============ Scroll effects ============ */
let io, parallaxEls = [], timelineEl = null, lastY = 0;
function observe() {
  io && io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
  $$(".rv, .timeline li").forEach(el => io.observe(el));
}
function onScroll() {
  const y = scrollY, nav = $(".nav"), h = document.documentElement.scrollHeight - innerHeight;
  nav.classList.toggle("solid", y > 40);
  nav.classList.toggle("hide", y > 500 && y > lastY + 4 && !document.body.classList.contains("menu-open"));
  if (y < lastY - 4) nav.classList.remove("hide");
  lastY = y;
  $(".progress").style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  $(".wa-float").classList.toggle("show", y > innerHeight * .8);
  if (!RM.matches && DESK.matches) parallaxEls.forEach(el => {
    const r = el.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
    const off = (r.top + r.height / 2 - innerHeight / 2) * -(+el.dataset.parallax);
    el.style.transform = `translateY(${off.toFixed(1)}px) scale(1.12)`;
  });
  if (timelineEl) { const r = timelineEl.getBoundingClientRect(); const p = Math.min(1, Math.max(0, (innerHeight * .7 - r.top) / r.height)); timelineEl.style.setProperty("--p", p.toFixed(3)); }
}
let ticking = false;
addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; } }, { passive: true });
addEventListener("resize", () => { onScroll(); window._ink && window._ink(); });

/* ============ Boot ============ */
document.addEventListener("DOMContentLoaded", () => {
  $(".curtain").innerHTML = STEAM_SVG;
  $("[data-nav]").innerHTML = NAV.map(n => `<li><a href="#/${n[0]}">${n[1]}</a></li>`).join("");
  $(".drawer ul").innerHTML = [["home", "Home"], ...NAV].map(n => `<li><a href="#/${n[0]}">${n[1]}</a></li>`).join("");
  $(".drawer .contact-mini").innerHTML = `<a class="btn btn-wa" href="https://wa.me/${SITE.whatsapp}" ${ext}>${I.wa}WhatsApp us</a><p class="small" style="margin-top:1.25rem;color:var(--on-dark-muted)"><a href="tel:${SITE.phones[0].tel}">${SITE.phones[0].label}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p>`;
  $(".wa-float").href = wa("Hello Fine Dining Chefs Academy, I have a question.");
  $(".wa-float").innerHTML = I.wa;
  initNav();
  goTo(parse(), true);
  onScroll();
});
