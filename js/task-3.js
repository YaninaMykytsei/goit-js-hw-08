const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
  const trimValue = event.target.value.trim();

  if (trimValue === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = trimValue;
  }
});
