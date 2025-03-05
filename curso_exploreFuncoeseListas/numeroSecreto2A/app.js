let titulo = document.querySelector('h1'); //seleciona o elemento HTML com a tag `<h1>` e armazena uma referência a ele na variável `titulo`. 
// Isso nos permite manipular o conteúdo desse elemento posteriormente.
titulo.innerHTML = 'Jogo do Número Secreto';// altera o conteúdo interno (innerHTML) do elemento `<h1>` selecionado, 
// substituindo o texto original pelo novo texto "Bem-vindo ao mundo dev".

let paragrafo = document.querySelector('p'); //p é a tag do paragrafo indicado na linha 23
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//habilitacao do botao CHUTAR = criar FUNÇÃO
function verificarChute() {
    console.log('O botão foi clicado.');
}