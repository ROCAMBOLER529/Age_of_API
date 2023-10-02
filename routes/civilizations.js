/*
+-------------------------+
|                         |
| routes/civilizations.js |
|                         |
+-------------------------+
*/

const express = require('express');
const router = express.Router();

const { getAll } = require('../controllers/civilizations');

router.get('/', getAll);

module.exports = router;