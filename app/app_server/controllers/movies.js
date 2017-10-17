"use strict";

const moviesList = function(req, res) {
    res.render("index", { title: "Atomic Films" });
};

const movieDetails = function(req, res) {
    res.render("movie-details", { title: "Movie Details" });
};

const reserveMovie = function(req, res) {
    res.render("reserve-movie", { title: "Reserve a Movie" });
};

module.exports = {
    moviesList,
    movieDetails,
    reserveMovie
};