alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas :)`);
    } else {
        if(chute > numeroSecreto){
            alert(`Você errou! O número secreto é menor que ${chute}`); //templatestring, uso de crase no lugar de aspas simples 
        } else {
            alert(`Você errou! O número secreto é maior que ${chute}`);
        }
        tentativas++; // tentativas = tentativas + 1
}


}