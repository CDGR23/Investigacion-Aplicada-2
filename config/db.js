const mysql = require('mysql2');
require('dotenv').config();

//Establece la conexión a la base de datos MySQL haciendo uso de los datos del archivo .env
const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

//Intenta conectar con la base de datos.
conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

//Exporta la conexión para que pueda ser utilizada en otros códigos.
module.exports = conexion;
