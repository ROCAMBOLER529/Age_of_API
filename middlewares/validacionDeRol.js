const { getUsuariosPorNombre_f } = require('../controllers/usuarios');

const esAdmin = (req, res, next) => {
    usuario = req.body.nombre;

    if (!usuario) {
        res.status(500).json({
            log: "No se validó el token"
        });
    } else {
        const { nombre, password, rol } = req.usuario;

        if (rol != "admin") {
            res.status(401).json({
                log: `${nombre} no es admin`
            });
        } else {
            next();
        }
    }    
}

const validarJWT = (req, res, next) => {
    console.log(req.body.nombre);
    const nombre = req.body.nombre;
    const usuarioExistente = getUsuariosPorNombre_f(nombre);
    console.log(usuarioExistente);

    if (usuarioExistente) {
        req.usuario = usuarioExistente;
        next();
    } else {
        res.status(401).json({
            log: `No existe el usuario ${req.body.nombre}`
        });
    }
}

module.exports = { esAdmin, validarJWT };