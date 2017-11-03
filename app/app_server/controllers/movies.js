"use strict";

const movieList = function(req, res) {
    res.render("movie-list", { title: "Atomic Films" });
};

const movieDetails = function(req, res) {
    res.render("movie-details", { title: "Movie Details" });
};

const reserveMovie = function(req, res) {
    res.render("reserve-movie", { title: "Reserve a Movie" });
};

module.exports = {
    movieList,
    movieDetails,
    reserveMovie
};