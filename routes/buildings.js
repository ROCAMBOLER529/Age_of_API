/*
+---------------------+
|                     |
| routes/buildings.js |
|                     |
+---------------------+
*/

const express = require('express');
const { param, query } = require('express-validator');
const router = express.Router();

const {
    getAllBuildings,
    getBuildingByName,

    addBuilding,

    updateStatsOfBuilding,
    
    deleteBuilding
} = require('../controllers/buildings');

router.get('/', getAllBuildings);
router.get('/all', getAllBuildings);
router.get('/:name', getBuildingByName);

router.post('/addBuilding', addBuilding);

router.put('/updateStatsOfBuilding/:nombre', updateStatsOfBuilding);

router.delete('/deleteBuilding/:name', deleteBuilding);

module.exports = router;