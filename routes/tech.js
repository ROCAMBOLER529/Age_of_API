/*
+----------------+
|                |
| routes/tech.js |
|                |
+----------------+
*/

const express = require('express');
const { param, query } = require('express-validator');
const router = express.Router();

const {
    getAllTech,
    getTechByName,
    getTechByRelease,
    getTechByAge,
    getTechByResource,
    getTechByBuilding,

    addPlainTech,
    addSimpleTech,

    updateNameOfTech,
    updateResearchOfTech,
    clearTech,

    deleteTech,
    deleteAllTechByAge,
    deleteAllTechByBuilding
} = require('../controllers/tech');

router.get('/', getAllTech);
router.get('/all', getAllTech);
router.get('/getTechByName/:name', getTechByName);
router.get('/getTechByRelease/:introduced', getTechByRelease);
router.get('/getTechByAge/:age', getTechByAge);
router.get('/getTechByResource/:resource', getTechByResource);
router.get('/getTechByBuilding/:building', getTechByBuilding)

router.post('/addPlainTech/', addPlainTech);
router.post('/addSimpleTech/', addSimpleTech);

router.put('/updateNameOfTech/:nombre', updateNameOfTech);
router.put('/updateResearchOfTech/:nombre', updateResearchOfTech);
router.put('/clearTech/:nombre', clearTech);

router.delete('/deleteTech/:name', deleteTech);
router.delete('/deleteAllTechByAge/:age', deleteAllTechByAge);
router.delete('/deleteAllTechByBuilding/:at', deleteAllTechByBuilding);

module.exports = router;