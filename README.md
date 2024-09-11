Investigación aplicada #2
Para que el código funcione correctamente, deben crear un archivo .env en la carpeta "raíz" con las siguientes líneas:
PORT=4000 "O el que gusten"
DB_HOST=localhost
DB_USER="Su usuario"
DB_PASSWORD="Su contraseña"
DB_NAME=autenticacion
JWT_SECRET="Una llave segura que creen"
Respecto al nombre de la base de datos es porque así la llame yo, les dejo aquí el código sql para crear la base de datos:
CREATE DATABASE autenticacion;
USE autenticacion;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  contra VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  token TEXT
);
Cabe recalcar que se hizo uso de MySQL como base de datos.
