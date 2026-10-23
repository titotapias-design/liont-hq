/* LionT HQ — todos los datos de la app viven aquí.
   Para actualizar: edita este archivo, haz commit y push. Sube CACHE_VERSION en sw.js.
   Privacidad: repo público. NO añadir saldos, importes, cifras de Coinbase, emails, IDs de voz ni secretos. */
window.LIONT = {
  updated: "24 oct 2026",
  company: "Avengers LionT",
  owner: "Tito",

  // status: ok | progress | warn | hold | blocked | neutral
  today: [
    { title: "Tienda web", detail: "Live. Friday QA 8,7 · PASS", status: "ok", label: "Live" },
    { title: "Shorts A + B", detail: "v9 en producción. v8 rechazado.", status: "progress", label: "En producción" },
    { title: "Avatar de confianza", detail: "En ajuste: más joven, con sonrisa.", status: "progress", label: "Ajuste" },
    { title: "Mesa trading", detail: "En HOLD hasta la Fed (27–28 oct).", status: "hold", label: "Hold" },
    { title: "Meta Ads", detail: "Autenticación pendiente. Reintento dom 25 · 10:00.", status: "blocked", label: "Bloqueado" },
    { title: "Música · pitches", detail: "En HOLD. Solo vías gratuitas.", status: "hold", label: "Hold" },
    { title: "Ventas", detail: "Aún sin ventas registradas.", status: "neutral", label: "Sin ventas" }
  ],

  director: { name: "Fury", role: "Director" },

  teams: [
    { name: "Mesa trading", agents: [
      ["Jarvis", "CEO trading"], ["Colossus", "Riesgo"], ["Widow", "Ejecución"],
      ["Strange", "Ojo de mercado"], ["Heimdall", "Brief diario"] ] },
    { name: "Scouts", agents: [
      ["Vision", "Cerebro"], ["Odin", "Macro"], ["Quicksilver", "Liquidez"], ["Phoenix", "Sentimiento"],
      ["Kang", "Ciclos"], ["Reed", "Correlaciones"], ["Flash", "Noticias"], ["Wanda", "Alts"] ] },
    { name: "Contenido", agents: [
      ["Mysterio", "Shorts"], ["Nova", "Distribución YouTube + TikTok"], ["Watcher", "Métricas"], ["Banshee", "Clips"] ] },
    { name: "Ventas", agents: [ ["Hawkeye", "Cierre Stripe y entrega"] ] },
    { name: "Calidad", agents: [ ["Friday", "QA obligatorio · PASS ≥7"] ] },
    { name: "Facturación", badge: "Nuevo", agents: [
      ["Shuri", "Producto"], ["Rocket", "SEO y crecimiento orgánico"], ["Gamora", "Afiliados y alianzas"] ] },
    { name: "Música", agents: [ ["Dazzler", "Playlists"], ["Songbird", "Comunidad"] ] },
    { name: "Pausados por Tito", paused: true, agents: [ ["Alfred", "Pausado"], ["Pepper", "Pausado"], ["Echo", "Pausado"] ] }
  ],

  flows: [
    { name: "Contenido → venta", steps: [
      ["Rocket", "Temas"], ["Mysterio", "Guion + voz + visual"], ["Friday", "QA ≥7"], ["Tito", "PASS final"],
      ["Nova", "Publica en YouTube + TikTok"], ["Tienda", "Landing de producto"], ["Stripe", "Pago"],
      ["Hawkeye", "Entrega"], ["Watcher", "Mide resultados"] ] },
    { name: "Trading", steps: [
      ["Scouts", "Señales de mercado"], ["Vision", "Filtro · confianza ≥60"], ["Jarvis / Strange", "Decisión"],
      ["Colossus", "Riesgo", ["Spot BTC · ETH · SOL · XRP", "30% por trade", "Tope −10% / día", "Kill switch −10%"]],
      ["Widow", "Ejecuta"], ["Heimdall", "Reporta"] ] }
  ],

  products: [
    { name: "Pack FOMO", price: "€5", desc: "Producto digital · pago seguro con Stripe.", url: "https://buy.stripe.com/14A7sL5x69T32QE1RHbII01" },
    { name: "Brief Fed", price: "€9", desc: "Producto digital · pago seguro con Stripe.", url: "https://buy.stripe.com/28EfZhbVu5CN9f267XbII02" }
  ],
  shopUrl: "https://titotapias-design.github.io/liont-shop/",

  routines: [
    ["Reporte beneficios", "L–V · 9:00"],
    ["Ciclo iniciativas", "Diario · 8, 14 y 20 h"],
    ["Radar Coinbase", "L–V · 10, 13, 16 y 19 h"],
    ["Radar oportunidades", "Cada 3 h"],
    ["Pulso enjambre", "Cada 2 h"],
    ["Radar foros", "L–V · 11:00"],
    ["Dojo Avengers", "L–V · cada 2 h, 9–21 h"],
    ["Check URL Short A", "Lun 26 · 9:00", "once"],
    ["Reintento Meta", "Dom 25 · 10:00", "once"]
  ],

  rules: [
    "Copiar patrones de los mejores.",
    "PASS ≥7 y Friday antes de publicar.",
    "Sin urgencia falsa ni promesas de rentabilidad.",
    "Cero gasto sin OK de Tito.",
    "Shorts solo en YouTube y TikTok."
  ]
};
