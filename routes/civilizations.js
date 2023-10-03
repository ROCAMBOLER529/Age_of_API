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

const { getAll, getCivByName } = require('../controllers/civilizations');
const { validarName } = require('../middlewares/validarCampos');

router.get('/', getAll);
router.get('/getCivByName/:name', param('name').notEmpty(), getCivByName);
router.delete('deleteCivByName/:name', query('name').notEmpty, deleteCivByName);
// router.get('/:id', )

module.exports = router;