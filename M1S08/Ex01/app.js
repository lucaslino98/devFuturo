const express = require("express")
const path = require("path")

const app = express()
const port = 3000

let users = []

const dirEstatico =  path.join(__dirname, "public")

app.use(express.static(dirEstatico))
app.use(express.json())

const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString()
    console.log(
        `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`)
        next()
}

app.use(logHoraMiddleware)

app.get("/sobre", function(req, res){
    res.send("Essa é a página sobre um aplicativo.")
})

app.get("/contato", function(req,res){
    res.send("Contato: (12) 3456-7890 - email@email.com")
})

app.get("/produto/:id", (req, res) => {
    const {id} = req.params
    res.send(`O produto de Id ${id} foi encontrado`)
})

app.post("/users", (req, res) => {
    const {nome, cidade, telefone} = req.body  
    const usuario = {nome, cidade, telefone}
    usuario.id = users.length > 0 ? users[users.length -1].id + 1 : 1   
    users.push(usuario)
    const novoUsuario = {
        "Usuário adicionado com sucesso!": usuario,
    }
    res.status(201).json(novoUsuario)
})

app.get("/users", (req, res) => {
    res.json(users)
})

app.get("/users/:id", (req, res) => {
    const {id} = req.params
    const usuario = users.find(usuario => usuario.id === parseInt(id))
    if (!usuario) {
        res.status(404).send("Usuário não encontrado!")
        return
    }
    res.json(usuario)
})

app.put("/users/:id", (req, res) => {
    const {id} = req.params
    const atualizaUsuario = req.body
    const index = users.findIndex(usuario => usuario.id === parseInt(id))
    if (index === -1) {
        res.status(404).send("Usuário não cadastrado")
        return
    }
    users[index] = {...users[index], ...atualizaUsuario}
    res.status(200).json({"Usuário atualizado com sucesso!": { ...users[index]}})
})

app.delete("/users/:id", (req, res) => {
    const {id} = req.params
    const index = users.findIndex(usuario => usuario.id === parseInt(id))
    if (index === -1) {
        res.status(404).send("Usuário não encontrado.")
        return
    }
    const usuarioRemovido = users.splice(index, 1)[0]
    res.status(200).json({"Usuário removido com sucesso!": usuarioRemovido})
})

app.listen(port, () => {
    console.log(`Servidor rodando em  http://localhost:${port}`)
})
