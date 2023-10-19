const DocumentoEntrega = require('../models/documentoEntrega.js');

const documentoEntregaController = {
  getAllDocumentosEntrega: async (req, res) => {
    try {
      const documentosEntrega = await DocumentoEntrega.find();
      res.json(documentosEntrega);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getDocumentoEntregaById: async (req, res) => {
    try {
      const documentoEntrega = await DocumentoEntrega.findById(req.params.id);
      res.json(documentoEntrega);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createDocumentoEntrega: async (req, res) => {
    try {
      const nuevoDocumentoEntrega = new DocumentoEntrega(req.body);
      await nuevoDocumentoEntrega.save();
      res.json(nuevoDocumentoEntrega);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateDocumentoEntrega: async (req, res) => {
    try {
      await DocumentoEntrega.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: 'Documento de Entrega actualizado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteDocumentoEntrega: async (req, res) => {
    try {
      await DocumentoEntrega.findByIdAndDelete(req.params.id);
      res.json({ message: 'Documento de Entrega eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = documentoEntregaController;
