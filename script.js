function buscarCEP () {
   let inputCEP = document.getElementById('cep').value;

    if (inputCEP.length !== 8) {
        alert("CEP inválido!");
        return;
    }

   let url = `https://viacep.com.br/ws/${inputCEP}/json/`;

   fetch(url).then( response => {
        response.json().then(resultadoBusca);
   })
}

function resultadoBusca(dados) {
    let endereco = document.getElementById('resultado');

    if (dados.erro) {
        endereco.innerHTML = "Não foi possível localizar esse endereço."
    } else {
        endereco.innerHTML = `<p>${dados.logradouro}, ${dados.bairro}, ${dados.localidade}, ${dados.uf}</p>`
    }

}