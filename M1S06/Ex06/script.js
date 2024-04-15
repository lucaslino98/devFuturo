let cep = prompt("Digite seu CEP: ")

fetch(`https://viacep.com.br/ws/${cep}/json`, { method: 'GET' })
    .then((retornoFetch) => {
        return retornoFetch.json();
    }).then((retornoApi) => {
        alert(`${retornoApi.logradouro}, ${retornoApi.complemento} -
 ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);
    })