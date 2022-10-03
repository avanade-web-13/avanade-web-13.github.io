const carros = document.querySelector("#carros");
const aerea = document.querySelector('#compAereas');
const menu = document.querySelector("#menu");
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

carrosArray.forEach((value, key) =>{
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
        'Azul'
    ];

    companhiaAerea.forEach((value, key) =>{
        aerea.innerHTML += `<option value="${key}">${value}</option>`
    });

    companhiaAerea.forEach((value) => {
        menu.innerHTML += `<ul>
                                <li> <a href="#">${value}</a></li>
                            </ul>`
    });