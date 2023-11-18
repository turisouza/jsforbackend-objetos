//Acessando o valor de um objeto que está salvo em um propriedade
// Acesso com a notação de ponto

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };

  console.log(cliente.nome); // Andre
  //Utilizando um método para acessar uma propriedade do objeto

  console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
  //Aqui usamos o método SUBSTRING para definir quais caracteres vamos retornar
