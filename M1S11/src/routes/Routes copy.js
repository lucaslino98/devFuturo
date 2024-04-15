const { Router } = require("express")
const Cursos = require("../models/Cursos")
const routes = new Router()

routes.post('/cursos', async (req, res) => {
    try {
        const nome = req.body.nome
        const duracao_horas = req.body.duracao_horas


        const curso = await Cursos.create({
            nome: nome,
            duracao_horas: duracao_horas
        })
        res.status(201).json(curso)
    } catch (error) {
        res.status(500).json({ erroe: "Não foi possível cadastrar o Curso" })
    }
})

routes.get("/cursos", async (req, res) => {
    const cursos = await Cursos.findAll();
    res.json(cursos)
})

module.exports = routes