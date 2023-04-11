const mongoose = require('mongoose');

const bmiSchema = new mongoose.Schema(
	{
		weight: {
			type: Number,
			required: [true, 'Please provide your weight'],
		},
		height: {
			type: Number,
			required: [true, 'Please provide your height'],
		},
		bmi: {
			type: Number,
			required: [true, 'Please provide your BMI'],
		},

		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: [true, 'BMI must belong to a user'],
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

bmiSchema.index({ user: 1, createdAt: -1 });

bmiSchema.pre(/^find/, function (next) {
	this.populate({
		path: 'user',
		select: 'name email',
	});

	next();
});

const BMI = mongoose.model('BMI', bmiSchema);

module.exports = BMI;
