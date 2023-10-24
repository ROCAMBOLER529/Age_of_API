const express = require('express');
const { param, query } = require('express-validator');
const router = express.Router();

const { 
    getUsuarios,
    getUsuariosByName,

    addUsuario,

    updateUsuario
 } = require('../controllers/usuarios');

router.get('/usuarios', getUsuarios);
router.get('/Usuarios/:name', getUsuariosByName);

router.post('/usuarios', addUsuario);

router.put('/usuarios/:nombre', updateUsuario);

module.exports = router;