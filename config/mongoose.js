const mongoose = require('mongoose');

const DB = 'mongodb+srv://mohankrishnarb:%40Dmin$2020@cluster0.cmfwsyn.mongodb.net/'



mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
