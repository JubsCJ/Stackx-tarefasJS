/*2.  Removendo e Substituindo Elementos com Splice

Crie um array com 6 nomes de animais.
 Use o método spliceLinks to an external site. para remover 2 animais a partir da terceira posição e substituí-los por outros 2 animais diferentes.
 Exiba o array resultante no console.
Exemplo de 

entrada array = [leão, capivara, calopsita, onça, gavião, porco], 
saída esperada = [leão, capivara, calopsita, tigre, cavalo, porco]*/


const animais = ["Tubarão", "Cobra","Aranha","Gavião","Falcão","Águia"];

animais.splice(3, 2, "Urso", "Leão");

console.log(animais);
//console.log(animais.flat());