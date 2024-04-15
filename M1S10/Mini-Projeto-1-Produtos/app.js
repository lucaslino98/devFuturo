const express = require('express');
const app = express();
const port = 3151;


let produtos = [];

app.use(express.json())

// Meu  Middleware
const logsInf = (req, res, next) => {
    const infor = new Date().toISOString() // informa data hora e ação
    console.log(`A chamda foi reailziada em ${infor} para ${req.method}`)
    next()
}
app.use(logsInf)

app.get("/produtos", (req, res) => {
    res.json(produtos);
})

// Aqui estou criando meu produto.
app.post("/produtos", (req, res) => {
    const { nome, preco, descricao } = req.body;
    const novoProduto = { id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1, nome, preco, descricao };
    produtos.push(novoProduto);
    const resposta = { mensagem: "Foi adicionado um novo produto com sucesso!", produto: novoProduto };
    res.status(201).json(resposta);
});

// Aqui estou atualizando meus produtos
app.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const autlizaProduto = req.body;
    const index = produtos.findIndex(produto => produto.id === parseInt(id))
    produtos[index] = { ...produtos[index], ...autlizaProduto }
    res.status(200).send("Produto atualizado")
})

//Aqui estou deletando meus produtos
app.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(apaga => apaga.id === parseInt(id))
    produtos.splice(index, 1)[0];
    res.status(200).send("Produto DELETADO")
})

app.listen(port, () => {
    console.log(`Servidor está rodando na porta: ${port}`)
})