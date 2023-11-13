/*
+-----------------+
|                 |
| routes/units.js |
|                 |
+-----------------+
*/

const express = require('express');
const { param, query } = require('express-validator');
const router = express.Router();

const {
    getAllUnits,
    getUnitByName,
    getUnitByRelease,
    getUnitByAge,
    getUnitsByResource,

    addUnit,

    updateStatsOfUnit,
    
    deleteUnit
} = require('../controllers/units');

router.get('/', getAllUnits);
router.get('/all', getAllUnits);
router.get('/getUnitByName/:name', getUnitByName);
router.get('/getUnitByRelease/:introduced', getUnitByRelease);
router.get('/getUnitByAge/:age', getUnitByAge);
router.get('/getUnitsByResource/:resource', getUnitsByResource);

router.post('/addUnit', addUnit);

router.put('/updateStatsOfUnit/:nombre', updateStatsOfUnit);

router.delete('/deleteUnit/:name', deleteUnit);

module.exports = router;