const mongoose = require('mongoose');

let dataSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
});

module.exports = mongoose.model('node_js', dataSchema);