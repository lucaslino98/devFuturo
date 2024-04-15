class Produto {
    nome;
    preco;
    quantidade;

    constructor(name, price, quant) {
        this.nome = name;
        this.preco = price;
        this.quantidade = quant;
    }

    vender(quantVendida) {
        if (quantVendida <= this.quantidade) {
            this.quantidade -= quantVendida
            console.log(`Você vendeu ${quantVendida} e seu estoque é de ${this.quantidade}`)
            return
        } else {
            console.log("Estoque insuficiente!")
        }
    }


    repor(quantResposta) {
        this.quantidade += quantResposta
    }

    mostrarEstoque() {
        console.log(`O produto ${this.nome} custa R$${this.preco} e possui uma quantidade de ${this.quantidade} unidades disponíveis`)
    }

    atualizarPreco(novoValor) {
        this.preco = novoValor;
    }
}


const market = new Produto("Laranja", 10, 10);
market.vender(9);
market.repor(50)
console.log(market)
market.mostrarEstoque()
market.atualizarPreco(20)
console.log(market)
