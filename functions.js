
let clicks = 0;
let clp = 1;
let co = 10;
let starter = 1;
let bps = 0;
//// EYE AM DA FUTEHAR!!!
function updateDisplays() {
  const numEl = document.getElementById('num');
  if (numEl) numEl.textContent = clicks;
  const nuums = document.getElementsByClassName('nuum');
  for (let el of nuums) el.textContent = clicks;
  const costEl = document.getElementById('2222');
  if (costEl) costEl.textContent = co;
}

function handleClick() {
  clicks += clp;
  updateDisplays();
  const footer = document.getElementById('1');
  if (footer) footer.textContent = 'eee';
}

function RESET() {
  clicks = 0;
  updateDisplays();
}

function SAVE() {
  try {
    localStorage.setItem('blorb_clicks', String(clicks));
    alert('Saved');
  } catch (e) {
    console.warn('Could not save:', e);
  }
}

function loadGame() {
  try {
    const v = localStorage.getItem('blorb_clicks');
    if (v !== null) {
      clicks = parseInt(v, 10) || 0;
      updateDisplays();
    }
  } catch (e) {
    console.warn('Could not load:', e);
  }
}
function load() {
  loadGame();
}

function upone() {
  if (clicks >= co) {
    clicks -= co;
    clp += 1;
    co = Math.max(1, Math.floor(co * 1.5));
    updateDisplays();
  } else {
    alert('Not enough blorbs');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  updateDisplays();
  loadGame(); // optionally auto-load saved state
});
