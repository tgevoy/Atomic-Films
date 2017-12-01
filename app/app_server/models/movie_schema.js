const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  theatre: {
    type: String,
    required: true,
    enum: ["Theater #1", "Theater #2", "Theater #3",
           "Theater #4", "Theater #5", "Theater #6",
           "Theater #7", "Theater #8", "Theater #9"]
  },
  title: {
    type: String,
    required: true,
    enum: ["Casablanca", "One Flew Over The Cuckoo's Nest", "A Clockwork Orange",
          "Wizard Of Oz", "The Godfather", "2001: A Space Odyssey",
          "Anatomy Of A Murder", "12 Angry Men", "The Circus"]
  },
  year: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  frequency: [String],
  showtimes: [String],
  price: [String]
});

mongoose.model('movie', movieSchema);
