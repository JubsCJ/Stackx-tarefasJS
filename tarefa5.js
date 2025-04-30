/* 5. Somando Valores com um Loop  whileLinks to an external site.

Crie um array com vários números inteiros.
Use um loop while Links to an external site.para somar todos os números do array.
Exiba o resultado da soma no console.

Exemplo de entrada array = [5, 5, 10], saída esperada: 20.
 */

const numeros = [4, 5, 6];
let soma = 0;
let i = 0;

while (i < numeros.length) {
      soma += numeros[i];
      i++
    }

    console.log("A soma de todos os números é: ", soma);


