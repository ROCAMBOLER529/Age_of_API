/*
+-------------------------+
|                         |
| routes/civilizations.js |
|                         |
+-------------------------+
*/

const express = require('express');
const router = express.Router();

const { getAllCivs, getCivByName, addUnitToCiv } = require('../controllers/civilizations');

router.get('/civilizations', getAllCivs);
router.get('/civilizations/:name', getCivByName);

router.post('/civilizations/addUnitToCiv', addUnitToCiv);
// router.put()

module.exports = router;