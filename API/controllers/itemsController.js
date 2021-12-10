const c = require('./../config/constants');

const itemData = [
    {
        id: 1,
        name: 'Pepe',
        quality: 3,
        type: 'Helmet'
    },
    {
        id: 2,
        name: 'dahf',
        quality: 4,
        type: 'Bat'
    },
    {
        id: 3,
        name: 'Pesdfsape',
        quality: 2,
        type: 'Bomb'
    },
    {
        id: 4,
        name: 'AA',
        quality: 1,
        type: 'Body'
    },
];

module.exports = {
    getItem: (req, res) => {
        if (typeof req.query.id !== 'undefined') {
            const itemItem = itemData.find(item => item.id === req.query.id);
            if (itemItem) {
                res.status(c.status.success).send({ msg: itemItem});
            } else {
                res.status(c.status.notFound).send({ msg: 'Item not found' });
            }
        } else {
            res.status(c.status.success).send({ msg: itemData });
        }
    },
    setItem: (req, res) => {
        itemData.push({
            id: itemData.length,
            name: req.body.name,
            quality: req.body.quality,
            type: req.body.type,
        });
        res.status(c.status.success).send({ msg: `Item added with id: ${itemData.length - 1}`});
    },
    updateItem: (req, res) => {
        const item = itemData.find((itemItem) => itemItem.id === req.body.id);

        if (item) {
            itemData.forEach((itemItem, i) => {
                if (itemItem.id === item.id) {
                    itemData.splice(i, 1);
                    itemData.push({
                        id: req.body.id,
                        name: req.body.name,
                        quality: req.body.quality,
                        type: req.body.type,
                    });

                    res.status(c.status.success).send({ msg: 'Item updated!' });
                }
            });
        } else {
            res.status(c.status.notFound).send({ msg: 'Item not found' });
        }
    }
}