const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

//Función para verificar el token proporcionado.
const verificarToken = (req, res, next) => {
  //Extrae el token de los encabezados.
  const token = req.headers['authorization'];

  if (!token) {
      return res.status(403).json({ mensaje: 'Token no proporcionado' });
  }

  //Verifica la validez del token secreto definido en el archivo .env
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
          return res.status(401).json({ mensaje: 'Token inválido o expirado' });
      }

      req.usuarioId = decoded.id;
      next();
  });
};

//Exporta la función para que se pueda usar en otros códigos.
module.exports = verificarToken;
