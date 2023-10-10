const express = require('express');
const router = express.Router();
const { getAllCivs } = require('../controllers/civilizations');
const { login } = require('../controllers/auth');

// const { getAllCivs, getCivByName, addUnitToCiv } = require('../controllers/civilizations');

// const { esAdmin, validarJWT } = require('../middlewares/validacionDeRol');
// const { validarName } = require('../middlewares/validarCampos');

// router.get('/civilizations', [validarJWT, esAdmin], getAllCivs);
// router.get('/civilizations/:name', getCivByName);

// router.post('/civilizations/addUnitToCiv', validarJWT, addUnitToCiv);
// router.put()
// router.delete('deleteCivByName/:name', query('name').notEmpty, deleteCivByName);

router.post('/', login);

module.exports = router;