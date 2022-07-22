//exercicio 1
console.log('--exercicio 1--')

let fatorial = 1;

for (let aux = 1; aux <= 10; aux += 1) {
    fatorial = fatorial * aux
}

console.log(fatorial)

//exercicio 2
console.log('--exercicio 2--')

let word = 'socorram-mesubinoonibusemmarrocos';
let wordInversa = word[word.length - 1];

for (let aux = word.length - 2; aux >= 0; aux -= 1) {
    wordInversa += word[aux]
}

console.log(wordInversa)

//exercicio 3 
console.log('--exercicio 3--')

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]; 

for (let aux = 1; aux < array.length; aux += 1) {
    if (array[aux].length > maiorPalavra.length) {
        maiorPalavra = array[aux]
    }
}

console.log(maiorPalavra)

//exercicio 3.2
console.log('--exercicio 3.2--')

let menorPalavra = array[0]; 

for (let aux = 1; aux < array.length; aux += 1) {
    if (array[aux].length < menorPalavra.length) {
        menorPalavra = array[aux]
    }
}

console.log(menorPalavra)

//exercicio 4
console.log('--exercicio 4--')

let maiorNumeroPrimo;

for (let numeroAtual = 2; numeroAtual < 50; numeroAtual += 1) {
    let ePrimo = true;
    for (let numeroDivisor = 2; numeroDivisor < numeroAtual; numeroDivisor += 1) {
        if (numeroAtual % numeroDivisor === 0) {
            ePrimo = false;
        }
    }
    if (ePrimo == true) {
        maiorNumeroPrimo = numeroAtual;
    }
}

console.log(maiorNumeroPrimo)