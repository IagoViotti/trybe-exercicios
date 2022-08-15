//PARTE I
//exercicio 1
const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

//exercicio 2 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = array => array.sort((a,b)=>a-b)

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`)
//PARTE II

 const fatorial = (numInteiro) => {
    for(let index = 0; index < numInteiro; index += 1) {
        let resultado *= index;
        return resultado
    };
}

console.log(fatorial(3))