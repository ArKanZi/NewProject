const express = require('express');
const userRouter = express.Router();

const userCtrl = require('../controllers/users.controller');

userRouter.get('/login', userCtrl.login);
userRouter.get('/register', userCtrl.register);
userRouter.get('/forget-password', userCtrl.forgetPassword);

module.exports = userRouter;