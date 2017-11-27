const mongoose = require('mongoose'); /* Loads mongoose module and exposes its functions via declared constant name 'mongoose */

let dbURI = 'mongodb://mongo/atomic-films'; /* Database connection string */

/* Test environent variable, if true, then application must be running on the deploy server */
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGO_URL;
}
mongoose.connect(dbURI, { useMongoClient: true });

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
}); /* Event listener code for when Mongoose connects to database, it fires events to listen for */

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected.');
});

require('./movie_schema');
