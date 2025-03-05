alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1); // + 1 para ir de 1 a 100 
//Math.random eh uma função que gera numeros aleatorios no intervalo de 0 a 1 exceto o 1
//parseInt pega apenas a parte inteira depois de multiplciar por 10
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break; //para e nao executa mais o bloco de codigo if
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}
// como a execução do codigo ao acertar com uma tentativa, gerava um erro de concordancia
// do plural, pois aparecia: voce acertou com 1 TENTATIVAS, precisamos corrigir. uma forma de fazer: 

//operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // : SENAO
alert(`Parabens! Voce acertou o numeroSecreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}