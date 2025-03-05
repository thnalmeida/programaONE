alert("Olá, mundo!"); //para exibir msg para o usuario, posso usar aspas simples ou duplas 
// uso ponto e virgula para identificar que acabou o comando

let numeroSecreto  = 2; //LET para criar variavel, = atribui valor à uma variavel
console.log(numeroSecreto)
let chute = prompt("Escolha um numero entre 1 e 10"); //PROMPT: para receber uma resposta do usuario

if(numeroSecreto == chute) {// == compara duas variaveis
    alert(`Parabens! Voce acertou! O numero secreto eh: ${numeroSecreto}`); //TEMPLATE STRINGS
} else{
    alert("Voce errou :( tente novamente! ") //vai exibir em caixa
}