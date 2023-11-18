// Iterando e percorrendo objetos
// USando o FOR IN para iterar objetos

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "4332423424"],
  };


  for (let chave in cliente) {

    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }

  //Se dentro deste Objeto tivesse um objeto ou função
  //Teria que ser feita uma conficional (segue abaixo)
  //let tipo = typeof cliente[chave];
  //if (tipo !== 'Object' && tipo !== 'function) {então aqui entraria o console.log}