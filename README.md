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
npm i
npm start
El servidor deberia estar en: http://localhost:3000

5. Ejecutar el Frontend
Opción A (Recomendada):
Usar Live Server (extensión de VSCode) para abrir frontend/index.html.

Opción B:
Abrir directamente el archivo frontend/index.html en tu navegador.

5. Verificar la base de datos (Opcional)
En una tercera terminal puedes consultar los mensajes guardados:
mongosh
use landing_contactos
db.contactos.find()

Una vez hecho eso te deberian salir los mensajes que se mandaron en el front end

Información del proyecto:
1. Justificación de los servicios externos utilizados
Slack: Utilizamos Slack por su facilidad de integración y notificaciones instantáneas al equipo.

2.	Diagrama de arquitectura del sistema
 En el documento de word
 
3. Validaciones
•	Validación del lado del cliente:
o	    Campos obligatorios marcados con required en el formulario HTML
o	    Tipo email para validar formato de correo electrónico
o	    Tipo password para ocultar la contraseña
•	Validación del lado del servidor:
o	    En authroutes.js se verifica que el usuario exista y la contraseña coincida
o	    Mongoose valida el esquema del usuario (email único y requerido)

4. Protección de datos personales
•	Almacenamiento seguro:
o	    Contraseñas hasheadas con bcryptjs antes de almacenar
o	    Uso de JWT (JSON Web Tokens) para autenticación sin almacenar sesiones
•	Transmisión:
o	    Datos sensibles (credenciales) se envían en el body de la petición, no en la URL

