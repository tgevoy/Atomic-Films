"use strict";

/* The following lines will disconnect the database from the application and attach it to the API */
const mongoose = require('mongoose');
const movieModel = mongoose.model('movie');
//const movieShowtimeModel = mongoose.model('movieShowtime');

/* These functions are set in the API Router file (api_router.js) */
const moviesList = function (req, res) {
  movieModel
    .find()
    .exec( function(err, movie) {
      res
        .status(200)
        .json(movie);
    });
};
const moviesReadOne = function(req, res) {
  if (req.params && req.params.id) { // Handles scenario where the parameter is missing.
    movieModel
      .findById(req.params.id)
      .exec( function(err, movie) {

        if (!movie) { // Handles scenario when the movieid parameter doesn't match any document in MongoDB.
          res
            .status(404)
            .json({"message": "Movie movieid not found"});
            return;
        }
        if (err) {
          res
            .status(404)
            .json(err);
            return;
        }
        res
          .status(200)
          .json(movie);
      });
  }
  else {
    res
      .status(404)
      .json({"message": "No movieid in request"});
  }
};



module.exports = {
  moviesList,
  moviesReadOne
};
