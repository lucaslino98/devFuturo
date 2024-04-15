class Pessoa {
    nome;
    idade;
    profissao;

    constructor(valorNome, valorIdade, valorProfissao) {
        this.nome = valorNome;
        this.idade = valorIdade;
        this.profissao = valorProfissao;
    }
}

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde; //="1998-04-06"

    constructor(valorNome, valorIdade, valorProfissao, valorTelefone, valorEmail, valorDesde) {
        super(valorNome, valorIdade, valorProfissao)
        this.telefone = valorTelefone;
        this.email = valorEmail;
        this.clienteDesde = valorDesde;
    }
}


const clienteLino = new Cliente("Lucas", 25, "controlar de qualidade", 48991638911, "lucaslino.martins@Hotmail.com","2022-10-04");
console.log(clienteLino);