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

const getAllByName = (req, res) => {
    res.json(data.civilization.map(x => x.name.common));
}

const getCivByName = (req, res) => {
    const nombre = req.params.name;

    res.json(data.civilization.find(x => x.name.common == nombre));
}

module.exports = {
    getAll,
    getCivByName
};