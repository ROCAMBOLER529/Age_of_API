/*
+--------------------------+
|                          |
| controllers/buildings.js |
|                          |
+--------------------------+
*/

const Building = require("../models/buildings");

const getAllBuildings = async (req, res) => {
    const buildings = await Building.find().exec();

    res.json(buildings);
}

const getBuildingByName = async (req, res) => {
    let { name } = req.params
    
    const building = await Building.findOne({ name }).exec();

    res.json(building);
}

const addBuilding = async (req, res) => {
    let { id, name, introduced, drop_off_resources, can_hold_units, food, wood, stone, gold, time_in_seconds, width, height, hp, melee_armor, pierce_armor, line_of_sight} = req.body;

    const building = new Building({
        id,
        name,
        introduced,
        age: parseInt((id % 1000) / 100),
        drop_off_resources,
        can_hold_units,
        construction: {
            resources: {
                food: parseInt(food),
                wood: parseInt(wood),
                stone: parseInt(stone),
                gold: parseInt(gold)
            },
            time_in_seconds: parseInt(time_in_seconds)
        },
        statistics: {
            size: {
                width: parseInt(width),
                height: parseInt(height)
            },
            hp: parseInt(hp),
            melee_armor: parseInt(melee_armor),
            pierce_armor: parseInt(pierce_armor),
            line_of_sight: parseInt(line_of_sight),
        }

    });

    try {
        await building.save();
        res.json(building);
    } catch(e) {
        console.log(e);
        res.json(e);
    }
}

const updateStatsOfBuilding = async (req, res) => {
    let { nombre } = req.params;
    let { width, height, hp, melee_armor, pierce_armor, line_of_sight } = req.body;
    const cambio = {
        size: {
            width: parseInt(width), 
            height: parseInt(height),
        },
        hp: parseInt(hp), 
        melee_armor: parseInt(melee_armor), 
        pierce_armor: parseInt(pierce_armor), 
        line_of_sight: parseInt(line_of_sight)
    }

    const building = await Building.updateOne({ name: nombre }, { statistics: cambio });
    res.json(building);
}

const deleteBuilding = async (req, res) => {
    let { name } = req.params;

    const building = await Building.deleteOne({ name });
    res.json(building);
}

module.exports = {
    getAllBuildings,
    getBuildingByName,

    addBuilding,

    updateStatsOfBuilding,

    deleteBuilding
}