/*
+-------------------------+
|                         |
| models/civilizations.js |
|                         |
+-------------------------+
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const civilization = new Schema({
    id: Number,
    name: Object,
    information: Object,
    bonuses: Object,
    ai_player_names: Array,
    units: Object,
    buildings: Object,
    tech: Object
});

const Civilization = mongoose.model('civilization', civilization);

module.exports = Civilization;