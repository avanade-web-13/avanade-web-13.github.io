const produto = document.querySelector('#title');

const showData = async (result) => {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo];
        }
    }
}

// const showProducts = async(e) => {
//     const options = {
//         method: 'GET',
//         mode: 'cors', 
//         cache: 'default',
//     };

//     const itens = await fetch(`https://dummyjson.com/products`, options) 
//     const json = await itens.json();

//     for(i = 0; i < 10; i++) {
//         console.log(json.products[i]);
//     }
// }


produto.addEventListener("blur", async (e) => {
    
    const options = {
        method: 'GET',
        mode: 'cors', 
        cache: 'default',
    };

    const itens = await fetch(`https://dummyjson.com/products`, options) 
    const json = await itens.json();

    for(i = 0; i < 10; i++) {
        console.log(json.products[i]);
    }

    showData(json);

});
