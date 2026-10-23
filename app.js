(() => {
  const D = window.LIONT;
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const svg = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const I = {
    home: svg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/>'),
    team: svg('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.3c2.3.2 3.9 1.8 4.5 4.2"/>'),
    flow: svg('<rect x="3" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="16" width="7" height="5" rx="1.5"/><path d="M6.5 8v4.5a2 2 0 0 0 2 2h7a2 2 0 0 1 2 2V16"/>'),
    bag: svg('<path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>'),
    clock: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    cal: svg('<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 10h16M9 3v4M15 3v4"/>'),
    chev: svg('<path d="m9 6 6 6-6 6"/>'),
    down: svg('<path d="M12 5v14M6 13l6 6 6-6"/>'),
    ext: svg('<path d="M14 5h5v5M19 5l-8 8"/><path d="M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"/>'),
    chart: svg('<path d="M4 19h16"/><path d="m5 15 4-4 3 3 6-7"/>'),
    radar: svg('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><path d="M12 12 18 6"/>'),
    play: svg('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9.5 5 2.5-5 2.5z"/>'),
    cart: svg('<path d="M3 4h2l2.4 11h10.2L20 8H6.2"/><circle cx="9.5" cy="19" r="1.3"/><circle cx="17" cy="19" r="1.3"/>'),
    check: svg('<path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>'),
    coin: svg('<circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.5 0-2.6.8-2.6 2s1.1 1.6 2.6 1.9 2.6.8 2.6 2-1.1 2.1-2.6 2.1c-1.2 0-2.1-.5-2.6-1.3M12 6.5V8M12 16v1.5"/>'),
    music: svg('<path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>'),
    pause: svg('<circle cx="12" cy="12" r="8.5"/><path d="M10 9v6M14 9v6"/>'),
  };
  const teamIcon = n => ({ "Mesa trading": I.chart, "Scouts": I.radar, "Contenido": I.play, "Ventas": I.cart, "Calidad": I.check,
    "Facturación": I.coin, "Música": I.music, "Pausados por Tito": I.pause }[n] || I.team);
  const initials = n => n.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ ]/g, "").slice(0, 2).toUpperCase();

  const tabs = [
    { id: "inicio", label: "Inicio", icon: I.home, render: renderInicio },
    { id: "equipo", label: "Equipo", icon: I.team, render: renderEquipo },
    { id: "flujos", label: "Flujos", icon: I.flow, render: renderFlujos },
    { id: "productos", label: "Productos", icon: I.bag, render: renderProductos },
    { id: "rutinas", label: "Rutinas", icon: I.clock, render: renderRutinas },
  ];

  const hero = (eyebrow, title, sub) => `<div class="hero"><div class="eyebrow">${eyebrow}</div><h1 class="h1">${title}</h1>${sub ? `<p class="sub">${sub}</p>` : ""}</div>`;
  const footer = () => `<p class="footer">${esc(D.company)} · Actualizado ${esc(D.updated)}</p>`;

  function renderInicio() {
    const c = s => D.today.filter(x => s.includes(x.status)).length;
    return hero("Actualizado " + esc(D.updated), "Hoy en LionT", "Estado de cada frente de " + esc(D.company) + ".") +
      `<div class="summary">
        <div class="stat"><div class="n" style="color:var(--green)">${c(["ok"])}</div><div class="l">En marcha</div></div>
        <div class="stat"><div class="n" style="color:var(--blue)">${c(["progress"])}</div><div class="l">En curso</div></div>
        <div class="stat"><div class="n" style="color:var(--orange)">${c(["hold","blocked","warn"])}</div><div class="l">En espera</div></div>
      </div>
      <div class="section-title">Estado de hoy</div>` +
      D.today.map(x => `<div class="card s-${x.status}"><span class="dot"></span><div class="main"><div class="t">${esc(x.title)}</div><div class="d">${esc(x.detail)}</div></div><span class="pill">${esc(x.label)}</span></div>`).join("") +
      footer();
  }

  function renderEquipo() {
    const active = D.teams.filter(t => !t.paused).reduce((a, t) => a + t.agents.length, 0);
    return hero(esc(D.company), "Equipo", `${active} agentes activos en ${D.teams.filter(t => !t.paused).length} equipos.`) +
      `<div class="node"><div class="avatar gold">T</div><div class="main"><div class="t" style="font-weight:600">${esc(D.owner)}</div><div class="d" style="color:var(--text-2);font-size:14px">Fundador · aprueba todo</div></div></div>
      <div class="connector"></div>
      <div class="node"><div class="avatar">${initials(D.director.name)}</div><div class="main"><div class="t" style="font-weight:600">${esc(D.director.name)}</div><div class="d" style="color:var(--text-2);font-size:14px">${esc(D.director.role)} · coordina los equipos</div></div></div>
      <div class="connector"></div>` +
      D.teams.map((t, i) => `<div class="team${t.paused ? " paused" : ""}" data-i="${i}">
        <button class="team-head" aria-expanded="false"><div class="teamicon">${teamIcon(t.name)}</div>
          <div class="main"><div class="t">${esc(t.name)}${t.badge ? `<span class="tag">${esc(t.badge)}</span>` : ""}</div>
          <div class="d">${t.agents.length} ${t.agents.length === 1 ? "agente" : "agentes"} · ${t.agents.map(a => esc(a[0])).join(", ")}</div></div>
          <span class="chev">${I.chev}</span></button>
        <div class="team-body"><div>${t.agents.map(a => `<div class="agent"><div class="avatar sm">${initials(a[0])}</div><div><div class="t">${esc(a[0])}</div><div class="d">${esc(a[1])}</div></div></div>`).join("")}</div></div>
      </div>`).join("") + footer();
  }

  let flowIdx = 0;
  function renderFlujos() {
    const f = D.flows[flowIdx];
    return hero("Cómo trabajamos", "Flujos", "Cada paso pasa por su responsable.") +
      `<div class="seg" role="tablist">${D.flows.map((x, i) => `<button data-f="${i}" class="${i === flowIdx ? "on" : ""}">${esc(x.name)}</button>`).join("")}</div>` +
      f.steps.map((s, i) => `${i ? `<div class="arrow">${I.down}</div>` : ""}<div class="step"><span class="num">${i + 1}</span><div><div class="t">${esc(s[0])}</div><div class="d">${esc(s[1])}</div>${s[2] ? `<ul>${s[2].map(r => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}</div></div>`).join("") +
      footer();
  }

  function renderProductos() {
    return hero("Tienda", "Productos", "Pago seguro con Stripe.") +
      D.products.map(p => `<div class="product"><div class="top"><div class="t">${esc(p.name)}</div><div class="p">${esc(p.price)}</div></div><p class="d">${esc(p.desc)}</p><a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener">Comprar</a></div>`).join("") +
      `<a class="btn secondary" href="${esc(D.shopUrl)}" target="_blank" rel="noopener">Abrir la tienda web&nbsp;&nbsp;<span style="width:17px;height:17px;display:inline-flex">${I.ext}</span></a>` + footer();
  }

  function renderRutinas() {
    return hero("Hora de Madrid", "Rutinas", "Lo que el equipo hace en automático.") +
      `<div class="group">${D.routines.map(r => `<div class="row"><div class="ico${r[2] ? " once" : ""}">${r[2] ? I.cal : I.clock}</div><div class="main"><div class="t">${esc(r[0])}</div><div class="d">${esc(r[1])}</div></div>${r[2] ? `<span class="pill s-progress">Una vez</span>` : ""}</div>`).join("")}</div>
      <div class="section-title">Reglas de la casa</div>
      <div class="group">${D.rules.map((r, i) => `<div class="row rule"><span class="n">${i + 1}</span><div class="main"><div class="t" style="font-weight:400">${esc(r)}</div></div></div>`).join("")}</div>` + footer();
  }

  // Tab bar
  $("#tabbar").innerHTML = tabs.map(t => `<a class="tab" href="#${t.id}" data-tab="${t.id}">${t.icon}<span>${t.label}</span></a>`).join("");

  function route() {
    const id = (location.hash || "#inicio").slice(1);
    const t = tabs.find(x => x.id === id) || tabs[0];
    $("#app").innerHTML = `<div class="view">${t.render()}</div>`;
    $("#topbar-title").textContent = t.label;
    document.querySelectorAll(".tab").forEach(el => el.classList.toggle("on", el.dataset.tab === t.id));
    window.scrollTo(0, 0); onScroll();
  }
  document.addEventListener("click", e => {
    const h = e.target.closest(".team-head");
    if (h) { const card = h.parentElement; const open = card.classList.toggle("open"); h.setAttribute("aria-expanded", open); }
    const f = e.target.closest("[data-f]");
    if (f) { flowIdx = +f.dataset.f; $("#app").innerHTML = `<div class="view">${renderFlujos()}</div>`; }
  });
  const onScroll = () => $("#topbar").classList.toggle("show", window.scrollY > 60);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("hashchange", route);
  route();
  // Deep-link helpers for QA: ?open=1 expands teams, ?flow=1 picks a flow
  const q = new URLSearchParams(location.search);
  if (q.get("flow")) { flowIdx = +q.get("flow"); route(); }
  if (q.get("open")) document.querySelectorAll(".team").forEach((el, i) => { if (q.get("open") === "all" || +q.get("open") === i) el.classList.add("open"); });

  if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
})();
