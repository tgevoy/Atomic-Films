"use strict";

const movieList = function(req, res) {
    res.render("movie-list", {
      title: "Atomic Films",
      pageHeader: {
        title: "Feature Films",
        tagline: "...enjoy the classics of yesterday, today!"
      }
    });
};

const movieDetails = function(req, res) {
    res.render("movie-details", {
      title: "Movie Details",
      pageHeader: {
        title: "Film Synopsis & Details",
        tagline: "Find out what your favourite classic is all about, including the famous stars in the film, and the year it was released in the information below."
      }});
};

const reserveMovie = function(req, res) {
    res.render("reserve-movie", {
      title: "Reserve a Movie",
      pageHeader: {
        title: "Reserve A Movie",
        tagline: "Beat the lineups and reserve a ticket and seat ahead of time!"
      }});
};

module.exports = {
    movieList,
    movieDetails,
    reserveMovie
};