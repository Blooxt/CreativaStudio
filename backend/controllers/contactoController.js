const Contacto = require('../../backend/models/Contacto');

exports.crearContacto = async (req, res) => {
    try {
        const nuevoContacto = new Contacto(req.body);
        await nuevoContacto.save();
        res.status(201).json({ 
            message: 'Mensaje enviado con éxito',
            contacto: nuevoContacto
        });
    } catch (error) {
        console.error('Error al guardar el contacto:', error);
        res.status(400).json({ 
            message: 'Error al procesar el mensaje',
            error: error.message 
        });
    }
};

exports.obtenerContactos = async (req, res) => {
    try {
        const contactos = await Contacto.find().sort({ fecha: -1 });
        res.status(200).json(contactos);
    } catch (error) {
        console.error('Error al obtener contactos:', error);
        res.status(500).json({ 
            message: 'Error al obtener los mensajes',
            error: error.message 
        });
    }
};