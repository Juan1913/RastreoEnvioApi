const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  FechaPedido: Date,
  TipoPedido: String,
  Estado: String,
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
