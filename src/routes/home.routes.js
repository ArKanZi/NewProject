const express = require('express');
const homeRouter = express.Router();

const homeCtrl = require('../controllers/home.controller');


homeRouter.get('/', homeCtrl.home);
homeRouter.get('/about', homeCtrl.about);

module.exports = homeRouter;