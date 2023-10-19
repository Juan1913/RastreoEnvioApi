const Pedido = require('../models/pedido.js');


const pedidoController = {
  getAllPedidos: async (req, res) => {
    try {
      const pedidos = await Pedido.find();
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPedidoById: async (req, res) => {
    try {
      const pedido = await Pedido.findById(req.params.id);
      res.json(pedido);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createPedido: async (req, res) => {
    try {
      const nuevoPedido = new Pedido(req.body);
      await nuevoPedido.save();
      res.json(nuevoPedido);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePedido: async (req, res) => {
    try {
      await Pedido.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: 'Pedido actualizado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletePedido: async (req, res) => {
    try {
      await Pedido.findByIdAndDelete(req.params.id);
      res.json({ message: 'Pedido eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = pedidoController;
