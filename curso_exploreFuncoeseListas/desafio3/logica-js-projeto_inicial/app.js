//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, 
// em quilogramas, que serão recebidos como parâmetro.
//construo a funcao
function calcularImc(peso, altura) {
    let IMC = peso / (altura * altura);
    console.log(IMC);
}
//chamo a funcao
calcularImc(47, 1.5);

//Crie uma função que converte um valor em dólar, 
// passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.
//construo a funcao
function conversaoReal(valorEmDolar){
    let valorEmReal = valorEmDolar * 4.80;
    console.log(valorEmReal);
}
//chamo a funcao
conversaoReal(100);

//Crie uma função que mostre na tela a área e o perímetro de uma sala 
// retangular, utilizando altura e largura que serão dadas como parâmetro.
//construo a funcao
function calcularMedidas(altura, largura){
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);
    alert(`A sala tem ${area}m² e seu perimetro é de ${perimetro} metros`);
}
//chamo a funcao
calcularMedidas(3,4);

//Crie uma função que mostre na tela a área e o perímetro de uma sala 
// circular, utilizando seu raio que será fornecido como parâmetro. 
// Considere Pi = 3,14.
//construo a funcao
function calcularAreaCircular(raio){
    let area = (raio * raio) * 3.14;
    alert(`O terreno tem ${area}m²`);
}
//chamo a funcao
calcularAreaCircular(2);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
//construo a funcao
function chamarTabuada(numero){
    alert(`A tabuada de ${numero} é: 
        ${numero * 1}
        ${numero * 2}
        ${numero * 3}
        ${numero * 4}
        ${numero * 5}
        ${numero * 6}
        ${numero * 7}
        ${numero * 8}
        ${numero * 9}
        ${numero * 10}`)
}
//chamo a funcao
chamarTabuada(4);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.