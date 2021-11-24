/**
 * Load a part from the database using the :partid param
 * The result is saved to res.locals.rig
 */

 const requireOption = require('../common/requireOption');
 module.exports = function(objectrepository) {
    const MiningRigModel = requireOption(objectrepository, 'MiningRigModel');

    return function(req, res, next) {
        MiningRigModel.findOne({ _id: req.params.miningrig }, (err, miningrig) => {
            if (err || !miningrig) {
                return next(err);
            }

            res.locals.miningrig = miningrig;
            return next();
        });
    };
 };