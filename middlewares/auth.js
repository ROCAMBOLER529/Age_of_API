const { getUsuariosPorNombre_f } = require('../controllers/usuarios');
const jwt = require('jsonwebtoken');

const esAdmin = (req, res, next) => {
    usuario = req.body.nombre;

    if (!usuario) {
        res.status(500).json({
            log: "Token should be validated first"
        });
    } else {
        const { nombre, rol } = req.usuario;

        if (rol != "admin") {
            res.status(401).json({
                log: `${nombre} is not admin`
            });
        } else {
            next();
        }
    }    
}

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');
    const { nombre } = req.body
    console.log(nombre);

    try {
        const { nombreUser } = jwt.verify(token, process.env.TOKEN);
        const usuarioExistente = getUsuariosPorNombre_f(nombre);

        if (usuarioExistente) {
            req.usuario = usuarioExistente;
            next();
        } else {
            res.status(401).json({
                log: `No existe el usuario ${req.body.nombre}`
            });
        }

        next();
    } catch(e) {
        res.status(500).json({
            e,
            log: "el token no me gustó"
        })
    }
}

module.exports = { esAdmin, validarJWT };