// get data, create session, join
const express = require('express');
const router = express.Router();
const { body } = require('express-validator/check');
const isAuth = require('../middleware/is-auth');

const controller = require('../controllers/session')

router.get('/createSession', isAuth, controller.createSession);

router.get('/getRestaurantData', controller.getData);

router.get('/roomExists', controller.roomExists);

module.exports = router;