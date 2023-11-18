//Utilizando o FILTER para filtrar objetos dentro de uma lista
//Usamos aqui também o HASOWNPROPERTY para confirmar se uma chave de um objeto de uma propriedade

const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes){

    return clientes.filter((cliente) => {

        return cliente.endereco.apartamento === true && !cliente.endereco.hasOwnProperty("complemento")
        //Como é um boleano o === true poderia ser omitido.
        //Usamos a exclamação para negar a segunda afirmação
        //Usamos aqui a propriedade hasOwnProperty para conferir se ele tem um propriedade
    })

}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados)