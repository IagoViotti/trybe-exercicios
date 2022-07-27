//exercicio 1
console.log('--exercicio 1--')

function verificaPalindrome(palavra) {
    let palavraInvertida = '';
 for (let aux = palavra.length - 1; aux >= 0; aux -= 1) {
    palavraInvertida += palavra[aux]
}
    if (palavra === palavraInvertida) {
        resultado = true
        return resultado
    }
    else {
        resultado = false
        return resultado
    }
}

 console.log(verificaPalindrome('arara'))

//--------------------------------

function verificaPalindrome(palavra) {
    let arrayPalavra = palavra.split ('')
    let arrayReverso = arrayPalavra.reverse()
    let palavraInvertida = arrayReverso.join('')
    if (palavra === palavraInvertida){
        return true
    }
    else {
        return false
    }
}

console.log(verificaPalindrome('arara'))

//----------------------

function verificaPalindrome(palavra) {
    let palavraInvertida = palavra.split('').reverse('').join('')
    if (palavraInvertida === palavra) {
        return true
    }
    else {
        return false
    }
}

console.log(verificaPalindrome('arara'))

//exercicio 2
console.log('--exercicio 2--')

function indiceMaior(numero) {
    let indiceMaior = 0
    for (let indice in numero) {
        if (numero[indice] > numero[indiceMaior]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}

console.log(indiceMaior([2, 3, 6, 7, 10, 1]))

//exercicio 3
console.log('--exercicio 3--')

function indiceMenor(numero) {
    let indiceMenor = 0
    for (let indice in numero) {
        if (numero[indice] < numero[indiceMenor]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]))

//exercicio 4
console.log('--exercicio 4--')

function maiorNome() {
    for 
}
