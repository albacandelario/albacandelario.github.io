const c = require('./../config/constants');

const shopData = [
    {
        id: 1,
        item: 1,
        price: 500
    },
    {
        id: 2,
        item: 5,
        price: 1200
    },
    {
        id: 3,
        item: 2,
        price: 300
    },
    {
        id: 4,
        item: 3,
        price: 700
    },
];

module.exports = {
    getShop: (req, res) => {
        if (typeof req.query.id !== 'undefined') {
            const itemShop = shopData.find(item => item.id === req.query.id);
            if (itemShop) {
                res.status(c.status.success).send({ msg: itemShop});
            } else {
                res.status(c.status.notFound).send({ msg: 'Item not found' });
            }
        } else {
            res.status(c.status.success).send({ msg: shopData })
        }
    },
    setShop: (req, res) => {
        shopData.push({
            id: shopData.length,
            item: req.body.item,
            price: req.body.price,
        });
        res.status(c.status.success).send({ msg: `Shop item added with id: ${shopData.length - 1}`});
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