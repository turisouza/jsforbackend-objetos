//Alterando as propriedades de um objeto

const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };

  console.log(pessoa);


  pessoa.telefone = "11 999755043";
  //adicionamos uma nova propriedade ao objeto

  pessoa.nome = "Luma Silva";
  //Alterarmos uma propriedade do objeto
  //Mas o programa só vai reconhecer esta alteração após este código, antes dele permanecerá a antiga

  //para excluir uma propriedade utilizamos o operador delete

  console.log(pessoa);

pessoa.time = "Flamengo";

console.log(pessoa);

delete pessoa.nome;

console.log(pessoa);
