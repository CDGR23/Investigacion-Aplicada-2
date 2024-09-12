const conexion = require('../config/db');

//Definición del objeto Usuario.
const Usuario = {
  //Función para crear un nuevo usuario en la base de datos.
  crear: (usuario, callback) => {
    const sql = 'INSERT INTO usuarios (nombre, contra, correo) VALUES (?, ?, ?)';
    conexion.query(sql, [usuario.nombre, usuario.contra, usuario.correo], callback);
  },
  //Función para encontrar un usuario en la base de datos por su nombre.
  encontrarPorNombre: (nombre, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE nombre = ?';
    conexion.query(sql, [nombre], callback);
  },
  //Función para encontrar un usuario en la base de datos por su id.
  encontrarPorId: (id, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    conexion.query(sql, [id], callback);
  },
  //Función para actuaizar el token en la base de datos.
  actualizarToken: (id, token, callback) => {
    const sql = 'UPDATE usuarios SET token = ? WHERE id = ?';
    conexion.query(sql, [token, id], callback);
  }
};

//Exporta el objeto para que pueda ser usado en otros códigos.
module.exports = Usuario;
