const sum = ( num1, num2) => { 
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    throw new Error('parameters must be numbers')
  }
  return num1 + num2;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

module.exports = {sum, myRemove};