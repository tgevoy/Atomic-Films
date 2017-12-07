
'use strict';

// Sets up as an Express Router (Lab 11 Task 2 Part 5)
const express = require('express');
const router = express.Router();

// Require Controllers that will handle all the API Requests, separating routing code from routing logic (Lab 11 Task 2 Part 6)
const moviesAPIController = require('../controllers/movies-api');
//const showtimesAPIController = require('../controllers/showtimes-api');

// Defining API Routes and setting up the Controllers (Lab 11 Task 3 Part 1)

/* -- movie details-- */
router
  .route('/movies')
  .get(moviesAPIController.moviesList);

router
  .route('/movies/:id') // This calls router.route() and passes in the path you want to apply HTTP verbs to
  .get(moviesAPIController.moviesReadOne); // List all movies by title

  //.post(moviesAPIController.moviesCreate) // Create a new movie (ADMIN - not implementing right now)
  //.delete(moviesAPIController.moviesDelete); // Delete a movie (ADMIN - not implementing right now)

/* -- movie times -- */
/*router
  .route('/movies/:movieid/showtimes/:index')
  .get(showtimesAPIController.showtimesReadOne); // List a movie by its showtimes
  //.post(showtimesAPIController.showtimesCreate) // Create a new movie showtime (ADMIN - not implementing right now)
  //.put(showtimesAPIController.showtimesUpdate) // Update a movie's showtime (ADMIN - not implementing right now)
  //.delete(showtimesAPIController.showtimesDelete); // Delete a movie's showtime (ADMIN - not implementing right now)
*/
module.exports = router;
