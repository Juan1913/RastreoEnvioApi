const express = require('express');
const router = express.Router();
const guiaTransporteController = require('../controllers/guiaTransporte.js');


router.post('/guias-transporte', guiaTransporteController.createGuiaTransporte);


router.get('/guias-transporte', guiaTransporteController.getGuiasTransporte);



module.exports = router;
