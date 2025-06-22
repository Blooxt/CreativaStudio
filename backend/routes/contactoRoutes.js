const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');

// Crear un nuevo contacto
router.post('/', contactoController.crearContacto);

// Obtener todos los contactos (para administración)
router.get('/', contactoController.obtenerContactos);

module.exports = router;