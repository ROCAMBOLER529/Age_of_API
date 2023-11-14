const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios');
const { getUsuariosByName } = require('../controllers/usuarios');

const login = async (req, res) => {
    const { nombre } = req.body;
    // validar nombre, clave y usuario

    const usuarios = await Usuario.find().exec();

    const user = usuarios.find(x => x.name == nombre);
    const token = await generarJWT(nombre);
    
    res.json({
        user,
        token
    }) 
};

const generarJWT = nombre => {
    return new Promise((resolve, reject) => {
        const payload = { nombre };
        jwt.sign(payload, process.env.TOKEN, { expiresIn: '12h' }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = { login };