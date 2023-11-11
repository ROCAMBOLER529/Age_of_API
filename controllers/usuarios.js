/*
+-------------------------+
|                         |
| controllers/usuarios.js |
|                         |
+-------------------------+
*/

const Usuario = require("../models/usuarios");

// const getUsuariosPorNombre = (req, res) => {
//     let { name } = req.params;
    
//     const civ = data.civilization.find(x => x.name.common == name);

//     if (civ) {
//         res.json(civ);
//     } else {
//         res.status(404).json({
//             civ,
//             status: "No encontrado"
//         });
//     }
// }

const getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find().exec();
    
    if (usuarios) {
        res.json(usuarios);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getUsuariosByName = async (req, res) => {
    const { name } = req.params;
    
    const usuarios = await Usuario.findOne({ name }).exec();

    if (usuarios) {
        res.json(usuarios);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getBannedUsuarios = async (req, res) => {
    const usuarios = await Usuario.find({ banned: true });

    if (usuarios) {
        res.json(usuarios);
    } else {
        res.json({
            log: "No hay usuarios baneados"
        })
    }
}

const addUsuario = async (req, res) => {
    const { name, password, rol } = req.body;

    const usuarios = new Usuario({
        name,
        password,
        rol
    });

    try {
        await usuarios.save();
        res.json(usuarios);
    } catch(e) {
        console.log(e);
        res.json("oops!");
    }
}

const updateUsuario = async (req, res) => {
    const { nombre } = req.params;
    const cambio = req.body;

    const usuarios = await Usuario.updateOne({ name: nombre }, cambio);

    if (usuarios) {
        res.json(usuarios);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const deleteUsuario = async (req, res) => {
    const { name } = req.params;

    const usuarios = await Usuario.deleteOne({ name });
    
    if (usuarios) {
        res.json(usuarios);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

module.exports = { 
    getUsuarios,
    getUsuariosByName,
    getBannedUsuarios,

    addUsuario,

    updateUsuario,

    deleteUsuario
};