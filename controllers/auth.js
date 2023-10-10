const { getUsuariosPorNombre_f } = require('../controllers/usuarios');

const login = (req, res) => {
    const { nombre, clave } = req.body;
    // validar nombre, clave y usuario

    //const user = getUsuariosPorNombre_f(nombre);
    const token = "token";
    
    res.json({
       /* user,*/
        token
    }) 
};

module.exports = { login };