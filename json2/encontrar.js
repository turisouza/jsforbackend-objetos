//Usando o FIND e o INCLUDES para buscar objetos dentro de um ARRAY

const cliente = require("./clientes.json");

function encontrar(lista, chave, valor) {

    //Utilizando a função/método FIND de Array para buscar um objeto em um ARRAY
    return lista.find((item) => item[chave].includes(valor));
    //Utilizando também a função/método INCLUDES para ver se o valor está incluído
}

const encontrado = encontrar(cliente, "nome", "Kirby");

console.log(encontrado);