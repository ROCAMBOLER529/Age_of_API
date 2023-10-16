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

const { 
    getAllCivs, 
    getCivByName, 
    addUnitToCiv, 
    getCivByHistoricalName, 
    getCivsByArchitecture, 
    getCivsByContinent,

    getBonusesOfCiv,
    getAiNamesOfCiv,
    getInfantryOfCiv,
    getArcheryOfCiv,
    getCavalryOfCiv,
    getSiegeOfCiv,
    getAcademyOfCiv,
    getNavyOfCiv
} = require('../controllers/civilizations');

const { esAdmin, validarJWT } = require('../middlewares/validacionDeRol');
const { validarName } = require('../middlewares/validarCampos');

router.get('/civilizations', [validarJWT, esAdmin], getAllCivs);
router.get('/civilizations/:name', getCivByName);
router.get('/civilizations/historicalname/:historical_name', getCivByHistoricalName);
router.get('/civilizations/architecture/:architecture', getCivsByArchitecture);
router.get('/civilizations/continent/:continent', getCivsByContinent);

router.get('/civilizations/bonuses/:civ', getBonusesOfCiv);
router.get('/civilizations/AiNamesOfCiv/:civ', getAiNamesOfCiv);
router.get('/civilizations/infantry/:civ', getInfantryOfCiv);
router.get('/civilizations/archery/:civ', getArcheryOfCiv);
router.get('/civilizations/cavalry/:civ', getCavalryOfCiv);
router.get('/civilizations/siege/:civ', getSiegeOfCiv);
router.get('/civilizations/academy/:civ', getAcademyOfCiv);
router.get('/civilizations/navy/:civ', getNavyOfCiv);

router.post('/civilizations/addUnitToCiv', validarJWT, addUnitToCiv);
// router.put()
// router.delete('deleteCivByName/:name', query('name').notEmpty, deleteCivByName);

module.exports = router;