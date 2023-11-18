// Aninhando Objetos e usando métodos de ARRAY para manipular
// 

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

// Já temos um objeto na lista, para adicionar mais objetos vamos usar o método push de array

cliente.enderecos.push({ 
  rua: "R. Joseph Climber2",
    numero: 1237,
    apartamento: false,
    complemento: "esquina",
})


  //acessando a lista de endereços

  //console.log(cliente.enderecos);

  //Criar uma lista de objetos traz o benefícios de podermos usar os métodos das listas(arrays) nos objetos

    //Usando o FILTER para filtrar os objetos
  const listaApenasApartamentos = cliente.enderecos.filter((endereco) => {

        return endereco.apartamento === true;

  })

  console.log(listaApenasApartamentos);


