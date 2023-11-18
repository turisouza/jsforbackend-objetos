// Criando funções dentro do objeto`

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "4332423424"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        //Aqui usamos o this para acessar uma propriedade dentro do próprio objeto
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente")
        } else {
            const novoSaldo = this.saldo - valor;
            console.log(`Compra Efetuada com Sucesso. O novo saldo é de ${novoSaldo}`);
        }
    }
  };

  cliente.efetuaPagamento(20);
