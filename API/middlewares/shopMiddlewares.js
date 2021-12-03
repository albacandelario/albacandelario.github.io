const c = require('./../config/constants');

module.exports = {
    checkId: (req, res, next) => {
        if (typeof req.query.id !== 'undefined') {
            req.query.id = Number(req.query.id);
            if (!Number.isNaN(req.query.id)) {
                next();
            } else {
                res.status(c.status.badRequest).send({ msg: 'You must introduce a number as id!'})
            }
        } else {
            next();
        }
    }
}