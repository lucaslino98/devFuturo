const { Router } = require('express');
const Cursos = require('../models/Cursos');

const routes = new Router();

routes.post("/cursos", async (req, res) => {

    try {
        const nome = req.body.nome;
        const duracao_horas = req.body.duracao_horas;

        if (!nome) {
            return res.status(400).json({ mensagem: "O nome é obrigatório" })
        }

        if (!duracao_horas || duracao_horas <= 0) {
            return res.status(400).json({ mensagem: "Verifique as horas, está faltando." })
        }

        const cursos = await Cursos.create({
            nome: nome,
            duracao_horas: duracao_horas
        })
        res.status(201).json(cursos)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Seu código está faltando algo" })
    }
})

routes.get("/cursos", async (req, res) => {
    const cursos = await Cursos.findAll();
    res.json(cursos)
})

routes.put('/cursos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const nome = req.body.nome;
        const duracao_horas = req.body.duracao_horas;
        const curso = await Cursos.findByPk(id);
        if (!curso) {
            return res.status(404).json({ mensagem: 'Curso não encontrado' });
        }

        await Cursos.update({
            nome: nome,
            duracao_horas: duracao_horas
        }, {
            where: {
                id: id
            }
        });
        const cursoAtualizado = await Cursos.findByPk(id);
        res.json(cursoAtualizado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o curso' });
    }
});

routes.delete("/cursos/:id", async (req, res) => {
    const id = req.params.id;

    await Cursos.destroy({
        where: {
            id: id
        }
    })
    res.status(204).json({})
})


module.exports = routes