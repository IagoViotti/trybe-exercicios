// 1. faça cinco programas para cada operação básica
console.log("--exercicio 1--")

const a = 10;
const b = 5;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)

// 2. um programa que retorne o maior de dois números
console.log("--exercicio 2--")

const num1 = 22;
const num2 = 45;

if (num1 > num2) {
    console.log(num1)
}
else {
    console.log(num2)
}

// 3. um programa que retorne o maior de três números
console.log("--exercicio 3--")

const num3 = 40;
const num4 = 32;
const num5 = 86;

if (num3 > num4 && num3 > num5) {
    console.log(num3)
}
else if (num4 > num3 && num4 > num5) {
    console.log(num4)
}
else {
    console.log(num5)
}

//4. retorna "positive" pra valor positivo e "negative" pra valor negativo
console.log("--exercicio 4--")

const num6 = -68;

if (num6 > 0) {
    console.log("positive")
}
else {
    console.log("negative")
}

//5. constantes c valor de angulo interno de triangulo, retornar true se forem angulos possíveis e false caso contrário
console.log("--exercicio 5--")
const ang1 = 30;
const ang2 = 30;
const ang3 = 30;
let validTriangle;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log("erro, valor de ângulo inválido")
}
else if (ang1 + ang2 + ang3 == 180) {
    validTriangle = true
    console.log(validTriangle)
}
else {
    validTriangle = false
    console.log(validTriangle)
}

//6. receba nome de peça de xadrex e retorne seu movimento
console.log("--exercicio 6--")

let pecaDeXadrex = "Rainha";
let lowerCasedPeca = pecaDeXadrex.toLowerCase();

switch(lowerCasedPeca) {
    case 'peão':
        console.log("move uma casa para frente, como às diagonais e pode se mover 2 casas se for o primeiro movimento")
        break;
    case 'torre':
        console.log("move-se na horizontal ou vertical, quantas casas quiser")
        break;
    case 'cavalo':
        console.log("move-se em 'L', 3 casas em uma direção e 2 em outra, só come a peça em que parar em cima")
        break;
    case 'bispo':
        console.log("move-se na diagonal, quantas casas quiser")
        break;
    case 'rei':
        console.log("move-se em qualquer direção, apenas uma casa")
        break;
    case 'rainha':
        console.log("move-se em qualquer direção, quantas casas quiser")
        break;
    default:
        console.log("erro, essa peça não existe")
}

//7. programa que converte pontuação em % pelo sistema de letras
console.log("--exercicio 7--")

let nota = 180;

if (nota >= 90 && nota <= 100) {
    console.log("Conceito A")
}
else if (nota >= 80 && nota < 90) {
    console.log("Conceito B")
}
else if (nota >= 70 && nota < 80) {
    console.log("Conceito C")
}
else if (nota >= 60 && nota < 70) {
    console.log("Conceito D")
}
else if (nota >= 50 && nota < 60) {
    console.log("Conceito E")
}
else if (nota >= 0 && nota < 50) {
    console.log("Conceito F")
}
else {
    console.log("Erro, valor inválido")
}

//8. 3 constantes e retornar true se pelo menos 1 for par 
console.log("--exercicio 8--")

const num7 = 2;
const num8 = 99;
const num9 = 43;
let validador;

if (num7 % 2 == 0 || num8 % 2 == 0 || num9 % 2 == 0) {
    validador = true;
    console.log(validador)
}
else {
    validador = false;
    console.log(validador);
}

//9. 3 constantes e retornar true se pelo menos 1 for ímpar 
console.log("--exercicio 9--")

const num10 = 6;
const num11 = 96;
const num12 = 42;
let validador2;

if (num10 % 2 !== 0 || num8 % 11 !== 0 || num12 % 2 !== 0) {
    validador = true;
    console.log(validador)
}
else {
    validador = false;
    console.log(validador);
}

//10. 