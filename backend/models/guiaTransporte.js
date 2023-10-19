const mongoose = require('mongoose');

const guiaTransporteSchema = new mongoose.Schema({

  fechaDespacho: Date,
  clienteID: String, 
  destino: String,
  
});

const GuiaTransporte = mongoose.model('GuiaTransporte', guiaTransporteSchema);

module.exports = GuiaTransporte;
