import { validateNumberInput } from './logic.js';

function validateNumber() {
  const number = document.getElementById('numberInput').value;
  const result = document.getElementById('result');

  validateNumberInput(number)
    .then(valid => {
      result.textContent = valid ? '- Número válido -' : '- Número inválido -';
      result.style.color = valid ? 'green' : 'red';
    })
    .catch(err => {
      result.textContent = `- Error: ${err.message} -`;
      result.style.color = 'orange';
    });
}

// Exponer la función al ámbito global para que el onclick en el HTML la encuentre
window.validateNumber = validateNumber;

//comentario nuevo de prueba 321
//nuevo cambio
//otro cambio