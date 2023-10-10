/*
+-------------------------+
|                         |
| routes/civilizations.js |
|                         |
+-------------------------+
*/

const express = require('express');
const { param, query } = require('express-validator');
const router = express.Router();

const { getAllCivs, getCivByName, addUnitToCiv } = require('../controllers/civilizations');

const { esAdmin, validarJWT } = require('../middlewares/validacionDeRol');
const { validarName } = require('../middlewares/validarCampos');

router.get('/civilizations', [validarJWT, esAdmin], getAllCivs);
router.get('/civilizations/:name', getCivByName);

router.post('/civilizations/addUnitToCiv', validarJWT, addUnitToCiv);
// router.put()
// router.delete('deleteCivByName/:name', query('name').notEmpty, deleteCivByName);

module.exports = router;