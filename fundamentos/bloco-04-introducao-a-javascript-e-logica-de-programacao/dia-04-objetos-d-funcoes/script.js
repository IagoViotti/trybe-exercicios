//conteudo objetos
console.log('--conteudo objetos--')

let player =  {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade.')

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018],

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes.')

console.log('A jogadora possui ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals['silver'] + ' medalhas de prata.')

//conteudo for/of
console.log('--conteudo pra fixar 1, for/of--')

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
}

for (let nome in names) {
    console.log('Olá ',names[nome])
}

//conteudo for/in
console.log ('--conteudo pra fixar 2, for/in--')

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020,
}

for (let keys in car) {
    console.log(keys + ': ' + car[keys])
}