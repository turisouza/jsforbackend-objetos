//Nova forma de obter as chaves do objeto
//Use command + / para comentar várias linhas
//Uso da classe Object.keys para receber as chaves do objeto


const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "4332423424"],
  };

//Agora iremos criar uma lista de objetos

  cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

//Uso da classe Object.keys para receber as chaves do objeto
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

//aqui vamos criar uma condicional para confirmar se o cliente tem o endereço cadastrado
if (!chavesDoObjeto.includes("enderecos")) {
  //Uso do INCLUDES para buscar propriedades específicas

    console.error("Erro. É necessário ter um endereço cadastrado.")

}