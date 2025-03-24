const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async read(req, res) {
    try {
      const pedidos = await prisma.pedidos.findMany();
      res.status(200).json(pedidos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
  },

  async readOne(req, res) {
    const { id } = req.params;
    try {
      const pedido = await prisma.pedidos.findUnique({
        where: { id: parseInt(id) },
        include: {
          cliente: true,
          pizzas: {
            include: {
              pizza: true
            }
          }
        }
      });
      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pedido' });
    }
  },

  async create(req, res) {
    const { data, hora, valor, clienteId, pizzas } = req.body;
    try {
      const pedido = await prisma.pedidos.create({
        data: {
          data,
          hora,
          valor,
          clienteId,
          pizzas: {
            create: pizzas.map(pizzaId => ({ pizzaId }))
          }
        }
      });
      res.status(201).json(pedido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar pedido' });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { data, hora, valor, clienteId, pizzas } = req.body;
    try {
      const pedido = await prisma.pedidos.update({
        where: { id: parseInt(id) },
        data: {
          data,
          hora,
          valor,
          clienteId,
          pizzas: {
            deleteMany: {},
            create: pizzas.map(pizzaId => ({ pizzaId }))
          }
        }
      });
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
  },

  async del(req, res) {
    const { id } = req.params;
    try {
      await prisma.pedidos.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json({ message: 'Pedido deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar pedido' });
    }
  },
};