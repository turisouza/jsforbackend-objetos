//Fazendo espalhamento das propriedades de um objeto com o spread operatos (...)

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

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para o ${telefoneComercial}`)
    console.log(`Ligando para o ${telefoneResidencial}`)

}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);