const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.get('/getprofile', authController.protect, userController.getProfile);

module.exports = router;
