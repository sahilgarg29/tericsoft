const express = require('express');
const catchAsync = require('../utils/catchAsync');
const BMI = require('../models/bmi.model');

exports.calculateBMI = catchAsync(async (req, res, next) => {
	const weight = req.body.weight;
	const height = req.body.height;

	let bmi = weight / (height * height);

	bmi = await BMI.create({
		weight,
		height,
		bmi,
		user: req.user.id,
	});

	res.status(201).json({
		status: 'success',
		data: {
			bmi,
		},
	});
});

exports.getCalculations = catchAsync(async (req, res, next) => {
	const bmi = await BMI.find({ user: req.user.id });

	res.status(200).json({
		status: 'success',
		data: {
			bmi,
		},
	});
});
