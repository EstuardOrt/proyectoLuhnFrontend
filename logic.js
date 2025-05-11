
/**
 * 
 * @param {string} number 
 * @returns {boolean} 
 */
function luhnCheck(number) {
  const digits = number.replace(/\D/g, '').split('').reverse().map(d => parseInt(d, 10));
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
}

/**
 * 
 * @param {string} number 
 * @returns {Promise<boolean>} 
 */
async function validateNumberInput(number) {
  
  const valid = luhnCheck(number);
  return valid;
}

module.exports = { validateNumberInput, luhnCheck };
