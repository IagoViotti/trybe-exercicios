//exercício 1 -- array
console.log('--exercicio 1--')

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//exercício 2 -- array
console.log('--exercicio 2--')

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf('Portfólio');

console.log(indexOfPortfolio);

//exercicio 3 -- array
console.log('--exercicio 3--')

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato')

console.log(menu3);

//exercicio 1 -- for
console.log('--exercicio 1--')

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index ++) {
    console.log(groceryList[index])
} 

//exercicio 1 -- for/of
console.log('--exercicio 1--')

let names = ['João', 'Maria', 'Antônio', 'Margarida']
for (let elementosDaLista of names) {
    console.log(elementosDaLista)
}