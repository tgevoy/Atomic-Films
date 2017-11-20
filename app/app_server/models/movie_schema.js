const mongoose = require('Mongoose');

const movieSchema = new mongoose.Schema({
  film: {
    type: String,
    required: true,
    enum: ["Casablanca", "One Flew Over The Cuckoo's Nest", "A Clockwork Orange", "Wizard Of Oz", "The Godfather",
          "2001: A Space Odyssey", "Anatomy Of A Murder", "12 Angry Men", "The Circus"]
  },
  year: {
    type: String,
    required: true,
    enum: ["1942", "1975", "1971", "1939", "1972", "1968", "1959", "1957", "1928"]
  },
  summary: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
    enum: ["/images/mp1.jpg", "/images/mp2.jpg", "/images/mp3.jpg", "/images/mp4.jpg", "/images/mp5.jpg",
          "/images/mp6.jpg", "/images/mp11.jpg", "/images/mp12.jpg", "/images/mp9.jpg"]
  },
  days: [String],
  showTimes: [String]
});

let movie = mongoose.model('movie', movieSchema);


