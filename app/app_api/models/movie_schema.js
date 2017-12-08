const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    enum: ["12 Angry Men", "2001: A Space Odyssey", "A Clockwork Orange",
          "Anatomy Of A Murder", "Casablanca", "One Flew Over The Cuckoo's Nest",
          "The Godfather", "The Circus"]
  },
  theater: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
    max: 9
  },
  year: {
    type: Number,
    default: 1928,
    min: 1928,
    max: 1975
  },
  summary: {
    type: String,
    required: true
  },
  poster: {
    type: String
  },
  showtimes: {
    type: [String]
  },
  frequency: {
    type: String
  },
  genres: {
    type: [String]
  },
  length: {
    type: String
  },
  rating: {
    type: String
  },
  price: {
    type: String
  },
  format: {
    type: String
  },
  days: {
    type: [String]
  },
  details: {
    type: [String]
  }
});

mongoose.model('movie', movieSchema);
/*
const movieShowtimeSchema = new mongoose.Schema({
  theater: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
    max: 9
  },
  title: {
    type: String,
    required: true,
    enum: ["12 Angry Men", "2001: A Space Odyssey", "A Clockwork Orange",
          "Anatomy Of A Murder", "Casablanca", "One Flew Over The Cuckoo's Nest",
          "The Godfather", "The Circus"]
  },
  year: {
    type: Number,
    default: 1928,
    min: 1928,
    max: 1975
  },
  summary: {
    type: String,
    required: true
  },
  poster: {
    type: String
  },
  showtimes: {
    type: [String]
  },
  frequency: {
    type: String
  },
  genres: {
    type: [String]
  },
  length: {
    type: String
  },
  rating: {
    type: String
  },
  price: {
    type: String
  },
  format: {
    type: String
  }
});

mongoose.model('movieShowtime', movieShowtimeSchema);
*/
