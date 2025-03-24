const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async read(req, res) {
        try {
            const pizzas = await prisma.pizzas.findMany();
            res.status(200).json(pizzas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar pizzas' });
        }
    },

    async create(req, res) {
        const { nome, descricao, valor } = req.body;
        try {
            const pizza = await prisma.pizzas.create({
                data: { nome, descricao, valor },
            });
            res.status(201).json(pizza);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar pizza' });
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, descricao, valor } = req.body;
        try {
            const pizza = await prisma.pizzas.update({
                where: { id: parseInt(id) },
                data: { nome, descricao, valor },
            });
            res.status(200).json(pizza);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar pizza' });
        }
    },

    async del(req, res) {
        const { id } = req.params;
        try {
            await prisma.pizzas.delete({
                where: { id: parseInt(id) },
            });
            res.status(200).json({ message: 'Pizza deletada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar pizza' });
        }
    },
};