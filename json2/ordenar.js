//Utilizando o método SORT para ordenar uma lista do JSON

const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {

    const resultado = lista.sort((a, b) => {
        
        //Estas condicionais se referem ao modo padrão que a função SORT funciona
        if(a[propriedade] < b[propriedade]) {
            return -1;
        }

        if (a[propriedade] < b[propriedade]) {

            return 1;
        }

        return 0;
    })

    return resultado;
}

const ordenarPorNome = ordenar(clientes, "nome");

console.log(ordenarPorNome);