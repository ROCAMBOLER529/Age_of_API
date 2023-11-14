/*
+---------------------+
|                     |
| routes/buildings.js |
|                     |
+---------------------+
*/

const express = require('express');
const {
    validarName,
    validarBody 
} = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/auth');
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

router.post('/addPlainBuilding/', [validarJWT, validarBody], addPlainBuilding);
router.post('/addSimpleBuilding/', [validarJWT, validarBody], addSimpleBuilding);

router.put('/updateNameOfBuilding/:nombre', [validarJWT, validarBody], updateNameOfBuilding);
router.put('/updateStatsOfBuilding/:nombre', [validarJWT, validarBody], updateStatsOfBuilding);
router.put('/clearBuilding/:nombre', validarJWT, clearBuilding);

router.delete('/deleteBuilding/:name', validarJWT, deleteBuilding);
router.delete('/deleteAllBuildingByAge/:age', validarJWT, deleteAllBuildingByAge);

module.exports = router;