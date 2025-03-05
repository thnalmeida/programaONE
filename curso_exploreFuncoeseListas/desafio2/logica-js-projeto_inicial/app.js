//Criar uma função que exibe "Olá, mundo!" no console.
//construo a função
function exibirMensagem(){
    console.log('Olá, mundo!');
}
//chamo a função
exibirMensagem();

////Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
//construo a função
function exibirSegundaMensagem(nome){
    nome = prompt('Digite seu nome: ');
    console.log(`Olá, ${nome}!`);
}
//chamo a função
let nome = exibirSegundaMensagem(); //chamo a função

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
//construo a função
function exibirDobro(){
    let numero = prompt('Digite um numero: ');
    let dobro = Number(numero) * 2;
    console.log(`O dobro do numero digitado é: ${dobro}`);
}
//chamo a função
let numero = exibirDobro();

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(numero1, numero2, numero3){
    numero1 = prompt('Digite um numero: ');
    numero2 = prompt('Digite um numero: ');
    numero3 = prompt('Digite um numero: ');
    let media = (Number(numero1) + Number(numero2) + Number(numero3)) / 3;
    console.log(`A média dos 3 números digitado é: ${media}`);
}
//chamo a função
let media = calcularMedia();

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero4, numero5){
    numero4 = prompt('Digite um numero: ');
    numero5 = prompt('Digite um numero: ');
    if (Number(numero4) > Number(numero5)){
        console.log(`O maior numero eh: ${numero4}`);
    } else {
        console.log(`O maior numero eh: ${numero5}`);
    }
}
//chamo a função
maiorNumero();

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function exibirMultiplicacao(numero6){
    numero6 = prompt('Digite um numero: ');
    let multiplicacao = Number(numero6) * Number(numero6);
    console.log(`A multiplicacao desse numero por ele mesmo eh: ${multiplicacao}`);
}
//chamo a função
let numero6 = exibirMultiplicacao();
