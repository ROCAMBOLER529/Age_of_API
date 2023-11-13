/*
+--------------------+
|                    |
| models/usuarios.js |
|                    |
+--------------------+
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuario = new Schema({
    name: String,
    password: String,
    rol: String
});

const Usuario = mongoose.model('usuarios', usuario);

module.exports = Usuario;