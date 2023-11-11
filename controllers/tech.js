/*
+---------------------+
|                     |
| controllers/tech.js |
|                     |
+---------------------+
*/

const Tech = require('../models/tech');
const {replaceChar} = require('../helpers/helpers');

const getAllTech = async (req, res) => {
    const tech = await Tech.find().exec();

    if (tech) {
        res.json(tech);
    } else {
        res.status(404).json({
            status: 404,
            res: "Not found"
        });
    }
}

const getTechByName = async (req, res) => {
    let { name } = req.params;
    
    name = replaceChar("-", " ", name);
    const tech = await Tech.find({ name });

    if (tech) {
        res.json(tech);
    } else {
        res.status(404).json({
            status: 404,
            res: "Not found"
        });
    }
}

const getTechByRelease = async (req, res) => {
    let { introduced } = req.params;

    introduced = replaceChar("-", " ", introduced);
    const tech = await Tech.find({ introduced });

    if (tech) {
        res.json(tech);
    } else {
        res.status(404).json({
            status: 404,
            res: "Not found"
        });
    } 
}

const getTechByAge = async (req, res) => {
    let { age } = req.params;

    const tech = await Tech.find({ age });

    if (tech) {
        res.json(tech);
    } else {
        res.status(404).json({
            status: 404,
            res: "Not found"
        });
    } 
}

const getTechByResource = async (req, res) => {
    let { resource } = req.params;

    const tech = await Tech.find();
    const techWithResource = tech.filter(x => x.research.resources.hasOwnProperty(resource));

    if (techWithResource) {
        res.json(techWithResource);
    } else {
        res.status(404).json({
            status: 404,
            res: "Not found"
        });
    } 
}

// ----
// post
// ----

const addPlainTech = async (req, res) => {
    let { name, introduced, age, effects } = req.body;

    const array = await Tech.find();
    const id = array.length + 30001;
    
    const tech = new Tech({
        id,
        name,
        introduced,
        age,
        image: "default.png",
        effects,
        research: {
            at: 0,
            resources: 0
        },
        time_in_seconds: 0
    });

    try {
        await tech.save();
        res.json(tech);
    } catch(e) {
        console.log(e);
        res.json(tech);
    }
}

const addSimpleTech = async (req, res) => {
    let { name, introduced, age, image, effects, at, food, wood, stone, gold, time_in_seconds } = req.body;

    const array = await Tech.find();
    const id = array.length + 30001;
    image = image.concat(".png");
    
    const tech = new Tech({
        id,
        name,
        introduced,
        age,
        image,
        effects,
        research: {
            at,
            resources: {
                food,
                wood,
                stone,
                gold
            }
        },
        time_in_seconds
    });

    try {
        await tech.save();
        res.json(tech);
    } catch(e) {
        console.log(e);
        res.json(e);
    }
}

// ---
// put
// ---

const updateNameOfTech = async (req, res) => {
    const { nombre } = req.params;
    const cambio = req.body;
    console.log(cambio);

    const tech = await Tech.updateOne({ name: nombre }, cambio);
    console.log(tech);

    res.json(tech);
}

const updateResearchOfTech = async (req, res) => {
    const { nombre } = req.params;
    const { food, wood, stone, gold} = req.body;

    const tech = await Tech.updateOne({ name: nombre }, { 
        research: {
            resources: {
                food, 
                wood,
                stone,
                gold
            }
        }
     });
    console.log(tech);

    res.json(tech);
}

const clearTech = async (req, res) => {
    const { nombre } = req.params;

    const tech = await Tech.updateOne({ name: nombre }, { 
        introduced: null,
        age: null,
        image: "default.png",
        effects: null,
        research: {
            at: null,
            prerequisite: null,
            requisite_for: null,
            resources: {
                food: null,
                wood: null,
                stone: null,
                gold: null
            }
        },
        time_in_seconds: null
     });
    console.log(tech);

    res.json(tech);
}

// ------
// delete
// ------

const deleteTech = async (req, res) => {
    let { name } = req.params;

    const tech = await Tech.deleteOne({ name });
    res.json(tech);
}

const deleteAllTechByAge = async (req, res) => {
    let { age } = req.params;

    const tech = await Tech.deleteMany({ age });
    res.json(tech);
}

const deleteAllTechByBuilding = async (req, res) => {
    let { at } = req.params;

    const tech = await Tech.deleteMany({ at });
    res.json(tech);
}

module.exports = {
    getAllTech,
    getTechByName,
    getTechByRelease,
    getTechByAge,
    getTechByResource,

    addPlainTech,
    addSimpleTech,

    updateNameOfTech,
    updateResearchOfTech,
    clearTech,

    deleteTech,
    deleteAllTechByAge,
    deleteAllTechByBuilding
}