const c = require('./../config/constants');

module.exports = {
    checkIdGet: (req, res, next) => {
        if (typeof req.query.id !== 'undefined') {
            req.query.id = +req.query.id;
            if (!Number.isNaN(req.query.id)) {
                next();
            } else {
                res.status(c.status.badRequest).send({ msg: 'You must introduce a number as id!'})
            }
        } else {
            next();
        }
    },
    checkId: (req, res, next) => {
        if (typeof req.body.id !== 'undefined') {
            req.body.id = +req.body.id;
            if (!Number.isNaN(req.body.id)) {
                next();
            } else {
                res.status(c.status.badRequest).send({ msg: 'You must introduce a number as id!'})
            }
        } else {
            next();
        }
    },

    checkItemId: (req, res, next) => {
        if (typeof req.body.item !== 'undefined') {
            req.body.item = +req.body.item;
            if (!Number.isNaN(req.body.item)) {
                next();
            } else {
                res.status(c.status.badRequest).send({ msg: 'You must introduce a number as item id!'})
            }
        } else {
            next();
        }
    },

    checkPrice: (req, res, next) => {
        if (typeof req.body.price !== 'undefined') {
            req.body.price = +req.body.price;
            if (!Number.isNaN(req.body.price)) {
                next();
            } else {
                res.status(c.status.badRequest).send({ msg: 'You must introduce a number as price!'})
            }
        } else {
            next();
        }
    },
}