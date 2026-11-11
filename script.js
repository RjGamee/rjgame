/* =========================================================
   تنظیمات — فقط همین بخش رو ویرایش کن
   ========================================================= */
const CONFIG = {
  name: "RjGame",
  taglines: [
    "استریمر و گیمر 🎮",
    "هر شب لایو، هر شب هیجان ⚡",
    "منو توی شبکه‌های اجتماعی دنبال کن 💜💙"
  ],
  isLive: false, // اگه الان لایو هستی بذار true

  links: [
    { title: "تلگرام",   sub: "@rjgamee",           url: "https://t.me/rjgamee",             icon: "telegram",  color: "pink" },
    { title: "اینستاگرام", sub: "@skinbaamir",        url: "https://www.instagram.com/skinbaamir",   icon: "instagram", color: "blue" },
    { title: "آپارات",   sub: "aparat.com/rjgame",  url: "https://www.aparat.com/rjgame/live",    icon: "aparat",    color: "pink" },
    { title: "تله‌لایو",  sub: "telelivee.ir/rjgame", url: "https://telelivee.ir/rjgame/live",       icon: "live",      color: "blue" }
  ],

  // برنامه استریم (اگه نمی‌خوای نمایش داده بشه آرایه رو خالی بذار: [])
  schedule: [
    { day: "شنبه",       time: "21:00" },
    { day: "دوشنبه",     time: "21:00" },
    { day: "پنجشنبه",    time: "22:00" }
  ]
};

/* ---------- آیکون‌ها ---------- */
const ICONS = {
  telegram:  '<svg viewBox="0 0 24 24"><path d="M21.5 3.5 2.5 10.8l5.2 1.9 2 6.3 3-3.6 4.8 3.6 4-15.5Z"/><path d="m7.7 12.7 9.8-6.2-7.4 7.8-.1 4.7"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle class="f" cx="17.2" cy="6.8" r="1.2"/></svg>',
  aparat:    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path class="f" d="M10 8.2v7.6l6-3.8-6-3.8Z"/></svg>',
  live:      '<svg viewBox="0 0 24 24"><circle class="f" cx="12" cy="12" r="2.2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2"/></svg>'
};
const ARROW = '<svg class="arrow" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg>';

/* ---------- ساخت لینک‌ها ---------- */
const linksEl = document.getElementById("links");
CONFIG.links.forEach((l, i) => {
  const a = document.createElement("a");
  a.className = "link" + (l.color === "blue" ? " blue" : "");
  a.href = l.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.style.animationDelay = (0.15 + i * 0.12) + "s";
  a.innerHTML =
    '<span class="ico">' + (ICONS[l.icon] || ICONS.live) + '</span>' +
    '<span class="txt"><span class="title">' + l.title + '</span><span class="sub">' + l.sub + '</span></span>' +
    ARROW;
  linksEl.appendChild(a);
});

/* ---------- نام، لایو، برنامه ---------- */
document.getElementById("name").textContent = CONFIG.name;
document.getElementById("liveBadge").hidden = !CONFIG.isLive;
document.getElementById("year").textContent = new Date().getFullYear();

if (CONFIG.schedule.length) {
  const list = document.getElementById("scheduleList");
  CONFIG.schedule.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = "<span>" + s.day + "</span><span>" + s.time + "</span>";
    list.appendChild(li);
  });
  document.getElementById("schedule").hidden = false;
}

/* ---------- تایپ شعار ---------- */
(function typeLoop() {
  const el = document.getElementById("tagline");
  let t = 0, i = 0, del = false;
  function tick() {
    const full = CONFIG.taglines[t];
    i += del ? -1 : 1;
    el.textContent = full.slice(0, i);
    let wait = del ? 35 : 80;
    if (!del && i === full.length) { del = true; wait = 1800; }
    else if (del && i === 0) { del = false; t = (t + 1) % CONFIG.taglines.length; wait = 400; }
    setTimeout(tick, wait);
  }
  tick();
})();

/* ---------- لوگوی جایگزین (اگه logo.png پیدا نشد) ---------- */
const logo = document.getElementById("logo");
logo.addEventListener("error", () => {
  const svg = `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RJ">
    <defs>
      <linearGradient id="gp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5ae8"/><stop offset="1" stop-color="#ff1f7a"/></linearGradient>
      <linearGradient id="gb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#19b8ff"/><stop offset="1" stop-color="#2f6bff"/></linearGradient>
      <linearGradient id="gr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff2bd6"/><stop offset="1" stop-color="#2f6bff"/></linearGradient>
      <filter id="gl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="200" height="200" fill="#05000d"/>
    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gr)" stroke-width="3" filter="url(#gl)"/>
    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gr)" stroke-width="1" opacity=".5"/>
    <g filter="url(#gl)" stroke-linejoin="round" stroke-width="4" fill="rgba(255,43,214,.12)" stroke="url(#gp)">
      <path d="M52 56h58l16 12-8 30-16 10 24 34H98L82 112l-6 28H58l12-84Zm26 14-3 20h22l8-6 2-10-9-4H78Z" fill-rule="evenodd"/>
    </g>
    <g filter="url(#gl)" stroke-linejoin="round" stroke-width="4" fill="rgba(47,107,255,.15)" stroke="url(#gb)">
      <path d="M110 100h42l-12 64-14 12H92l-8-14 22-1 8-6 8-45h-12l4-10Z"/>
    </g>
  </svg>`;
  const wrap = logo.parentElement;
  logo.remove();
  wrap.insertAdjacentHTML("beforeend", svg);
});

/* ---------- ذرات پس‌زمینه ---------- */
(function particles() {
  const c = document.getElementById("bg");
  const ctx = c.getContext("2d");
  let w, h, dots;
  const colors = ["#ff2bd6", "#ff1f7a", "#2f6bff", "#19b8ff"];

  function resize() {
    const r = window.devicePixelRatio || 1;
    w = c.width = innerWidth * r;
    h = c.height = innerHeight * r;
    const n = Math.min(90, Math.floor(innerWidth / 14));
    dots = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.8 + 0.6) * r,
      vx: (Math.random() - 0.5) * 0.25 * r,
      vy: (-Math.random() * 0.4 - 0.1) * r,
      c: colors[(Math.random() * colors.length) | 0],
      a: Math.random() * 0.6 + 0.2
    }));
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const d of dots) {
      d.x += d.vx; d.y += d.vy;
      if (d.y < -10) { d.y = h + 10; d.x = Math.random() * w; }
      if (d.x < -10) d.x = w + 10;
      if (d.x > w + 10) d.x = -10;
      ctx.globalAlpha = d.a;
      ctx.fillStyle = d.c;
      ctx.shadowColor = d.c;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  addEventListener("resize", resize);
  resize();
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) frame();
})();

/* ---------- کپی لینک ---------- */
const toast = document.getElementById("toast");
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("show"), 2000);
}
document.getElementById("shareBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    showToast("لینک کپی شد ✅");
  } catch {
    showToast("کپی نشد، لینک رو دستی کپی کن");
  }
});
