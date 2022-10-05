const carros = document.querySelector("#carros");
const aerea = document.querySelector('#compAereas');
//const menu = document.querySelector("#menu");
//document.getElementById - sempre existiu.
const carrosArray = [
    "Chevrolet",
    "Fiat",
    "Ford",
    "Honda",
    "Hyunday",
    "Kia",
    "Mazda",
    "Mercedes-Benz",
    "Nissan",
    "Peugeot",
    "Renault",
    "Toyota",
    "Volkswagen",
];

carrosArray.forEach((value, key) => {
    carros.innerHTML += `<option value="${key}">${value}</option>`
});

// carrosArray.forEach((value) => console.log(value));

// const importados = [
//     ["BMW","320i","M3","M4","X5","X6","Z4 m40i"],
//     ["Audi","a4","s4","s4 Avanti","Q7","RS7","e-Tron"],
//     ["Mercedes","GTR","E63","S63","Brabus Gle","AMG G63"]
// ]

// importados.forEach((marcas) => {

//     const select = document.createElement("select");

//     select.setAttribute("id", marcas[0]);

//         marcas.forEach((carros, key) =>{
//             select.innerHTML += `<option value="${carros}">${carros}</option>`
//         });
//         document.querySelector("body").appendChild(select);
//     });

const companhiaAerea = [
    "Delta",
    "United Airlines",
    "Emirates",
    'Latam',
    'Gol',
    'Azul',
    "Qatar"
];

companhiaAerea.forEach((value, key) => {
    aerea.innerHTML += `<option value="${key}">${value}</option>`
});

// companhiaAerea.forEach((value) => {
//     menu.innerHTML += `<ul>
//                             <li> <a href="#">${value}</a></li>
//                         </ul>`
// });


const menu = [
    "Todos",
    "Venda na Amazon",
    "Ofertas do Dia",
    "Prime",
    "Eletrônicos",
    "Ideias para Presente",
    "Brinquedos e Jogos",
    "Computadores",
    "eBooks Kindle",
    "Games",
    "Ferramentas e Construção",
    "Livros",
];

const ulMenu = document.createElement("ul");
ulMenu.setAttribute("id", "menu");
ulMenu.setAttribute("class", "menu-site");

menu.forEach((value, index) => {
    ulMenu.innerHTML += `<li><a href="#">${value}</a></li>`;
});

document.querySelector("nav").appendChild(ulMenu);

////////////////////////////////////////////////////////

const newCarros = ["Corsa", "Uno", "Gol", "Palio", "Kombi", "208"];

//adicionar um elemento no FINAL do array. Push
newCarros.push("Celta", "Monza");

//adicionar um elemento no INICIO do array. Unshift
newCarros.unshift("Fusca");

//remover um elemento no FINAL do array. Pop
const ultimo = newCarros.pop(); //retorna o elemento removido

//remove o elemento do INICIO do array. Shift
const primeiro = newCarros.shift(); //retorna o elemento removido

const nomeCompleto = "Marilia Santos Barbosa";

//split - pega um texto e transforma em array, é necessário mostrar onde "corta/transforma" em array
const nomeArray = nomeCompleto.split(' ');

//join - pega um array e transforma em string
const americanName = [nomeArray.at(-1), nomeArray[0]].join(', ');

//splice remove do array original, o primeiro parâmentro é o inicio e o segundo parâmetro é quantidade
const removeUm = newCarros.splice(0, 3); //splice remove qualqer item independente do intervalo e posição

//slice gera um novo array e o segundo parâmentro dele é o fim de onde quero cortar, menos o fim
const frutas = ["Banana","Maça","Pera","Uva","Melancia"];

const primeiras = frutas.slice(1,3);
//console.log(primeiras, "slice - O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.");

//console.log(removeUm, "Remove um, splice")
//console.log(americanName, "Formato Americano");
//console.log(newCarros, "NewCarros");

//push, pop
//shift, unshift
//splice
//split
//join

//Programação Funcional - imutabilidade, os dados não mudam. O array original não é alterado
//splice - copia o array
const filtro = (item) => {
    return item === "Pera" || item === "Maça";
    //return item.toLowerCase();
};

//map - retorna um novo array com os itens filtrados, ele passa do início ao fim
const frutasMap = frutas.map(filtro);
//console.log(frutasMap);

//filter - ele retorna um novo array somente com os dados verdadeiros,
const frutasFilter = frutas.filter(filtro);
//console.log(frutasFilter);

//find - ele retorna o primeiro parâmetro solicitado que for true
const frutasFind = frutas.find(filtro);
//console.log(frutasFind);

//const age = []
// três funções com filtro de idade
// map - classificação - mapAge
//filter - só os adultos - filterAge
//find - primeiro idoso - findAge

const age = [1, 4, 7, 9, 42, 90, 30, 22, 18, 11, 55, 61];

const mapAge = age.map((age) => {
    if(age >= 0 && age <= 2){
        return "Bebê";
    } else if (age >= 3 && age <= 11){
        return "Criança";
    } else if (age >= 12 && age <= 17){
        return "Adolescente";
    } else if (age >= 18 && age <= 59){
        return "Adulto";
    } else {
        return "Idoso";
    }
});
console.log(mapAge, "mapAge");

const filterAge = age.filter((age) => age >= 18 && age <= 60);
console.log(filterAge, "adulto");

const findAge = age.find(((age) => age >= 60 ));
console.log(findAge, "idoso");