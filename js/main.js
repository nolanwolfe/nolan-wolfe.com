// nolan-wolfe.com — interactions

// ---------- scroll reveal ----------
const revealables = document.querySelectorAll("[data-reveal]");
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);
revealables.forEach((el) => io.observe(el));

// ---------- vertical scroll cue: hide once past the card ----------
const cue = document.getElementById("scroll-cue");
if (cue) {
  window.addEventListener(
    "scroll",
    () => {
      cue.classList.toggle("is-hidden", window.scrollY > window.innerHeight * 0.4);
    },
    { passive: true }
  );
}

// ---------- custom cursor ----------
const cursor = document.querySelector(".cursor");
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (cursor && finePointer) {
  let x = 0, y = 0, cx = 0, cy = 0;

  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    cursor.classList.add("is-visible");
  });
  document.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"));

  (function tick() {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  })();

  document.querySelectorAll("[data-cursor]").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
  });
}

// ---------- local time in the corner ----------
const timeEl = document.getElementById("local-time");
function renderTime() {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
if (timeEl) {
  renderTime();
  setInterval(renderTime, 30_000);
}

// ---------- current year ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
