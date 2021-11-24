const authMW = require('../middlewares/auth/authMW');
const checkUserLoginMW = require('../middlewares/auth/checkUserLoginMW');
const renderMW = require('../middlewares/common/renderMW');
const regUserMW = require('../middlewares/reg/regUserMW');
const getTopRigsMW = require('../middlewares/rigs/getTopRigsMW');
const getAllRigsMW = require('../middlewares/rigs/getAllRigsMW');
const getRigMW = require('../middlewares/rigs/getRigMW');
const addRigMW = require('../middlewares/rigs/addRigMW');
const saveRigMW = require('../middlewares/rigs/saveRigMW');
const delRigMW = require('../middlewares/rigs/delRigMW');
const getPartMW = require('../middlewares/parts/getPartMW');
const editPartMW = require('../middlewares/parts/editPartMW');


const MiningRigModel = require("../models/rig");
const CpuModel = require("../models/cpu");
const GpuModel = require("../models/gpu");
const PsuModel = require("../models/psu");
const RamModel = require("../models/ram");
const SsdModel = require("../models/ssd");


module.exports = function (app) {
    const objRepo = {
        MiningRigModel: MiningRigModel,
        CpuModel: CpuModel,
        GpuModel: GpuModel,
        PsuModel: PsuModel,
        RamModel: RamModel,
        SsdModel: SsdModel
    };
    
    app.use('/admin/add',
        authMW(objRepo),
        addRigMW(objRepo),
        renderMW(objRepo, 'addrig'));
    app.get('/admin/del/:rigid',
        authMW(objRepo),
        getRigMW(objRepo),
        delRigMW(objRepo));
    app.use('/admin/edit/:rigid',
        authMW(objRepo),
        getRigMW(objRepo),
        saveRigMW(objRepo),
        renderMW(objRepo, 'editrig'));
    app.get('/admin/edit/:rigid/:partid',
        authMW(objRepo),
        getPartMW(objRepo),
        editPartMW(objRepo),
        renderMW(objRepo, 'editrig'));
    app.get('/admin',
        authMW(objRepo),
        getAllRigsMW(objRepo),
        renderMW(objRepo, 'admin'));
    app.use('/',
        getTopRigsMW(objRepo),
        checkUserLoginMW(objRepo),
        regUserMW(objRepo),
        renderMW(objRepo, 'index'));
};