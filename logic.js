// logic.js

/**
 * @param {string} number 
 * @returns {Promise<boolean>} 
 * @throws {Error}
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
