//var nome; //hosting - iça a variável

//console.log(nome, "chamando a variável usando o var");

//const nome = "Avanade";

/**
 * Existem 7 tipos de erros em JavaScript
 * ---------------------
 * SyntaxError - Escreveu alguma coisa errada.
 * ReferenceError - Chamou alguém que não existe.
 * TypeError - Erro de tipo é um violação do JavaScript.
 * EvalError - Evite o uso do comando eval, mas se ele for inválido.
 * RangeError - Erro de intervalo, loop infinito, ou chamadas inúmeras de recursividade.
 * URIError - Erro referente a chamadas externas. Uniform Resource Indetifier.
 * InternalError - Erro interno do JavaScript, falta de memória, processador ...
 */

/**
 * dentro do JavaScript existem 4 tipos de funções
 * 2 passos para trabalhar com funções cria-lá e chama-la
 * 1ª função - nominal e sofre hoisting 
 * 2ª função - expressão de função (variável que recebe uma função)
 * 3ª função - função anônima precisa de um contexto - Não posso criar ela solta, ou coloco ela como o valor da variável ou passamos como parâmetro - não tem nome
 * 
 * 
 * arrow funcition é a função mais simples que existe, é escrita () => {} (só preciso da chave se existir mais de uma instrução) - só para coisas simples
*/

escreve("Museu do Ipiranga");
//função nominal
function escreve(x){
    console.log(x);
}

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = "<i>" + novoTitulo + "</i>";
}

mudaTitulo("Vai Corinthians!");

//expressão de função - function expression - quando criamos uma varíavel ou constante onde o valor dela é uma função
//função anônima - não tem nome
const mudaTitulo2 = function(target, novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h2", "Trocando subtítulo");

//arrow function
const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
}

setInterval(relogio, 1000);

const exemplo = x => console.log(x);

exemplo("teste");

const frases = [
    "Um banco para 20 milhões de pessoas", 
    "C6 Bank o seu banco", 
    "Cartão de crédito sem anuidade"
];

const mudaFrase = (target, frases, tempo) => {
let total = 0;

    setInterval (() => {
        document.querySelector(target).innerHTML = frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];
    }, tempo * 1000);
}

mudaFrase ("h1", frases, 4);
