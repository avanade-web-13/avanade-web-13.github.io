const aereasNacional = [
    'Latam',
    'Gol',
    'Azul'
];

const [latam, gol, azul] = aereasNacional;
console.log(Azul);

const airCompanies = [
    ...aereasNacional, 
    "Delta",
    "United Airlines",
    "Emirates"
];

console.log(airCompanies);

const user = {
    name: "Marilia S Barbosa",
    email: "msant.barbosa@gmail.com",
    password: "FGMREFOSd!324v"
};

//destructuring assignment
const {password, ...data} = user;

console.log("Oh meu Deus!", data);