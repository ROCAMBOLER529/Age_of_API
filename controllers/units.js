/*
+----------------------+
|                      |
| controllers/units.js |
|                      |
+----------------------+
*/

const Unit = require("../models/units");

const getAllUnits = async (req, res) => {
    const units = await Unit.find().exec();

    res.json(units);
}

const getUnitByName = async (req, res) => {
    let { name } = req.params;
    
    const units = await Unit.findOne({ name }).exec();

    res.json(units);
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

    const unit = await Unit.updateOne({ name: nombre }, cambio);
    res.json(unit);
}

const deleteUnit = async (req, res) => {
    let { name } = req.params;

    const unit = await Unit.deleteOne({ name });
    res.json(unit);
}

module.exports = {
    getAllUnits,
    getUnitByName,

    addUnit,

    updateStatsOfUnit,

    deleteUnit
}