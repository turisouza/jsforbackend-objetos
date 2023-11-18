//Criando Classes no JS
//Classes no JS são como se fossem funções
//Diferenças para funções
// - Classes não são hoisted (içadas para o início do código)
// - Elas só podem ser chamadas após serem declaradas
// - Classes não recebem parâmetros, apenas o constructor

class livro {
    constructor(nome, editora, paginas) {
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;

    }

    //os métodos das classes não precisam da palavra chave function
    anunciarTitulo() {

        console.log(`Título: ${this.nome}`);
    }

    //os métodos das classes não precisam da palavra chave function
    descreverTitulo() {

        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const nodeJS = new livro("Primeiros passos com NodeJS", "Casa do Código", 195);

nodeJS.anunciarTitulo()
nodeJS.descreverTitulo();

//É possível também criar um classe que herde as propriedades de uma outra

//Utilizamos a palavra chave EXTENDS para herdar as propriedades da classe livro
class livroColecao extends livro {

    constructor(nome, nomeColecao) {
        //Aqui usamos a palavra chave SUPER para puxar a propriedade nome da outra classe
        super(nome);
        this.nomeColecao = nomeColecao;

    }

    //os métodos das classes não precisam da palavra chave function
    descreverColecao() {

        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new livroColecao("Lógica de Programação", "Comece a Programar");

LogicaDeProgramacao.descreverColecao();