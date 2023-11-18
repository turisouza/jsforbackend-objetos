// Aninhando Objetos

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "4332423424"],
  };

//console.log(cliente);

  cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  };

  //console.log(cliente.endereco); //ou
  //console.log(cliente["endereco"]);

  //acessando uma propriedade do endereço

  console.log(cliente.endereco.rua);


