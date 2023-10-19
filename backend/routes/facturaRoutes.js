const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');

router.post('/', facturaController.createFactura);


module.exports = router;
