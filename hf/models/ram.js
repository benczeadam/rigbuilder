const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Ram = db.model('Ram', {
    name: String,
    price: Number
});

module.exports = Ram;