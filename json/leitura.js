//O uso do JSON para guardar Objetos se deve principalmente pela facilidade de transmissão de informações de uma string

//Aqui vamos utilizar a função require para buscar os dados do objeto cliente.json
const dados = require("./cliente.json");
//A partir deste momento a constantes dados está contendo um objeto

console.log(dados);

//Usando o TYPEOF para definir o tipo do arquivo

console.log(typeof dados);

//Aqui vamos transformar o objeto contido na contante dados em uma string
const clienteEmString = JSON.stringify(dados);
//Usamos para isso o objeto JSON e a função stringify

console.log(clienteEmString);
console.log(typeof clienteEmString);

//Após transformarmos em string, podemos retornar este valor para um objeto
const objetoCliente = JSON.parse(clienteEmString);
//Usamos o PARSE para fazer a conversão de uma string em um objeto

console.log(objetoCliente);
