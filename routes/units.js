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

    addUnit,

    updateStatsOfUnit,
    
    deleteUnit
} = require('../controllers/units');

router.get('/', getAllUnits);
router.get('/all', getAllUnits);
router.get('/:name', getUnitByName);

router.post('/addUnit', addUnit);

router.put('/updateStatsOfUnit/:nombre', updateStatsOfUnit);

router.delete('/deleteUnit/:name', deleteUnit);

module.exports = router;