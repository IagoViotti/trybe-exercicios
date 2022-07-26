
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
//exercicio 1
console.log('--exercicio 1--')

console.log('Bem-vinda, ' + info.personagem)

//exercicio 2
console.log('--exercicio 2--')

info.recorrente = 'Sim'

console.log(info)

//exercicio 3
console.log('--exercicio 3--')

for (let key in info) {
    console.log(key);
}

//exercicio 4
console.log('--exercicio 4--')

for (let key in info) {
    console.log(info[key]);
}

//exercicio 5
console.log('--exercicio 5--')


