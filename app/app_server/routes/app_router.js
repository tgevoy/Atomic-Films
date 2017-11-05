"use strict";

const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");
const othersController = require("../controllers/others");

/* -- Movie Pages -- */
/* GET home page. */
router.get("/", moviesController.movieList);
/* GET the movie details page */
router.get("/movies", moviesController.movieDetails);
/* GET the movie reserveration page */
router.get("/movies/reserve", moviesController.reserveMovie);

/* -- Other Pages -- */
/* GET contact page */
router.get("/contact", othersController.contact);

module.exports = router;


