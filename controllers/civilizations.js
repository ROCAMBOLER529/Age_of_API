/*
+------------------------------+
|                              |
| controllers/civilizations.js |
|                              |
+------------------------------+
*/

const data = require('../json/data.json');

const getAllCivs = (req, res) => {
    res.json(data.civilization);
}

const getCivByName = (req, res) => {
    let { name } = req.params;
    
    const civ = data.civilization.find(x => x.name.common == name);

    if (civ) {
        res.json(civ);
    } else {
        res.status(404).json({
            civ,
            status: "No encontrado"
        });
    }
}

// -----
// Admin 
// -----

const addUnitToCiv = (req, res) => {
    const { civ, unit } = req.body;

    const findCiv = data.civilization.find(x => x.name.common == civ);
    const indexOfCiv = data.civilization.indexOf(findCiv);
    console.log(civ);

    if (findCiv) {
        data.civilization[indexOfCiv].units.push(unit);
        res.status(201).json({
            civ,
            unit,
            status: "ok"
        });
    } else {
        res.status(404).json({
            civ,
            status: "Civ no encontrada"
        });
    }
}

const changeHistoricalOfCiv = (req, res) => {
    
}

module.exports = {
    getAllCivs,
    getCivByName,

    addUnitToCiv
};