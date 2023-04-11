const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.getProfile = catchAsync(async (req, res, next) => {
	res.status(200).json({
		status: 'success',
		data: {
			user: req.user,
		},
	});
});
