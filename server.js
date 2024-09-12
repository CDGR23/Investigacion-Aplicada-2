const express = require('express');
const conexion = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config(); //Carga las variables de entorno del archivo .env
const app = express(); //Crea una instancia de la aplicación Express.
app.use(express.json());

app.use('/api', authRoutes); //Usa las rutas bajo el prefijo de /api.

const PORT = process.env.PORT || 4000;

//Inicia el servidor en el puerto especificado.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
