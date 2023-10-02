/*
+------------------------------+
|                              |
| controllers/civilizations.js |
|                              |
+------------------------------+
*/

const data = require('../json/data.json');

const getAll = (req, res) => {
    res.json(data.civilization);
}

module.exports = {
    getAll
};