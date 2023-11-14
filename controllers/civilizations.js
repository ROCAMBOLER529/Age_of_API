/*
+------------------------------+
|                              |
| controllers/civilizations.js |
|                              |
+------------------------------+
*/

const Civilization = require('../models/civilizations');
const Units = require('../models/units');
const Buildings = require('../models/buildings');
const Techs = require('../models/tech');
const { 
    oldReplace,
    olderReplace,
    replaceChar, 
    displayUnitsNamesInCiv, 
    displayBuildingsNamesInCiv, 
    displayTechsNamesInCiv,
    displayMissingTechInCiv,
    displayMissingUnitInCiv
} = require('../helpers/helpers');

const getAllCivs = async (req, res) => {
    const civs = await Civilization.find();

    if (civs) {
        res.json(civs);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getCivByName = async (req, res) => {
    let { name } = req.params;
    
    const civs = await Civilization.findOne({ 'name.common': name }).exec();

    if (civs) {
        res.json(civs);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getCivByHistoricalName = async (req, res) => {
    let { historical_name } = req.params;

    historical_name = replaceChar("-", " ", historical_name);
    const civs = await Civilization.findOne({ 'name.historical': historical_name }).exec();

    if (civs) {
        res.json(civs);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getInfoOfCiv = async (req, res) => {
    let { name } = req.params;

    const civs = await Civilization.findOne({ 'name.common': name }).exec();

    if (civs) {
        res.json(civs.information);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getUnitsOfCiv = async (req, res) => {
    let { name } = req.params;

    const civs = await Civilization.findOne({ 'name.common': name }).exec();
    const units = await Units.find().exec();

    const resCiv = displayUnitsNamesInCiv(civs, units);

    if (resCiv) {
        res.json(resCiv);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getBuildingsOfCiv = async (req, res) => {
    let { name } = req.params;

    const civs = await Civilization.findOne({ 'name.common': name }).exec();
    const units = await Buildings.find().exec();

    const resCiv = displayBuildingsNamesInCiv(civs, units);

    if (resCiv) {
        res.json(resCiv);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getTechsOfCiv = async (req, res) => {
    let { name } = req.params;

    const civs = await Civilization.findOne({ 'name.common': name }).exec();
    const tech = await Techs.find().exec();

    const resCiv = displayTechsNamesInCiv(civs, units);

    if (resCiv) {
        res.json(resCiv);
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

const getOverviewOfCiv = async (req, res) => {
    const { name } = req.params;

    const civs = await Civilization.findOne({ 'name.common': name }).exec();
    const tech = await Techs.find().exec();
    const units = await Units.find();

    const missing_tech = displayMissingTechInCiv(civs, tech);
    const missing_units = displayMissingUnitInCiv(civs, units.filter(x => x.age != undefined));

    if (civs) {
        res.json({
            focus: civs.bonuses.features,
            architecture: civs.information.architecture,
            civ_bonuses: civs.bonuses.single_bonus,
            team_bonus: civs.bonuses.team_bonus,
            missing_tech,
            missing_units
        })
    } else {
        res.status(404).json({
            log: "Not found"
        })
    }
}

// -----
// Admin 
// -----

const addPlainCiv = async (req, res) => {
    const { name, historical } = req.body;

    const civi = await Civilization.find().exec();
    const id = civi.length + 1000;
    
    const civ = new Civilization({
        id,
        name: {
            common: name,
            historical
        },    
    });

    try {
        await civ.save();
        res.json(civ);
    } catch(e) {
        console.log(e);
        res.json(e);
    }
}

const addCiv = async (req, res) => {
    const { name, historical, introduced, architecture, continent, image } = req.body;

    const id = (Civilization.find()).lenght + 1000;
    
    const civ = new Civilization({
        id,
        name: {
            common: name,
            historical
        },
        information: {
            introduced,
            architecture,
            continent,
            image
        },
        bonuses: {
            freature: [],
            single_bonus: [],
            team_bonus: ""
        },
        ai_player_names: [],
        units: {},
        buildings: {},
        tech: {}
    });

    try {
        await civ.save();
        res.json(civ);
    } catch(e) {
        console.log(e);
        res.json(e);
    }
}

const addUnitToCiv = async (req, res) => {
    const { name } = req.params;
    const body = Object.entries(req.body).map(x => x[1]).flat();

    let civ = await Civilization.findOne({ 'name.common': name });
    const listOfUnits = await Units.find();

    if (!civ) {
        res.status(404).json({
            log: "Civ Not found"
        })
    }

    const existen = body.map(x => listOfUnits.map(x => x.name).includes(x));
    if (!existen.reduce((a, b) => a && b)) {
        res.status(404).json({
            log: "Inexistent unit"
        })
    }

    body.map(x => {
        const troop = listOfUnits.find(y => y.name == x);
        const type = troop.type;
        
        if (civ.units.hasOwnProperty(type)) {
            civ.units[type].push(troop.id);
            console.log(civ.units);
        } 
    });
    const u = civ.units;
    civ = await Civilization.updateOne({ 'name.common': name }, { units: u });
    
    if (civ) {
        res.json(civ);
    } else {
        res.status(500).json({
            log: "Oops!"
        })
    }
}

const addTechToCiv = async (req, res) => {
    const { name } = req.params;
    const body = Object.entries(req.body).map(x => x[1]).flat();

    let civ = await Civilization.findOne({ 'name.common': name });
    const listOfTechs = await Techs.find();
    let listOfBuildings = await Buildings.find();

    if (!civ) {
        res.status(404).json({
            log: "Civ Not found"
        })
    }

    const existen = body.map(x => listOfTechs.map(x => x.name).includes(x));
    if (!existen.reduce((a, b) => a && b)) {
        res.status(404).json({
            log: "Inexistent tech"
        })
    }

    body.map(x => {
        const tech = listOfTechs.find(y => y.name == x);
        const at = listOfBuildings.find(y => y.id == tech.research.at);

        listOfBuildings = listOfBuildings.map(x => x.name);
        listOfBuildings = listOfBuildings.map(x => {
            x = x.toLowerCase();
            return olderReplace(" ", "_", x);
        });

        if (civ.units.hasOwnProperty(type)) {
            civ.units[type].push(troop.id);
            console.log(civ.units);
        } 
    });
    const u = civ.units;
    civ = await Civilization.updateOne({ 'name.common': name }, { units: u });
    
    if (civ) {
        res.json(civ);
    } else {
        res.status(500).json({
            log: "Oops!"
        })
    }
}

const deleteCiv = async (req, res) => {
    const { name } = req.params;

    const civ = await Civilization.deleteOne({ 'name.common': name });

    if (civ) {
        res.json(civ)
    } else {
        res.status(404).json({
            log: "Civ not found"
        })
    }
}

module.exports = {
    getAllCivs,
    getCivByName,
    getCivByHistoricalName,
    getInfoOfCiv,
    getUnitsOfCiv,
    getBuildingsOfCiv,
    getTechsOfCiv,
    getOverviewOfCiv,

    addPlainCiv,
    addCiv,

    addUnitToCiv,
    addTechToCiv,

    deleteCiv
};