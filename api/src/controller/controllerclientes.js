const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async read(req, res) {
    try {
      const clientes = await prisma.clientes.findMany();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
  },

  async create(req, res) {
    const { nome, cpf, email, bairro, numero, logradouro, telefone } = req.body;
    try {
      const cliente = await prisma.clientes.create({
        data: { nome, cpf, email, bairro, numero, logradouro, telefone },
      });
      res.status(201).json(cliente);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar cliente' });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, cpf, email, bairro, numero, logradouro, telefone } = req.body;
    try {
      const cliente = await prisma.clientes.update({
        where: { id: parseInt(id) },
        data: { nome, cpf, email, bairro, numero, logradouro, telefone },
      });
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
  },

  async del(req, res) {
    const { id } = req.params;
    try {
      await prisma.clientes.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
  },
};