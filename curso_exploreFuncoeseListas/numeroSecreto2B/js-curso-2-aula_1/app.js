//let titulo = document.querySelector('h1'); //seleciona o elemento HTML com a tag `<h1>` e armazena uma referência a ele na variável `titulo`. 
// Isso nos permite manipular o conteúdo desse elemento posteriormente.
//titulo.innerHTML = 'Jogo do Número Secreto';// altera o conteúdo interno (innerHTML) do elemento `<h1>` selecionado, 
// substituindo o texto original pelo novo texto "Bem-vindo ao mundo dev".

//let paragrafo = document.querySelector('p'); //p é a tag do paragrafo indicado na linha 23
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

//funcao que é executada mas nao retorna nada, nenhuma informacao
//criando a função para fazer as linhas de codigo acima
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//executando a função
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

//funcao sem parametro e nem retorno
//habilitacao do botao CHUTAR = criar FUNÇÃO
function verificarChute() {
    let chute = document.querySelector('input').value; //value para pegar apenas o numer digitado
    console.log(chute == numeroSecreto); // tipo boleano (true, false)
}

//funcao sem parametro mas com retorno
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1); //parseInt transforma em numero inteiro
}

//3 tipos de funcoes:
// funcao com retorno, com parametros, sem retorno e sem parametros


