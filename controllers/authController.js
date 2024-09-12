const bcrypt = require('bcryptjs');
const conexion = require('../config/db');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

//Función para registrar un nuevo usuario en la base de datos.
const registrarUsuario = async (req, res) => {
  const { nombre, contra, correo } = req.body;

  //Verifica que los campos no esten vacíos.
  if (!nombre || !contra || !correo) {
      return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
    //Se encripta la contraseña.
      const saltRounds = 10;
      const hashedcontra = await bcrypt.hash(contra, saltRounds);

    //Inserta el nuevo usuario en la base de datos.
      conexion.query(
          'INSERT INTO usuarios (nombre, contra, correo) VALUES (?, ?, ?)',
          [nombre, hashedcontra, correo],
          (err, result) => {
              if (err) {
                  console.error('Error al registrar el usuario:', err);
                  return res.status(500).json({ message: 'Error interno del servidor' });
              }
              res.status(201).json({ message: 'Usuario registrado exitosamente', id: result.insertId });
          }
      );
  } catch (error) {
    //Controla los errores en el proceso de encriptación de la contraseña.
      console.error('Error al hashear la contraseña:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
  }
};

//Función para iniciar sesión.
const iniciarSesion = (req, res) => {
  const { nombre, contra } = req.body;

  //Verifica que los campos no estén vacíos.
  if (!nombre || !contra) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  //Busca al usuario por nombre en la base de datos.
  Usuario.encontrarPorNombre(nombre, (err, usuarios) => {
      if (err || usuarios.length === 0) {
          return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      const usuario = usuarios[0];

    //Compara la contraseña que se ingresó con la que está dentro de la base de datos.
      bcrypt.compare(contra, usuario.contra, (err, esCoincidente) => {
          if (err || !esCoincidente) {
              return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
          }

        //Crea un token si no hay ningún error.
          const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        //Actualiza el token del usuario en la base de datos.
          Usuario.actualizarToken(usuario.id, token, (err) => {
              if (err) {
                  return res.status(500).json({ mensaje: 'Error al iniciar sesión' });
              }
              res.status(200).json({ token });
          });
      });
  });
};

//Función para acceder que requiere autenticación.
const recursoProtegido = (req, res) => {
  res.status(200).json({ mensaje: 'Recurso protegido accedido correctamente' });
};

//Función para cerrar sesió.
const cerrarSesion = async (req, res) => {
  const usuarioId = req.userId;

  try {
    //Se actualiza el token a null para invalidarlo.
      await Usuario.actualizarToken(usuarioId, null);
      res.status(200).json({ mensaje: 'Sesión cerrada correctamente' });
  } catch (err) {
      console.error('Error al cerrar sesión:', err);
      res.status(500).json({ mensaje: 'Error al cerrar sesión' });
  }
};

//Exporta las funciones para que se puedan usar en otros códigos.
module.exports = { registrarUsuario, iniciarSesion, recursoProtegido, cerrarSesion };
