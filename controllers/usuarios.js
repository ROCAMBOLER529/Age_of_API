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
    res.json(usuarios);
}

const getUsuariosByName = async (req, res) => {
    const { name } = req.params;

    const usuarios = await Usuario.findOne({ name }).exec();
    res.json(usuarios);
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
    const { name, password, rol } = req.body;

    const usuarios = await Usuario.updateOne({ nombre }, { 
        name,
        password,
        rol
    }).exec();

    res.json(usuarios);
}

const deleteUsuario = async (req, res) => {
    const { name } = req.params;

    const usuarios = await Usuario.deleteOne({ name });
    res.json(usuarios);
}

module.exports = { 
    getUsuarios,
    getUsuariosByName,

    addUsuario,

    updateUsuario
};