// -------------------------------
// Helper function to re-trigger animations
// -------------------------------
function restartAnimation(element, className) {
  element.classList.remove(className);
  void element.offsetWidth; // forces reflow
  element.classList.add(className);
}

// ===== 1. Animate Box on Button Click =====
const box = document.getElementById('box');
const animateBoxBtn = document.getElementById('animateBoxBtn');

animateBoxBtn.addEventListener('click', () => {
  restartAnimation(box, 'animate');
});

// ===== 2. Card Flip =====
const card = document.getElementById('card');
card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// ===== 3. Loading Spinner =====
const loader = document.getElementById('loader');
const toggleLoaderBtn = document.getElementById('toggleLoaderBtn');
let loading = false;

toggleLoaderBtn.addEventListener('click', () => {
  loading = !loading;
  loader.classList.toggle('active', loading);
  toggleLoaderBtn.textContent = loading ? "Stop Loading" : "Start Loading";
});

// ===== 4. Popup Modal =====
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});
