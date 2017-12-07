/*
"use strict"

const showtimesReadOne = function(req, res) {
  if (req.params && req.params.movieid) { // Handles scenario where the paramter is missing.
    movieShowtimeModel
      .findById(req.params.movieid)
      .exec( function(err, movie) {
        res
          .status(200)
          .json(movie);
      });
  }
  else {
    res
      .status(404)
      .json({
        "message": "No movieid in request"
      });
  }
  if (!movie) { // Handles scenario when the movieid parameter doesn't match any document in MongoDB.
    res
      .status(404)
      .json({
        "message": "Movieid not found"
      });
      return;
  }
  if (err) {
    res
      .status(404)
      .json(err);
    return;
  }
};

module.exports = {
  showtimesReadOne,
};
*/
