const express = require('express');
const router = express.Router();
const pruebaEntregaController = require('../controllers/pruebaEntregaController.js');


router.post('/', pruebaEntregaController.create); 
router.get('/:id', pruebaEntregaController.getById); 
router.put('/:id', pruebaEntregaController.update); 
router.delete('/:id', pruebaEntregaController.delete); 

module.exports = router;
