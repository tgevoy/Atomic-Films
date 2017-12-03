"use strict"

const showtimesReadOne = function(req, res) {
  res
    .status(200) // Status code "OK"
    .json({"status": "success"});
};

const showtimesCreate = function(req, res) {
  res
    .status(200)
    .json({"status": "success"});
};

const showtimesUpdate = function(req, res) {
  res
    .status(200)
    .json({"status": "success"});
};

const showtimesDelete = function(req, res) {
  res
    .status(200) 
    .json({"status": "success"});
};

module.exports = {
  showtimesReadOne,
  showtimesCreate,
  showtimesUpdate,
  showtimesDelete
};
