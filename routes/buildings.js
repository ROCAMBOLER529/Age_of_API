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
    getBuildingsByIntroduced,
    getBuildingsByAge,
    getBuildingsByType,
    getBuildingsByResource,

    addPlainBuilding,
    addSimpleBuilding,

    updateNameOfBuilding,
    updateStatsOfBuilding,
    clearBuilding,
    
    deleteBuilding,
    deleteAllBuildingByAge
} = require('../controllers/buildings');

router.get('/', getAllBuildings);
router.get('/all', getAllBuildings);
router.get('/getBuildingByName/:name', getBuildingByName);
router.get('/getBuildingsByIntroduced/:introduced', getBuildingsByIntroduced);
router.get('/getBuildingsByAge/:age', getBuildingsByAge);
router.get('/getBuildingsByType/:type', getBuildingsByType);
router.get('/getBuildingsByResource/:resource', getBuildingsByResource);

router.post('/addPlainBuilding/', addPlainBuilding);
router.post('/addSimpleBuilding/', addSimpleBuilding);

router.put('/updateNameOfBuilding/:nombre', updateNameOfBuilding);
router.put('/updateStatsOfBuilding/:nombre', updateStatsOfBuilding);
router.put('/clearBuilding/:nombre', clearBuilding);

router.delete('/deleteBuilding/:name', deleteBuilding);
router.delete('/deleteAllBuildingByAge/:age', deleteAllBuildingByAge);

module.exports = router;