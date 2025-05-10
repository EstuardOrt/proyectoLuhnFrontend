function validateNumber() {
  const number = document.getElementById('numberInput').value;
  const result = document.getElementById('result');

  fetch('/validate', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ number })
  })
  .then(async response => {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Error desconocido');
    }
    return data;
  })
  .then(data => {
    if (data.valid) {
      result.textContent = '- Número válido -';
      result.style.color = 'green';
    } else {
      result.textContent = '- Número inválido -';
      result.style.color = 'red';
    }
  })
  .catch(err => {
    result.textContent = `- Error: ${err.message} -`;
    result.style.color = 'orange';
  });
}
