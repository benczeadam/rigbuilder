/**
 * Add a new rig with POST method.
 * The new rig is created with the given name and parts with empty data.
 * Redirects to /admin after success
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const MiningRigModel = requireOption(objectrepository, 'MiningRigModel');

    return function (req, res, next) {
        if (typeof req.body.newName === 'undefined') {
            return next();
        }

        if (typeof res.locals.miningrig === 'undefined') {
            res.locals.miningrig = new MiningRigModel();
        }

        res.locals.miningrig.name = req.body.newName;

        res.locals.miningrig.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('./admin');
        });
    };
};