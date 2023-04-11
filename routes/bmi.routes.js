const express = require('express');
const bmiController = require('../controllers/bmi.controller');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post(
	'/calculatebmi',
	authController.protect,
	bmiController.calculateBMI
);

router.get(
	'/getcalculations',
	authController.protect,
	bmiController.getCalculations
);

module.exports = router;
