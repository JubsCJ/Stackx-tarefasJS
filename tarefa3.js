/* 
3.   Verificando Condição com Estruturas de Controle

Crie um array com vários números, incluindo alguns maiores que 50.
Use estruturas de controle simples para verificar se há pelo menos um número maior que 50.
Exiba uma mensagem no console informando o resultado.

Exemplo de entrada array = [10, 20, 30, 40, 60], saída esperada: “O array possui 1 número maior que 50ˮ.
*/

const numeros = [2, 4, 6, 20, 35, 50, 65];
let tem_maior_que_50;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 50) {
        tem_maior_que_50 = true
        break
    }
}
if (tem_maior_que_50) {
    console.log("O array contém pelo menos um número maior que 50.")
}
else {
    console.log("O array não contém nenhum número maior que 50.")
}
