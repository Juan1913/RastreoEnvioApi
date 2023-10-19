const mongoose = require('mongoose');

const documentoEntregaSchema = new mongoose.Schema({
  pedido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pedido',
    required: true,
  },
  fechaDespacho: {
    type: Date,
    required: true,
  },
  fechaEntrega: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('DocumentoEntrega', documentoEntregaSchema);
