function calculateFactorial() {
  const input = document.getElementById('userInput').value;
  const output = document.getElementById('output');

  if (input === '' || input < 0) {
    output.textContent = 'Please enter a valid positive number.';
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= input; i++) {
    factorial *= i;
  }

  output.textContent = `${input}! = ${factorial}`;
}

const buttons = document.querySelectorAll('[data-bs-theme-value]');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('data-bs-theme-value');
    document.body.setAttribute('data-bs-theme', theme);
  });
});
