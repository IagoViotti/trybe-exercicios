const sum = ( num1, num2) => { 
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    throw new Error('parameters must be numbers')
  }
  return num1 + num2;
}

module.exports = sum