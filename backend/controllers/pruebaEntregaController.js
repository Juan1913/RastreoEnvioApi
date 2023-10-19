const PruebaEntrega = require('../models/pruebaEntrega.js');

exports.create = async (req, res) => {
  try {

    const { guiaID, documentoID, firmaCliente, observaciones } = req.body;

    const nuevaPruebaEntrega = new PruebaEntrega({
      guiaID,
      documentoID,
      firmaCliente,
      observaciones
    });

    await nuevaPruebaEntrega.save();

    res.status(201).json({ mensaje: 'Prueba de Entrega creada exitosamente' });
  } catch (error) {
    console.error('Error al crear la Prueba de Entrega:', error);
    res.status(500).json({ mensaje: 'Error al crear la Prueba de Entrega' });
  }
};


exports.getById = async (req, res) => {
  try {
    const pruebaID = req.params.id;

   
    const pruebaEntrega = await PruebaEntrega.findById(pruebaID);

    if (!pruebaEntrega) {
      return res.status(404).json({ mensaje: 'Prueba de Entrega no encontrada' });
    }

    res.status(200).json(pruebaEntrega);
  } catch (error) {
    console.error('Error al obtener la Prueba de Entrega:', error);
    res.status(500).json({ mensaje: 'Error al obtener la Prueba de Entrega' });
  }
};


exports.update = async (req, res) => {
  try {
    const pruebaID = req.params.id;
    const { guiaID, documentoID, firmaCliente, observaciones } = req.body;


    const pruebaEntrega = await PruebaEntrega.findByIdAndUpdate(pruebaID, {
      guiaID,
      documentoID,
      firmaCliente,
      observaciones
    });

    if (!pruebaEntrega) {
      return res.status(404).json({ mensaje: 'Prueba de Entrega no encontrada' });
    }

    res.status(200).json({ mensaje: 'Prueba de Entrega actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar la Prueba de Entrega:', error);
    res.status(500).json({ mensaje: 'Error al actualizar la Prueba de Entrega' });
  }
};


exports.delete = async (req, res) => {
  try {
    const pruebaID = req.params.id;

 
    const pruebaEntrega = await PruebaEntrega.findByIdAndRemove(pruebaID);

    if (!pruebaEntrega) {
      return res.status(404).json({ mensaje: 'Prueba de Entrega no encontrada' });
    }

    res.status(200).json({ mensaje: 'Prueba de Entrega eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la Prueba de Entrega:', error);
    res.status(500).json({ mensaje: 'Error al eliminar la Prueba de Entrega' });
  }
};
