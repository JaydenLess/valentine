// Personalize here (shows on all pages)
const HER_NAME = "________";
const YOUR_NAME = "________";

// Hearts background
const hearts = document.getElementById("hearts");
if (hearts) {
  const makeHeart = () => {
    const h = document.createElement("div");
    h.className = "heart";
    const left = Math.random() * 100;
    const dur = 6 + Math.random() * 8;
    const size = 10 + Math.random() * 18;
    h.style.left = left + "vw";
    h.style.animationDuration = dur + "s";
    h.style.width = size + "px";
    h.style.height = size + "px";
    h.style.opacity = 0.10 + Math.random() * 0.18;
    hearts.appendChild(h);
    setTimeout(() => h.remove(), dur * 1000);
  };
  setInterval(makeHeart, 250);
}

// Replace name placeholders if present
function setText(id, value){
  const el = document.getElementById(id);
  if (el && value && value !== "________") el.textContent = value;
}
setText("herName", HER_NAME);
setText("yourName", YOUR_NAME);

// Suspense page progress animation (if elements exist)
const bar = document.getElementById("bar");
if (bar) {
  setTimeout(() => (bar.style.width = "30%"), 250);
  setTimeout(() => (bar.style.width = "68%"), 1200);
  setTimeout(() => (bar.style.width = "92%"), 2200);
}

// Valentine page logic (if buttons exist)
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const btnArea = document.getElementById("btnArea");

if (yesBtn && modal) {
  yesBtn.addEventListener("click", () => modal.classList.add("open"));
}
if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => modal.classList.remove("open"));
}
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
}

// Move "No" button around (playful)
let noMoves = 0;
function moveNoButton() {
  if (!btnArea || !noBtn) return;

  const areaRect = btnArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const x = Math.max(0, Math.random() * maxX);
  const y = Math.max(0, Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {
    noMoves++;
    moveNoButton();
    if (noMoves >= 6) noBtn.textContent = "Okay okay… YES 😭";
  });

  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    noMoves++;
    moveNoButton();
    if (noMoves >= 6) noBtn.textContent = "Okay okay… YES 😭";
  }, { passive:false });

  noBtn.addEventListener("click", () => {
    noMoves++;
    if (noMoves >= 6 && modal) modal.classList.add("open");
    else moveNoButton();
  });
}
