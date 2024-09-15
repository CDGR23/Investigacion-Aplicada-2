# Proyecto de Pruebas con Karma

Este proyecto contiene una aplicación simple en Node.js con funciones matemáticas básicas, y un conjunto de pruebas unitarias usando **Karma** y **Jasmine**. Las pruebas incluyen funciones de suma, resta, multiplicación y división.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/en/download/) (versión 14 o superior)
- [npm](https://www.npmjs.com/get-npm) (incluido con Node.js)

## Instalación

Sigue los pasos a continuación para clonar el repositorio, instalar las dependencias y ejecutar el proyecto:

1. Clona este repositorio en tu máquina local:

   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

2. Navega al directorio del proyecto:
cd nombre-del-repositorio

3. Instala las dependencias:

npm install

Esto instalará las siguientes dependencias necesarias para ejecutar las pruebas:

Karma: Un corredor de pruebas de JavaScript.
Jasmine: Un framework para pruebas unitarias.
Karma Chrome Launcher: Para ejecutar las pruebas en Google Chrome.
Estructura del Proyecto
src/: Contiene el archivo math.js con las funciones matemáticas.
test/: Contiene el archivo math.spec.js con las pruebas unitarias para las funciones.
karma.conf.js: Archivo de configuración para Karma.
package.json: Lista las dependencias y scripts del proyecto.
Funciones Matemáticas
El archivo src/math.js contiene las siguientes funciones:

suma(a, b): Retorna la suma de dos números.
resta(a, b): Retorna la resta de dos números.
multiplicacion(a, b): Retorna la multiplicación de dos números.
division(a, b): Retorna la división de dos números, lanzando un error si el divisor es 0.
Ejecución de Pruebas
Una vez que las dependencias estén instaladas, puedes ejecutar las pruebas usando Karma. Las pruebas están definidas en el archivo test/math.spec.js y cubren las funciones matemáticas básicas.


Ejecutar Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:
npx karma start
