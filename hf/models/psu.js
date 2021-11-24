const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Psu = db.model('Psu', {
    name: String,
    price: Number
});

module.exports = Psu;