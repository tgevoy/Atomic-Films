const mongoose = require('mongoose'); /* Loads mongoose module and exposes its functions via declared constant name 'mongoose */

const dbURI = 'mongodb://mongo/atomic-films'; /* Database connection string */
mongoose.connect(dbURI, {
  useMongoClient: true
});

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
}); /* Event listener code for when Mongoose connects to database, it fires events to listen for */

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected.');
});