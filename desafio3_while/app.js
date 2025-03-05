//DESAFIO - CONTADOR

//desafio 1
//Crie um contador que comece em 1 e vá até 10 usando um loop while. 
//Mostre cada número.
let numero = 1;
let numero2 = 10;
let cont = 0;

while (numero < 11){
    alert(`${numero}`);
    numero++; //iteração
}

//desafio 2
// Crie um contador que começa em 10 e vá até 0 usando um loop while. 
//Mostre cada número.

while(numero2 >= 0){
    alert(`${numero2}`);
    numero2--;
}

//desafio3
//Crie um programa de contagem regressiva. 
// Peça um número e conte deste número até 0, 
// usando um loop while no console do navegador.

let tempo = prompt('Digite o tempo desejado para a contagem regressiva: ');

while (tempo >= 0){
    alert(`${tempo}`);
    tempo--;
}

//desafio4
//Crie um programa de contagem progressiva. 
//Peça um número e conte de 0 até esse número, 
//usando um loop while no console do navegador.
let tempo2 = prompt('Digite o tempo desejado para a contagem progressiva: ');
while(cont <=  tempo2){
    alert(`${cont}`)
    cont++;
}