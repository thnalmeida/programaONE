//desafio1
//Crie um programa que utilize o console.log para exibir uma mensagem 
// de boas-vindas.
console.log('Boas vindas :)')

//desafio2
//Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o console.log para exibir a mensagem "Olá, 
// [seu nome]!" no console do navegador.
let nome = 'Thayná';
console.log(`Olá, ${nome}`); //uso de template string para concatenar

//desafio3
//Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}`);

//desafio4
//Utilize o prompt e faça a seguinte pergunta: 
// Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console 
// do navegador.
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

//desafio5
//Crie uma variável chamada "valor1" e outra chamada "valor2", 
// atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado
//  em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] 
// e [valor2] é igual a [resultado]." no console.

let valor1 = 5;
let valor2 = 3;
let resultado = 5 + 3;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//desafio6
//Crie uma variável chamada "valor1" e outra chamada "valor2", 
// atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a subtração desses dois valores e 
// armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let resultadoDiferenca = 5 - 3;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultadoDiferenca}`);

//desafio7
//Peça ao usuário para inserir sua idade com prompt. 
// Com base na idade inserida, utilize um if para verificar se a 
// pessoa é maior ou menor de idade, 
// exibindo uma mensagem apropriada no console.
let idade = prompt('Qual a sua idade?');
if (idade >= 18){
    console.log('É maior de idade!');
}else{
    console.log('É menor de idade!');
}

//desafio8
//Crie uma variável "numero" e peça um valor com prompt verifique 
// se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Digite um número qualquer: ');
if(numero > 0){
    alert('O número digitado é positivo!!!');
}else{
    alert('O número digitado é negativo');
}

//desafio9
//Use um loop while para imprimir os números de 1 a 10 no console.
let numeroA = 0;
while(numeroA <= 10){
    console.log(numeroA);
    numeroA++;
}

//desafio10
//Crie uma variável "nota" e atribua um valor numérico a ela. 
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba 
// "Aprovado" ou "Reprovado" no console.
let nota = 6.5;
if(nota >= 7){
    console.log('Aprovado!');
}else{
    console.log('Reprovado!');
}

//desafio11
//Use o Math.random para gerar qualquer número aleatório e 
// exiba esse número no console.
let numeroB = (Math.random());
console.log(numeroB);

//desafio12
//Use o Math.random para gerar um número inteiro entre 1 e 10 
//e exiba esse número no console.
let numeroC = parseInt(Math.random() * 10 + 1);
console.log(numeroC);

//desafio13
//Use o Math.random para gerar um número inteiro entre 1 e 1000 
// e exiba esse número no console.
let numeroD = parseInt(Math.random() * 1000 + 1);
console.log(numeroD);
