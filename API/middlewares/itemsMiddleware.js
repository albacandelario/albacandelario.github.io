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

    checkQuality: (req, res, next) => {
        if (typeof req.body.quality !== 'undefined') {
            req.body.item = +req.body.quality;
            if (!Number.isNaN(req.body.quality)) {
                next();
            } else {
                res.status(c.status.badRequest).send({ msg: 'You must introduce a number as item id!'})
            }
        } else {
            next();
        }
    },

    updateShop: (req, res) => {
        const item = shopData.find((shopitem) => shopitem.id === req.body.id);

        if (item) {
            shopData.forEach((shopitem, i) => {
                if (shopitem.id === item.id) {
                    shopData.splice(i, 1);
                    shopData.push({
                        id: req.body.id,
                        item: req.body.item,
                        price: req.body.price,
                    });

                    res.status(c.status.success).send({ msg: 'Item updated!' });
                }
            });
        } else {
            res.status(c.status.notFound).send({ msg: 'Item not found' });
        }
    }
}