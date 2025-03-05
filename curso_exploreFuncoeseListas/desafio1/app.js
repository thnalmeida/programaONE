//Altere o conteúdo da tag h1 com document.querySelector e atribua 
// o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clicarConsole(){
    console.log('O botão Console foi clciado!');
}

function clicarAlert(){
    alert('Eu amo JS');
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function clicarPrompt(){
    cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function clicarSoma(){
    let numero1 = prompt('Digite um numero: ');
    let numero2 = prompt('Digite um numero: ');
    let soma = Number(numero1) + Number(numero2);
    alert(`A soma dos dois numero é igual a ${soma}`);
}
