const c = require('./../config/constants');

module.exports = {
    checkType: (req, res, next) => {
        if (req.query.type === 'indiv' || req.query.type ==='multi') {
            next();
        } else {
            res.status(c.status.badRequest).send({ msg: 'You must introduce a valid mode!' });
        }
    },

    checkWorld: (req, res, next) => {
        if (req.query.type === 'multi') {
            next();
        } else {
            req.query.world = Number(req.query.world);
            req.query.level = Number(req.query.level);
            if (!Number.isNaN(req.query.world) && !Number.isNaN(req.query.level)) {
                if (req.query.world >= 1 && req.query.world <= 3 && req.query.level >= 1 && req.query.level <= 4) {
                    next();
                } else {
                    res.status(c.status.badRequest).send({ msg: 'You must introduce a valid world or level' });
                }
            } else {
                res.status(c.status.badRequest).send({ msg: 'World and level must be numbers' });
            }
        }
    }
}