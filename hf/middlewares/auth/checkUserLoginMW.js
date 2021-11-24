/**
 * Check the login credentials (from POST), if it's the right,
 * create a session for the user and redirect to /admin
 */

 const requireOption = require('../common/requireOption');

 module.exports = function (objectrepository) {
    return function(req, res, next) {
      /*  if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'vakond') {
            req.session.belepve = true;
            return req.session.save(err => res.redirect('/admin'));
        }

        res.locals.error = 'Hibás jelszó!';*/
        return next();
    };
}