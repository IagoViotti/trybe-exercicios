
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

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Del's four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (let keys in info) {
    console.log(info[keys] + ' e ' + info2[keys])
}

if (info.recorrente === info2.recorrente) {
    console.log('Ambos recorrentes')
}
else {
    info.recorrente + ' e ' + info2.recorrente
}

//exercicio 6
console.log('--exercicio 6--')

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'")

//exercicio 7
console.log('--exercicio 7--')

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)

 console.log(leitor.livrosFavoritos)

 //exercicio 8
 console.log('--exercicio 8--')

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

