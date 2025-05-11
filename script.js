import { validateNumberInput } from './logic.js';

function validateNumber() {
  const number = document.getElementById('numberInput').value;
  const result = document.getElementById('result');

  validateNumberInput(number)
    .then(valid => {
      result.textContent = valid ? '- Número válido, felicidades -' : '- Número inválido, que triste -';
      result.style.color = valid ? 'green' : 'red';
    })
    .catch(err => {
      result.textContent = `- Error: ${err.message} -`;
      result.style.color = 'orange';
    });
}


window.validateNumber = validateNumber;
