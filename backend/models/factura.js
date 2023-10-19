
const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
  numeroFactura: {
    type: String,
    required: true,
  },
  cliente: {
    type: String,
    required: true,
  },
  fechaFacturacion: {
    type: Date,
    required: true,
  },
  detalles: [
    {
      producto: {
        type: String,
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
      precioUnitario: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('factura', facturaSchema);
