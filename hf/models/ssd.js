const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Ssd = db.model('Ssd', {
    name: String,
    price: Number
});

module.exports = Ssd;