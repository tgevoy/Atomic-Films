'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./app_server/models/db');  // Executes code in the db.js file

const appRouter = require('./app_server/routes/app_router'); // Router to handle all Application page Requests (Lab 6 Task 4 Part 3)
const apiRouter = require('./app_api/routes/api_router');  // Router to handle all API Requests (Lab 11 Task 2)

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', appRouter); // Route every page Request of the Application (Lab 6 Task 4 Part 3)
app.use('/api', apiRouter); // This directs the API Request for Express to the API Router (Lab 11 Task 2 Part 3)


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
