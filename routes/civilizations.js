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
    getNavyOfCiv,

    getStoneAgeBuildingsOfCiv,
    getToolAgeBuildingsOfCiv,
    getBronzeAgeBuildingsOfCiv,
    getIronAgeBuildingsOfCiv
} = require('../controllers/civilizations');

const { esAdmin, validarJWT } = require('../middlewares/validacionDeRol');
const { validarName } = require('../middlewares/validarCampos');

router.get('/civilizations', [validarJWT, esAdmin], getAllCivs);
router.get('/civilizations/:name', query('params').notEmpty. getCivByName);
router.get('/civilizations/historicalname/:historical_name', query('params').notEmpty, getCivByHistoricalName);
router.get('/civilizations/architecture/:architecture', query('params').notEmpty, getCivsByArchitecture);
router.get('/civilizations/continent/:continent', query('params').notEmpty, getCivsByContinent);

router.get('/civilizations/bonuses/:civ', query('params').notEmpty, getBonusesOfCiv);
router.get('/civilizations/AiNamesOfCiv/:civ', query('params').notEmpty, getAiNamesOfCiv);
router.get('/civilizations/infantry/:civ', query('params').notEmpty, getInfantryOfCiv);
router.get('/civilizations/archery/:civ', query('params').notEmpty, getArcheryOfCiv);
router.get('/civilizations/cavalry/:civ', query('params').notEmpty, getCavalryOfCiv);
router.get('/civilizations/siege/:civ', query('params').notEmpty, getSiegeOfCiv);
router.get('/civilizations/academy/:civ', query('params').notEmpty, getAcademyOfCiv);
router.get('/civilizations/navy/:civ', query('params').notEmpty, getNavyOfCiv);

router.get('/civilizations/stoneAgeBuildings/:civ', query('params').notEmpty, getStoneAgeBuildingsOfCiv);
router.get('/civilizations/toolAgeBuildings/:civ', query('params').notEmpty, getToolAgeBuildingsOfCiv);
router.get('/civilizations/bronzeAgeBuildings/:civ', query('params').notEmpty, getBronzeAgeBuildingsOfCiv);
router.get('/civilizations/ironAgeBuildings/:civ', query('params').notEmpty, getIronAgeBuildingsOfCiv);

router.post('/civilizations/addUnitToCiv', [validarJWT, esAdmin], addUnitToCiv);
// router.put()
// router.delete('deleteCivByName/:name', query('name').notEmpty, deleteCivByName);

module.exports = router;