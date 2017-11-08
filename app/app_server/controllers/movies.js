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
      title: "Atomic Films",
      pageHeader: {
        title: "Film Synopsis & Details",
        tagline: "Find out what your favourite classic film is all about, including which stars featured, and the year it was released in the information below."
      }
		});
};

const reserveMovie = function(req, res) {
    res.render("reserve-movie", {
      title: "Atomic Films",
      pageHeader: {
        title: "Reserve A Movie",
        tagline: "Beat the lineups and reserve a ticket and seat ahead of time!"
      }
		});
};

module.exports = {
    movieList,
    movieDetails,
    reserveMovie
};