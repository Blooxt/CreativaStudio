require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactoRoutes = require('./routes/contactoRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

const whitelist = [
    'http://localhost:5173',                  // para desarrollo local
    'https://creativastudio.onrender.com' ,      // producción en Render
    'https://frontend-eight-weld-50.vercel.app' //nuevo de aqui viene el frontend
];

// Middleware
app.use(cors(
    {
        origin: function (origin, callback) {
            // permitir requests sin origin (como Postman o curl)
            if (!origin) return callback(null, true);
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('No permitido por CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));
app.use(bodyParser.json());

// Rutas
app.use('/api/contacto', contactoRoutes);
app.use('/api/auth', authRoutes)
app.use('/', (req, res) => res.send('API de Contacto') )

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});