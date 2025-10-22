// main.js - factorial calculator and theme toggles

function factorial(n){
  if (n < 0) return null;
  let res = 1;
  for (let i = 1; i <= n; i++){
    res *= i;
    // guard to prevent insanely large numbers (simple)
    if (!isFinite(res) || res > Number.MAX_SAFE_INTEGER) return null;
  }
  return res;
}

function updateOutput(text){
  const out = document.getElementById('output');
  out.textContent = text;
}

document.getElementById('enterBtn').addEventListener('click', () => {
  const input = document.getElementById('numberInput').value;
  const n = Number(input);
  if (input === '') {
    updateOutput('Please enter a number.');
    return;
  }
  if (!Number.isInteger(n) || n < 0) {
    updateOutput('Please enter a non-negative integer (e.g., 0,1,2,3...).');
    return;
  }
  const result = factorial(n);
  if (result === null) {
    updateOutput(n + '! is too large to compute safely in this demo.');
    return;
  }
  updateOutput(n + '! = ' + result);
});

// Theme toggle without bootstrap JS. Look for any button with data-bs-theme-value
document.querySelectorAll('button[data-bs-theme-value]').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-bs-theme-value');
    if (val === 'light') {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  });
});

// Allow pressing Enter key inside input
document.getElementById('numberInput').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') document.getElementById('enterBtn').click();
});
