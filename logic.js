// logic.js

/**
 * Envía el número al backend para validar.
 * @param {string} number – Cadena de dígitos a validar.
 * @returns {Promise<boolean>} – `true` si es válido, `false` si no.
 * @throws {Error} – Si la respuesta no es OK o hay un error inesperado.
 */
export async function validateNumberInput(number) {
  const response = await fetch('/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ number })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Error desconocido');
  }

  return data.valid;
}
