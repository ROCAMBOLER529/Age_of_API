/*
+------------------------------+
|                              |
| controllers/civilizations.js |
|                              |
+------------------------------+
*/

const Civilization = require('../models/civilizations');
const { replaceChar } = require('../helpers/helpers');

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

const getCivByHistoricalName = (req, res) => {
    let { historical_name } = req.params;

    historical_name = replaceChar("-", " ", historical_name);
    const civ = data.civilization.find(x => x.name.historical == historical_name);

    if (civ) {
        res.json({
            status: "ok",
            civ
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    }
}

const getCivsByArchitecture = (req, res) => {
    let { architecture } = req.params;

    const civs = data.civilization.filter(x => x.information.architecture == architecture);

    if (civs) {
        res.json({
            status: "ok",
            civs
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civs
        });
    }
}

const getCivsByContinent = (req, res) => {
    let { continent } = req.params;

    continent = replaceChar("-", " ", continent);
    const civs = data.civilization.filter(x => x.information.continent == continent);

    if (civs) {
        res.json({
            status: "ok",
            civs
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civs
        });
    }
}

const getBonusesOfCiv = (req, res) => {
    let { civ } = req.params;

    const possibleCiv = data.civilization.find(x => x.name.common == civ);
    const pos = data.civilization.indexOf(possibleCiv);

    if(pos == -1) {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    } else {
        const bonuses = data.civilization[pos].bonuses;

        res.json({
            status: "ok",
            bonuses
        })
    }
}

const getAiNamesOfCiv = (req, res) => {
    let { civ } = req.params;

    const possibleCiv = data.civilization.find(x => x.name.common == civ);
    const pos = data.civilization.indexOf(possibleCiv);

    if(pos == -1) {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    } else {
        const bonuses = data.civilization[pos].ai_player_names;

        res.json({
            status: "ok",
            bonuses
        })
    }
}

const getInfantryOfCiv = (req, res) => {
    let { civ } = req.params;

    const possibleCiv = data.civilization.find(x => x.name.common == civ);

    if(possibleCiv) {
        res.json({
            status: "ok",
            civ: possibleCiv.units.infantry
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    }
}

const getArcheryOfCiv = (req, res) => {
    let { civ } = req.params;

    const possibleCiv = data.civilization.find(x => x.name.common == civ);

    if(possibleCiv) {
        res.json({
            status: "ok",
            civ: possibleCiv.units.archery
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    }
}

const getCavalryOfCiv = (req, res) => {
    let { civ } = req.params;

    const possibleCiv = data.civilization.find(x => x.name.common == civ);

    if(possibleCiv) {
        res.json({
            status: "ok",
            civ: possibleCiv.units.cavalry
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    }
}

const getSiegeOfCiv = (req, res) => {
    let { civ } = req.params;

    const possibleCiv = data.civilization.find(x => x.name.common == civ);

    if(possibleCiv) {
        res.json({
            status: "ok",
            civ: possibleCiv.units.siege
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    }
}

const getAcademyOfCiv = (req, res) => {
    let { civ } = req.params;

    const possibleCiv = data.civilization.find(x => x.name.common == civ);

    if(possibleCiv) {
        res.json({
            status: "ok",
            civ: possibleCiv.units.academy
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    }
}

const getNavyOfCiv = (req, res) => {
    let { civ } = req.params;

    const possibleCiv = data.civilization.find(x => x.name.common == civ);

    if(possibleCiv) {
        res.json({
            status: "ok",
            civ: possibleCiv.units.navy
        });
    } else {
        res.status(404).json({
            status: "No encontrado",
            civ
        });
    }
}

const getBuildingOfCiv = (req, res) => {
    
}

const getTechOfCiv = (req, res) => {
    
}

const getMissingUnitsOfCiv = (req, res) => {
    
}

const getMissingTechOfCiv = (req, res) => {
    
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
    addUnitToCiv,
    getCivByHistoricalName,
    getCivsByArchitecture,
    getCivsByContinent,

    getBonusesOfCiv,
    getAiNamesOfCiv,
    getInfantryOfCiv,
    getArcheryOfCiv,
    getCavalryOfCiv,
    getSiegeOfCiv,
    getAcademyOfCiv,
    getNavyOfCiv
};