const express = require('express');
const router = express.Router();
const documentoEntregaController = require('../controllers/documentoEntregaController');


router.get('/documentos-entrega', documentoEntregaController.getAllDocumentosEntrega);

module.exports = router;
