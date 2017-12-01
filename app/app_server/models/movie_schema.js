const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 1,
    min: 1,
    max: 9
  },
  title: {
    type: String,
    required: true,
    enum: ["Casablanca", "One Flew Over The Cuckoo's Nest", "A Clockwork Orange",
          "Wizard Of Oz", "The Godfather", "2001: A Space Odyssey",
          "Anatomy Of A Murder", "12 Angry Men", "The Circus"]
  },
  poster: {
    type: String
  }
});


const movieShowtimeSchema = new mongoose.Schema({
  theaterNum: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
    max: 9
  },
  title: {
    type: String,
    required: true,
    enum: ["Casablanca", "One Flew Over The Cuckoo's Nest", "A Clockwork Orange",
          "Wizard Of Oz", "The Godfather", "2001: A Space Odyssey",
          "Anatomy Of A Murder", "12 Angry Men", "The Circus"]
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
  }
});


mongoose.model('movie', movieSchema);
mongoose.model('movieShowtime', movieShowtimeSchema);
