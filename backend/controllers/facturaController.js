const Factura = require('../models/factura');


exports.createFactura = async (req, res) => {
  try {
    const nuevaFactura = new Factura(req.body);
    const facturaGuardada = await nuevaFactura.save();
    res.json(facturaGuardada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

