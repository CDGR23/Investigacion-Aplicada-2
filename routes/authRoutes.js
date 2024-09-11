const express = require('express');
const controlador = require('../controllers/authController');
const verificarToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/registro', controlador.registrarUsuario);
router.post('/login', controlador.iniciarSesion);
router.get('/recursoprotegido', verificarToken, controlador.recursoProtegido);
router.post('/logout', verificarToken, controlador.cerrarSesion);

module.exports = router;