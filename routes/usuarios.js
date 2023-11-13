const express = require('express');
const { param, query } = require('express-validator');
const router = express.Router();

const { 
    getUsuarios,
    getUsuariosByName,
    getBannedUsuarios,

    addUsuario,

    updateUsuario,

    deleteUsuario
 } = require('../controllers/usuarios');

router.get('/', getUsuarios);
router.get('/getUsuariosByName/:name', getUsuariosByName);
router.get('/banned/', getBannedUsuarios);

router.post('/addUsuario', addUsuario);

router.put('/updateUsuario/:nombre', updateUsuario);

router.delete('/deleteUsuario/:name', deleteUsuario);

module.exports = router;