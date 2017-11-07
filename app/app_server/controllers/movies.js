"use strict";

const movieList = function(req, res) {
    res.render("movie-list", { title: "Feature Films" });
};

const movieDetails = function(req, res) {
    res.render("movie-details", { title: "Film Synopsis & Details" });
};

const reserveMovie = function(req, res) {
    res.render("reserve-movie", { title: "Reserve A Film" });
};

module.exports = {
    movieList,
    movieDetails,
    reserveMovie
};