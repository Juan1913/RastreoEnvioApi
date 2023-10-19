
// routes/test.js

const express = require('express');
const router = express.Router();
const testController = require('../controllers/testcontroller');

// Ruta de prueba (GET)
router.get('/test', testController.testRoute);

module.exports = router;
