const GuiaTransporte = require('../models/guiaTransporte');


const createGuiaTransporte = async (req, res) => {
  try {
    const guiaTransporte = new GuiaTransporte(req.body);
    await guiaTransporte.save();
    res.status(201).json(guiaTransporte);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la Guía de Transporte' });
  }
};


const getGuiasTransporte = async (req, res) => {
  try {
    const guiasTransporte = await GuiaTransporte.find();
    res.status(200).json(guiasTransporte);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las Guías de Transporte' });
  }
};


module.exports = {
  createGuiaTransporte,
  getGuiasTransporte,
  
};
