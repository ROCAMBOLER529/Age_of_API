const jwt = require('jsonwebtoken');

const { getUsuariosPorNombre_f } = require('../controllers/usuarios');

const login = async (req, res) => {
    const { nombre, clave } = req.body;
    // validar nombre, clave y usuario

    const user = getUsuariosPorNombre_f(nombre);
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