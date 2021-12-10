const express = require('express');
const router = express.Router();
const controller = require('./../controllers/shopController');
const middleware = require('./../middlewares/shopMiddlewares');

router.get('/get', middleware.checkIdGet, controller.getShop);
router.post('/set', middleware.checkId, middleware.checkItemId, middleware.checkPrice, controller.setShop);
router.put('/update', middleware.checkId, middleware.checkItemId, middleware.checkPrice, controller.updateShop);

module.exports = router;