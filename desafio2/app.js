//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
// mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaSemana = prompt('Qual é o dia da semana?');

if (diaSemana == 'Sabado' || diaSemana == 'Domingo' ){
    alert('Bom fim de semana!');
}else{
    alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número: ');

if(numero > 0){
    alert(`O numero digitado ${numero} é positivo!`);
}else{
    alert(`O numero digitado ${numero} é negativo!`);
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
// Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Digite a sua pontuação no jogo: ');
if (pontuacao >= 100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.')
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.
let saldoConta = prompt('Digite o saldo da sua conta: ');
alert(`O valor do saldo da sua conta é: R$ ${saldoConta}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Digite o seu nome: ');
alert(`Olá, ${nome}, seja bem vinda! :)))`);