const mongoose = require('mongoose');

const pruebaEntregaSchema = new mongoose.Schema({
  guiaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GuiaTransporte', 
  },
  documentoID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DocumentoEntrega', 
    required: true
  },
  firmaCliente: {
    type: String, 
    required: true
  },
  observaciones: {
    type: String
  }
});

const PruebaEntrega = mongoose.model('PruebaEntrega', pruebaEntregaSchema);

module.exports = PruebaEntrega;
