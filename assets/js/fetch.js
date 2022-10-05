const cep = document.querySelector('#cep');

const showData = async (result) => {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo];
        }
    }
}

//blur = quando o usuário sai do campo
cep.addEventListener("blur", async (e) => {
    //erro mais comum com o JavaScript em um formulãrio é pegar o value fora do evento
    let search = cep.value.replace("-","");

    if (search.length < 8 || isNaN(search)) {
        alert("CEP inválido");
        cep.value = "";
        return;
    }

    const options = {
        method: 'GET',
        mode: 'cors', //cors - Cross Origin Resource Sharing - é um protocolo que permite que um site acesse recursos de outro site
        cache: 'default',
    };

    //https://viacep.com.br/ws/03188001/json

    //fetch vai gerar uma promise = promessa de algo que vai acontecer
    //se der certo retorna o resultado. Se der erro, ele vai retornar um erro.
    //se der certo nós resolvemos a promise. Se der errado, nós rejeitamos a promise.
    //promisse é uma função que recebe dois parâmetros: resolve e reject (é uma intenção que pode dar certo ou errado)
    const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        
    const json = await resultado.json();

    showData(json);

    //assincrono = "sem que o usuário perceba" - assincrono é quando o usuário não percebe que está acontecendo algo no background
    //async = assincrono e o await = aguardar são primos, onde um está o outro está
    //await = aguardar 
    //XHR = XML HTTP Request = requisição HTTP em XML
    //AJAX = Asynchronous JavaScript And XML = JavaScript assíncrono e XML
    //fetch = API nativa do JavaScript que faz requisições HTTP
    //axios = biblioteca que faz requisições HTTP

});