
'use strict';

// Sets up as an Express Router (Lab 11 Task 2 Part 5)
const express = require('express');
const router = express.Router();

// Require Controllers that will handle all the API Requests, separating routing code from routing logic (Lab 11 Task 2 Part 6)
const moviesAPIController = require('../controllers/movies-api');
const showtimesAPIController = require('../controllers/showtimes-api');

// Defining API Routes and setting up the Controllers (Lab 11 Task 3 Part 1)
/* -- movies -- */
router
  .route('/movies') // This calls router.route() and passes in the path you want to apply HTTP verbs to
  .get(moviesAPIController.movieDetailsByTitle) // List all movies by title
  .get(moviesAPIController.movieDetailsByYear) // List all movies by year
  .get(moviesAPIController.movieDetailsByRating) // List all movies by rating
  .get(moviesAPIController.movieDetailsByLength) // List all movies by length
  .get(moviesAPIController.movieDetailsByGenres) // List all movies by genres
  .post(moviesAPIController.moviesCreate) // Create a new movie
  .delete(moviesAPIController.moviesDelete); // Delete a movie

/* -- movie times -- */
router
  .route('/movies/:movieid/showtimes/:index')
  .get(showtimesAPIController.showtimesReadOne) // List a movie by its showtimes
  .post(showtimesAPIController.showtimesCreate) // Create a new movie showtime
  .put(showtimesAPIController.showtimesUpdate) // Update a movie's showtime
  .delete(showtimesAPIController.showtimesDelete); // Delete a movie's showtime

module.exports = router;
