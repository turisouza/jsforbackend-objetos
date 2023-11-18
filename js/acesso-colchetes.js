//Acessando o valor de um objeto que está salvo em um propriedade

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };

  console.log(cliente["nome"]); // Andre    

// neste código temos o acesso as propriedades do objeto com colchetes e aspas
// diferente do uso do ponto que é mais comum

  console.log(`Os 3 primeiros digitos do CPF são ${cliente["cpf"].substring(0, 3)}`);
  //Usando o método SUBSTRING para definir quantos caracteres queremos retornar

  //Notação de colchete
//Com esta sintaxe de colchetes para acesso das propriedades
//Usamos quando não sabemos os valores do Objeto.
//Por exemplo, digamos que tenhamos uma lista com o nome das chaves somente

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {

    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);

})