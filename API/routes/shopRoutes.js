const express = require('express');
const router = express.Router();
const controller = require('./../controllers/shopController');
const middleware = require('./../middlewares/shopMiddlewares');

router.get('/get', middleware.checkId, controller.getShop);
// router.post('/set', controller.setShopItem);
// router.put('/update', controller.updateShopItem);

module.exports = router;