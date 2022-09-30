const resultado = document.querySelector("#resultado");

//arrow function não acessa 'arguments' 

let myFunc = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

myFunc.showArguments(
    "BMW", 
    "AUDI", 
    "MERCEDES",
    "BENTLEY",
    "FERRARI",
    "LAMBORGHINI"
);

//arrow function não possui ou não acessa arguments.
let myFunc2 = {
    showArguments2: () => {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

// myFunc2.showArguments2(
//     "Corsa",
//     "Escort",
//     "Uno",
//     "Santana",
//     "Gol",
//     "Fusca",
//     "Kombi"
// );

//no arrow function não existe o this e nem o construtor
//O THIS NÃO EXISTE NO ARROW FUNCTION, NÃO POSSO USAR A PALAVRA NEW EM UMA ARROW FUNCTION POIS NÃO EXISTE O MÉTODO CONSTRUTOR, E O ARROW FUNCTION NÃO ACEITA ARGUMENTOS
let user = {
    name: "Marília S Barbosa",
    usandoArrow: () => {
        console.log(`Meu nome é ${this.name}, com Arrow Function.`);
    },
    usandoNominal() {
        console.log(`Meu nome é ${this.name}, com Nominal Function.`);
    },
};

user.usandoArrow();
user.usandoNominal();

let soma = (a, b) => {
    console.log(a + b);
}

let soma2 = function (a, b){
    console.log(a + b);
}

//new soma(50,20); //not constructor.
new soma2(50,20);

/**
 * Área que devemos controlar no JS
 * Array
 * Assíncrono
 * Funções
 * Eventos
 * Objetos
 * Estrutura de Controle e loops
 */