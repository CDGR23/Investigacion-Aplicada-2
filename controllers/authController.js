const bcrypt = require('bcryptjs');
const conexion = require('../config/db');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const registrarUsuario = async (req, res) => {
  const { nombre, contra, correo } = req.body;

  if (!nombre || !contra || !correo) {
      return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
      const saltRounds = 10;
      const hashedcontra = await bcrypt.hash(contra, saltRounds);
      
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
      console.error('Error al hashear la contraseña:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const iniciarSesion = (req, res) => {
  const { nombre, contra } = req.body;

  if (!nombre || !contra) {
      return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  Usuario.encontrarPorNombre(nombre, (err, usuarios) => {
      if (err || usuarios.length === 0) {
          return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      const usuario = usuarios[0];
      bcrypt.compare(contra, usuario.contra, (err, esCoincidente) => {
          if (err || !esCoincidente) {
              return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
          }

          const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

          Usuario.actualizarToken(usuario.id, token, (err) => {
              if (err) {
                  return res.status(500).json({ mensaje: 'Error al iniciar sesión' });
              }
              res.status(200).json({ token });
          });
      });
  });
};

const recursoProtegido = (req, res) => {
  res.status(200).json({ mensaje: 'Recurso protegido accedido correctamente' });
};

const cerrarSesion = async (req, res) => {
  const usuarioId = req.userId;

  try {
      await Usuario.actualizarToken(usuarioId, null);
      res.status(200).json({ mensaje: 'Sesión cerrada correctamente' });
  } catch (err) {
      console.error('Error al cerrar sesión:', err);
      res.status(500).json({ mensaje: 'Error al cerrar sesión' });
  }
};

module.exports = { registrarUsuario, iniciarSesion, recursoProtegido, cerrarSesion };