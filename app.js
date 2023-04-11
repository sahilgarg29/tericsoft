const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const AppError = require('./utils/appError');
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');
const bmiRouter = require('./routes/bmi.routes');

const errorController = require('./controllers/error.controller');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/bmi', bmiRouter);

// Error handling
app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error controller
app.use(errorController);

module.exports = app;
