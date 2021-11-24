/**
 * Removes a rig from the database, the entity used here is: res.locals.rig
 * Redirects to /admin after delete
 */

 const requireOption = require('../common/requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
        if(typeof res.locals.miningrig === 'undefined' ) {
            return next();
        }
        
        res.locals.miningrig.remove((err) => {
            if(err) {
                return next(err);
            }
        })
            return res.redirect('/admin');
     };
 };