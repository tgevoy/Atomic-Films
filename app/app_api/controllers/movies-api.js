"use strict";

/* The following 3 lines will disconnect the database from the application and attach it to the API */
const mongoose = require('mongoose');

const movieModel = mongoose.model('movie');
const movieShowtimeModel = mongoose.model('movieShowtime');

/* These functions are set in the API Router file (api_router.js) */
const movieDetailsByTitle = function(req, res) {
  res
    .status(200) // Status code "OK"
    .json({"status": "success"});
};

const movieDetailsByYear = function(req, res) {
  res
    .status(200)
    .json({"status": "success"});
};

const movieDetailsByRating = function(req, res) {
  res
    .status(200)
    .json({"status": "success"});
};

const movieDetailsByLength = function(req, res) {
  res
    .status(200)
    .json({"status": "success"});
};

const movieDetailsByGenres =  function(req, res) {
  res
    .status(200)
    .json({"status": "success"});
};

const moviesCreate = function(req, res) {
  res
    .status(200)
    .json({"status": "success"});
};

const moviesDelete = function(req, res) {
  res
    .status(200)
    .json({"status": "success"});
};


module.exports = {
  movieDetailsByTitle,
  movieDetailsByYear,
  movieDetailsByRating,
  movieDetailsByLength,
  movieDetailsByGenres,
  moviesCreate,
  moviesDelete
};
