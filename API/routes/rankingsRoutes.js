const express = require('express');
const router = express.Router();
const controller = require('./../controllers/rankingsController');
const middleware = require('./../middlewares/rankingsMiddlewares');


router.get('/get', middleware.checkType, middleware.checkWorld, controller.getRankings);

module.exports = router;