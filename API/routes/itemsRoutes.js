const express = require('express');
const router = express.Router();
const controller = require('./../controllers/itemsController');
const middleware = require('./../middlewares/itemsMiddleware');

router.get('/get', middleware.checkIdGet, controller.getItem);
router.post('/set', middleware.checkId, middleware.checkQuality, controller.setItem);
router.put('/update', middleware.checkId, middleware.checkQuality, controller.updateItem);

module.exports = router;