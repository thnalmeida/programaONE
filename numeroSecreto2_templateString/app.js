alert("Olá, mundo!"); //para exibir msg para o usuario, posso usar aspas simples ou duplas 
// uso ponto e virgula para identificar que acabou o comando

let numeroSecreto  = 10; //LET para criar variavel, = atribui valor à uma variavel
console.log('O numero secreto eh: ' + numeroSecreto)

let chute = prompt("Escolha um numero entre 1 e 10"); //PROMPT: para receber uma resposta do usuario
console.log('Nesse momento, o usuario irá chutar um numero para tentar acertar o numero secreto definido no codigo')

if(numeroSecreto == chute) {// == compara duas variaveis
    alert(`Parabens! Voce acertou! O numero secreto eh: ${numeroSecreto}`); //TEMPLATE STRINGS
} else{
    alert("Voce errou :( tente novamente! ") //vai exibir em caixa
}