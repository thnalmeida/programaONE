//Criar uma função que exibe "Olá, mundo!" no console.
//construo a função
function exibirMensagem(mensagem){
    console.log(mensagem);
}
//chamo a função
exibirMensagem('Olá mundo!');

////Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
//construo a função
function exibirSegundaMensagem(nome){
    console.log(`Olá, ${nome}!`);
}
//chamo a função
exibirSegundaMensagem('Thayná'); //chamo a função

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
//construo a função
function exibirDobro(numero){
    let dobro = Number(numero) * 2;
    console.log(`O dobro do numero digitado é: ${dobro}`);
}
//chamo a função
exibirDobro(2);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(numero1, numero2, numero3){
    let media = (Number(numero1) + Number(numero2) + Number(numero3)) / 3;
    console.log(`A média dos 3 números digitado é: ${media}`);
}
//chamo a função
calcularMedia(2,4,6);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero4, numero5){
    if (Number(numero4) > Number(numero5)){
        console.log(`O maior numero eh: ${numero4}`);
    } else {
        console.log(`O maior numero eh: ${numero5}`);
    }
}
//chamo a função
maiorNumero(3,45);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function exibirMultiplicacao(numero6){
    let multiplicacao = Number(numero6) * Number(numero6);
    console.log(`A multiplicacao desse numero por ele mesmo eh: ${multiplicacao}`);
}
//chamo a função
exibirMultiplicacao(6);
