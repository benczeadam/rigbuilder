const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Cpu = db.model('Cpu', {
    name: String,
    price: Number,
    _parent: {
        type: Schema.Types.ObjectId,
        ref: 'Rig'
    }
});

module.exports = Cpu;