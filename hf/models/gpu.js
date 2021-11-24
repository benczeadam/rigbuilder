const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Gpu = db.model('Gpu', {
    name: String,
    price: Number,
    hashrate: Number
});

module.exports = Gpu;