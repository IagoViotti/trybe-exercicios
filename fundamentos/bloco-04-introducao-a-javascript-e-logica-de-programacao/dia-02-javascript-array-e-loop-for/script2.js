//exercicio 1
console.log('--exercicio 1--')

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
// }

for (let array of numbers) {
    console.log(array)
}

//exercicio 2
console.log('--exercicio 2--')

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index]
}
console.log(resultado)

//exercicio 3
console.log('--exercicio 3--')

let resultadoSoma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultadoSoma += numbers[index]
}

let mediaAritmetica = resultadoSoma / numbers.length


console.log(mediaAritmetica)

//exercicio 4
console.log('--exercicio 4--')

let resultadoSoma4 = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultadoSoma4 += numbers[index]
}

let mediaAritmetica4 = resultadoSoma4 / numbers.length

if (mediaAritmetica > 20) {
    console.log('valor maior que 20')
}
else {
    console.log('valor menor ou igual a 20')
}

//exercicio 5
console.log('--exercicio 5--')

let maiorValor = numbers[0];

for (let indice = 0; indice < numbers.length; indice += 1) {     
        if (numbers[indice] > maiorValor) {
            maiorValor = numbers[indice]
        }
}
    console.log(maiorValor)
