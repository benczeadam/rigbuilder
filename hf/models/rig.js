const Schema = require('mongoose').Schema;
const db = require('../config/db');

const MiningRig = db.model('MiningRig', {
    name: String,
    cpucount: Number,
    gpucount: Number,
    ramcount: Number,
    ssdcount: Number,
    psucount: Number,
    _cpu: {
        type: Schema.Types.ObjectId,
        ref: 'Cpu'
    },
    _gpu: {
        type: Schema.Types.ObjectId,
        ref: 'Gpu'
    },
    _ram: {
        type: Schema.Types.ObjectId,
        ref: 'Ram'
    },
    _ssd: {
        type: Schema.Types.ObjectId,
        ref: 'Ssd'
    },
    _psu: {
        type: Schema.Types.ObjectId,
        ref: 'Psu'
    }
});

module.exports = MiningRig;