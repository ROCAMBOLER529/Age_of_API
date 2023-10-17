/*
+-------------------------+
|                         |
| controllers/usuarios.js |
|                         |
+-------------------------+
*/

const data = require('../json/data.json');

const getUsuariosPorNombre_f = (nombre) => {
    const encontrado = data.usuarios.find(x => x.nombre == nombre);
    return encontrado;
}

module.exports = { getUsuariosPorNombre_f };