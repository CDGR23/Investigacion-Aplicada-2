const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
      return res.status(403).json({ mensaje: 'Token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
          return res.status(401).json({ mensaje: 'Token inválido o expirado' });
      }

      req.usuarioId = decoded.id;
      next();
  });
};

module.exports = verificarToken;