/*
+----------------------+
|                      |
| controllers/units.js |
|                      |
+----------------------+
*/

const { replaceChar } = require("../helpers/helpers");
const Unit = require("../models/units");

const getAllUnits = async (req, res) => {
    const units = await Unit.find().exec();

    if (units) {
        res.json(units);    
    } else {
        res.status(404).json({
            log: "Not found"
        });
    }
}

const getUnitByName = async (req, res) => {
    let { name } = req.params;
    
    const units = await Unit.findOne({ name }).exec();

    if (units) {
        res.json(units);    
    } else {
        res.status(404).json({
            log: "Not found"
        });
    }
}

const getUnitByRelease = async (req, res) => {
    let { introduced } = req.params;
    
    introduced = replaceChar("-", " ", introduced);
    const units = await Unit.findOne({ introduced }).exec();

    if (units) {
        res.json(units);    
    } else {
        res.status(404).json({
            log: "Not found"
        });
    }
}

const getUnitByAge = async (req, res) => {
    let { age } = req.params;
    
    const units = await Unit.findOne({ age }).exec();

    if (units) {
        res.json(units);    
    } else {
        res.status(404).json({
            log: "Not found"
        });
    }
}

const getUnitsByResource = async (req, res) => {
    let { resource } = req.params;

    const units = await Unit.find();
    const possibleUnits = units.filter(x => x.hasOwnProperty('traning'));
    const unitsWithResource = possibleUnits.filter(x => x.traning.resources.hasOwnProperty(resource));
    

    if (unitsWithResource) {
        res.json(unitsWithResource);
    } else {
        res.status(404).json({
            status: 404,
            res: "Not found"
        });
    } 
}

const addUnit = async (req, res) => {
    let { id, name, introduced, is_hero, trained_at, food, wood, stone, gold, time_in_seconds, hp, rate, melee_armor, pierce_armor, speed, line_of_sight} = req.body;

    const unit = new Unit({
        id,
        name,
        introduced,
        age: parseInt((id % 1000) / 100),
        training: (is_hero) ? null : {
            trained_at: parseInt(trained_at),
            resources: {
                food: parseInt(food),
                wood: parseInt(wood),
                stone: parseInt(stone),
                gold: parseInt(gold)
            },
            time_in_seconds: parseInt(time_in_seconds)
        },
        statistics: {
            hp: parseInt(hp),
            rate: parseFloat(rate),
            melee_armor: parseInt(melee_armor),
            pierce_armor: parseInt(pierce_armor),
            speed: parseFloat(speed),
            line_of_sight: parseInt(line_of_sight)
        }

    });

    try {
        await unit.save();
        res.json(unit);
    } catch(e) {
        console.log(e);
        res.json(unit);
    }
}

const updateStatsOfUnit = async (req, res) => {
    let { nombre } = req.params;
    let { hp, rate, melee_armor, pierce_armor, speed, line_of_sight } = req.body;
    const cambio = {
        hp,
        rate,
        melee_armor,
        pierce_armor,
        speed,
        line_of_sight
    }

    const units = await Unit.updateOne({ name: nombre }, cambio);
    
    if (units) {
        res.json(units);    
    } else {
        res.status(404).json({
            log: "Not found"
        });
    }
}

const deleteUnit = async (req, res) => {
    let { name } = req.params;

    const units = await Unit.deleteOne({ name });
    
    if (units) {
        res.json(units);    
    } else {
        res.status(404).json({
            log: "Not found"
        });
    }
}

module.exports = {
    getAllUnits,
    getUnitByName,
    getUnitByRelease,
    getUnitByAge,
    getUnitsByResource,

    addUnit,

    updateStatsOfUnit,

    deleteUnit
}