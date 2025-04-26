/*
4.   Somando Valores com um Loop for.

Crie um array com vários números inteiros.
Use um loop for para somar todos os números do array.
Exiba o resultado da soma no console.

Exemplo de entrada array = [5, 5, 10], saída esperada: 20.
*/

const numeros = [4, 5, 6];
let soma = 0; 

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]; 
}

console.log("A soma de todos os números é:", soma);