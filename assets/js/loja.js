const produto = document.querySelector('#title');

const showData = async (json) => {
        
    }

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

});