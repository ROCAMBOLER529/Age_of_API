const express = require('express');
const router = express.Router();
const { getAllCivs } = require('../controllers/civilizations');
const { login } = require('../controllers/auth');

router.post('/', login);

module.exports = router;