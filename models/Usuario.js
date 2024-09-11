const conexion = require('../config/db');

const Usuario = {
  crear: (usuario, callback) => {
    const sql = 'INSERT INTO usuarios (nombre, contra, correo) VALUES (?, ?, ?)';
    conexion.query(sql, [usuario.nombre, usuario.contra, usuario.correo], callback);
  },
  encontrarPorNombre: (nombre, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE nombre = ?';
    conexion.query(sql, [nombre], callback);
  },
  encontrarPorId: (id, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    conexion.query(sql, [id], callback);
  },
  actualizarToken: (id, token, callback) => {
    const sql = 'UPDATE usuarios SET token = ? WHERE id = ?';
    conexion.query(sql, [token, id], callback);
  }
};

module.exports = Usuario;