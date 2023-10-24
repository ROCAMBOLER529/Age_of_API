const mongoose = require('mongoose');
const { Schema } = mongoose;

const tech = new Schema({
    name: String,
    research: {
        require: Array,
        research_at: String,
        resources: Array,
        time: Number
    }
});

