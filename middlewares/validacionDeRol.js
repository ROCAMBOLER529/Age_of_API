const { getUsuariosPorNombre_f } = require('../controllers/usuarios');
const jwt = require('jsonwebtoken');

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
    // console.log(req.body.nombre);
    const token = req.header('x-token');
    const {nombre} = req.body
    // validar undefined(401)
    console.log(nombre);

    try {
        const { nombreUser } = jwt.verify(token, process.env.CLAVE);
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
    // const nombre = req.body.nombre;
    // const usuarioExistente = getUsuariosPorNombre_f(nombre);
    // console.log(usuarioExistente);

    // if (usuarioExistente) {
    //     req.usuario = usuarioExistente;
    //     next();
    // } else {
    //     res.status(401).json({
    //         log: `No existe el usuario ${req.body.nombre}`
    //     });
    // }
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJVc3VhcmlvMSIsImlhdCI6MTY5Njk1MTQyMywiZXhwIjoxNjk2OTk0NjIzfQ.InZf20Qbi2GmdCXRAcyW-5I6m_llF41V3nFEC13kvSw == para el Usuario1

module.exports = { esAdmin, validarJWT };