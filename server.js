require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
	console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
	console.log(err.name, err.message);
	process.exit(1);
});

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/slack';

// Connect to MongoDB
mongoose.connect(MONGODB_URI).then(() => {
	console.log('Connected to MongoDB');
});

// Start server
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
	console.log('UNHANDLED REJECTION! 💥 Shutting down...');
	console.log(err.name, err.message);
	server.close(() => {
		process.exit(1);
	});
});

// Handle SIGTERM signal
process.on('SIGTERM', () => {
	console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
	server.close(() => {
		console.log('💥 Process terminated!');
	});
});
