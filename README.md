Instrucciones

Requisitos previos:
Node.js (v16+)
MongoDB (v7.0+) 

1. Clonar el repositorio 
git clone
cd landing-page-contacto

2. Iniciar MongoDB
Abre una Terminal y Ejecuta el servidor de MongoDB: mongod --dbpath="C:\data\db"
mongod --dbpath="C:\data\db"
Nota: Asegúrate de que la carpeta C:\data\db exista.

3. Configurar e iniciar el Backend
En una segunda Terminal abierta desde la carpeta backend ejecuta:

cd backend (si no estas ya en el back)
npm install
npm start
El servidor deberia estar en: http://localhost:3000

4. Ejecutar el Frontend
Opción A (Recomendada):
Usar Live Server (extensión de VSCode) para abrir frontend/index.html.

Opción B:
Abrir directamente el archivo frontend/index.html en tu navegador.

5. Verificar la base de datos (Opcional)
En una tercera terminal puedes consultar los mensajes guardados :

mongosh
use landing_contactos
db.contactos.find()

Una vez hecho eso te deberian salir los mensajes que se mandaron en el front end
