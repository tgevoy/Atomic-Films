"use strict";

const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");
const othersController = require("../controllers/others");

/* ---------------- Movie Pages -------------------- */

/* GET home page. */
router.get('/', moviesController.movieList); // List of Movies

/* GET the movie reserveration page */
router.get('/movies/reserve', moviesController.reserveMovie); // Reserve a Movie

/* GET the movie details page */
router.get('/movies/:movieid', moviesController.movieDetails); // Movie Details




/* ---------------- Other Pages -------------------- */

/* GET contact page */
router.get('/contact', othersController.contact); // Contact Atomic Films

router.post('/thanks', othersController.thanks); // Thanks from Atomic Films



module.exports = router;
