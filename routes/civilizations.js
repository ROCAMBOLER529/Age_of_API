/*
+-------------------------+
|                         |
| routes/civilizations.js |
|                         |
+-------------------------+
*/

const express = require('express');
const { param, query } = require('express-validator');
const {
    validarJWT
} = require('../middlewares/auth');
const router = express.Router();

const { 
    getAllCivs, 
    getCivByName, 
    getCivByHistoricalName, 
    getInfoOfCiv,
    getUnitsOfCiv,
    getBuildingsOfCiv,
    getTechsOfCiv,
    getOverviewOfCiv,

    addPlainCiv,
    addCiv,

    addUnitToCiv,

    deleteCiv
} = require('../controllers/civilizations');


const { validarName } = require('../middlewares/validarCampos');

router.get('/', getAllCivs);
router.get('/all', getAllCivs);
router.get('/getCivByName/:name', getCivByName);
router.get('/getCivByHistoricalName/:historical_name', getCivByHistoricalName);
router.get('/getInfoOfCiv/:name', getInfoOfCiv);
router.get('/getUnitsOfCiv/:name', getUnitsOfCiv);
router.get('/getBuildingsOfCiv/:name', getBuildingsOfCiv);
router.get('/getTechsOfCiv/:name', getTechsOfCiv);
router.get('/getOverviewOfCiv/:name', getOverviewOfCiv);

router.post('/addPlainCiv/', validarJWT, addPlainCiv);
router.post('/addCiv/', addCiv);

router.get('/addUnitsToCiv/:name', addUnitToCiv)

router.delete('/deleteCiv/:name', validarJWT, deleteCiv);

// router.post('/civilizations/addUnitToCiv', validarJWT, addUnitToCiv);
// router.put()
// router.delete('deleteCivByName/:name', query('name').notEmpty, deleteCivByName);

module.exports = router;