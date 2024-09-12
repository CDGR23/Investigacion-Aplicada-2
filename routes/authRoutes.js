const express = require('express');
const controlador = require('../controllers/authController');
const verificarToken = require('../middleware/authMiddleware');
const router = express.Router();

//Ruta para registrar un nuevo usuario.
router.post('/registro', controlador.registrarUsuario);

//Ruta para iniciar sesión.
router.post('/login', controlador.iniciarSesion);

//Ruta para acceder a un recurso protegido.
router.get('/recursoprotegido', verificarToken, controlador.recursoProtegido);

//Ruta para cerrar sesión.
router.post('/logout', verificarToken, controlador.cerrarSesion);

//Exporta el enrutador para que se pueda usar en otros códigos.
module.exports = router;
