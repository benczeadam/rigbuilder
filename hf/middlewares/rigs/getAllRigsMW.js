/**
 * Load all rigs from the database
 * The result is saved to res.locals.rigs
 */
const requireOption = require('../common/requireOption');

module.exports = function(objectrepository) {
    const MiningRigModel = requireOption(objectrepository, 'MiningRigModel');

    return function(req, res, next) {
        MiningRigModel.find({}, (err, miningrigs) => {
            if (err) {
                return next(err);
            }

            res.locals.miningrigs = miningrigs;
            return next();
        }).populate(['_cpu','_gpu','_ram','_ssd','_psu']);
    };
};