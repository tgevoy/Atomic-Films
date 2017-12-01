const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    enum: ["Casablanca", "One Flew Over The Cuckoo's Nest", "A Clockwork Orange", "Wizard Of Oz", "The Godfather",
          "2001: A Space Odyssey", "Anatomy Of A Murder", "12 Angry Men", "The Circus"]
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
  days: [String],
  showTimes: [String],
  price: [String]
});

mongoose.model('movie', movieSchema);
