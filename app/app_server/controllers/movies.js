"use strict";

const request = require('request');
request.debug = true;

const apiOptions = {
  server: 'http://localhost:3000/api' // For development in local environment.
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'http://atomic-films.deploy.cs.camosun.bc.ca/api'; // For remotely when pushed to product.
}

/* The following lines will disconnect the database from the application and attach it to the API */
const mongoose = require('mongoose');
const movieModel = mongoose.model('movie');

const movieList = function(req, res) {
  const reqOptions = {
    baseUrl: apiOptions.server,
    url: '/movies',
    method: 'GET',
    json: {}
  };

  request( reqOptions, function(err, apiRes, apiResBody) {
    // Debugging code - api response body
    if (err) {
      console.log("Error occured: " + err);
    }
    else if (apiRes.statusCode === 200) {
      console.log(apiResBody);
    }
    else {
      console.log(apiRes.statusCode);
    }
    renderHomePage(req, res, apiResBody);
  });
};

const renderHomePage = function(req, res, data) {
  let errorMsg = null;
  if (!(data instanceof Array)) {
    errorMsg = 'API lookup error';
    data = [];
  }
  res.render("movie-list", {
    errorMsg: errorMsg,
    brandName: "Atomic Films",
    pageTitle: "Feature Films",
    pageHeader: {
      brandMotto: "...enjoy the classics of yesterday, today!",
      brandMessage: "Our current feature films are some of Hollywood's best and most talked about creations. Select a movie to find out more details, you won't be disappointed! Our screens are state of the art with the most current advances in technology, including: Digital Projection, REAL-D 3D, and vintage 35mm films for all your viewing needs. Combined with the precision sound of Dolby UltraAVX, you'll be feeling as if you're right along side your favourite actor in that intense action scene."
		},
    movies: data // This is the new call to the data below for the API
  });
};
    /*movies: [{  // This was the hard-coded data from old build of app.
      title: "12 Angry Men",
      days: ["Daily"],
      details: ["Info"]
    }, {
      title: "2001: A Space Odyssey",
      days: ["Daily"],
      details: ["Info"]
    }, {
      title: "A Clockwork Orange",
      days: ["Daily"],
      details: ["Info"]
    }, {
      title: "Anatomy Of A Murder",
      days: ["Daily"],
      details: ["Info"]
    }, {
      title: "Casablanca",
      days: ["Daily"],
      details: ["Info"]
    }, {
      title: "One Flew Over The Cuckoo's Nest",
      days: ["Daily"],
      details: ["Info"]
    }, {
      title: "The Circus",
      days: ["Daily"],
      details: ["Info"]
    }, {
      title: "The Godfather",
      days: ["Daily"],
      details: ["Info"]
    }]*/

const movieDetails = function(req, res) {
  const reqOptions = {
    baseUrl: apiOptions.server,
    url: `/movies/${req.params.movieid}`,
    method: 'GET',
    json: {}
  };

  request( reqOptions, function(err, apiRes, apiResBody) {
    // Debugging code - api response body
    if (err) {
      console.log("Error occured: " + err);
    }
    else if (apiRes.statusCode === 200) {
      console.log(apiResBody);
    }
    else {
      console.log(apiRes.statusCode);
    }
    renderDetailsPage(req, res, apiResBody);
  });
};

const renderDetailsPage = function(req, res, data) {
  let errorMsg = null;
  if (!(data instanceof Object)) {
    errorMsg = 'API lookup error';
    data = {};
  }
  res.render("movie-details", {
    errorMsg: errorMsg,
    brandName: "Atomic Films",
    pageTitle: "Movie Synopsis & Details",
    pageHeader: {
      brandMotto: "...enjoy the classics of yesterday, today!",
      message: "Excellent choice! Checkout the details and current movie showtimes below."
		},
    movie: data
  });
};
    /*
    movies: [{
      theater: 1,
      title: "12 Angry Men",
      year: 1957,
      summary: "Following the closing arguments in a murder trial, the 12 members of the jury must deliberate, with a guilty verdict meaning death for the accused, an inner-city teen. As the dozen men try to reach a unanimous decision while sequestered in a room, one juror (Henry Fonda) casts considerable doubt on elements of the case. Personal issues soon rise to the surface, and conflict threatens to derail the delicate process that will decide one boy's fate.",
      poster: "/images/mp12.jpg",
      frequency: "Daily Showings",
      showtimes: ["11:45 A.M.", "5:30 P.M.", "8:15 P.M."],
      price: "$10",
      length: "1h 36m",
      rating: "9.7/10",
      genres: ["Crime", " Drama", " Law"],
      format: "B/W"
    }, {
      theater: 2,
      title: "2001: A Space Odyssey",
      year: 1968,
      summary: "An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. When Dr. Dave Bowman (Keir Dullea) and other astronauts are sent on a mysterious mission, their ship's computer system, HAL, begins to display increasingly strange behavior, leading up to a tense showdown between man and machine that results in a mind-bending trek through space and time.",
      poster: "/images/mp6.jpg",
      frequency: "Daily Showings",
      showtimes: ["11:15 A.M.", "4:30 P.M.", "7:45 P.M."],
      price: "$15",
      length: "2h 41m",
      rating: "8.9/10",
      genres: ["Adventure", " Mystery", " Sci-Fi"],
      format: "3D"
    }, {
      theater: 3,
      title: "A Clockwork Orange",
      year: 1971,
      summary: "In an England of the future, Alex (Malcolm McDowell) and his 'Droogs' spend their nights getting high at the Korova Milkbar before embarking on 'a little of the old ultraviolence,' while jauntily warbling 'Singin\' in the Rain.' After he's jailed for bludgeoning the Cat Lady to death, Alex submits to behavior modification technique to earn his freedom; he's conditioned to abhor violence. Returned to the world defenseless, Alex becomes the victim of his prior victims.",
      poster: "/images/mp3.jpg",
      frequency: "Daily Showings",
      showtimes: ["10:30 A.M.", "3:00 P.M.", "6:45 P.M."],
      price: "$12",
      length: "2h 17m",
      rating: "9.3/10",
      genres: ["Crime", " Drama", " Thriller"],
      format: "Standard HD"
    }, {
      theater: 4,
      title: "Anatomy Of A Murder",
      year: 1959,
      summary: "Semi-retired Michigan lawyer Paul Biegler (James Stewart) takes the case of Army Lt. Manion (Ben Gazzara), who murdered a local innkeeper after his wife (Lee Remick) claimed that he raped her. Over the course of an extensive trial, Biegler parries with District Attorney Lodwick (Brooks West) and out-of-town prosecutor Claude Dancer (George C. Scott) to set his client free, but his case rests on the victim's mysterious business partner (Kathryn Grant), who's hiding a dark secret.",
      poster: "/images/mp11.jpg",
      frequency: "Daily Showings",
      showtimes: ["11:30 A.M.", "5:00 P.M.", "8:00 P.M."],
      price: "$10",
      length: "2h 41m",
      rating: "9.1/10",
      genres: ["Crime", " Drama", " Law"],
      format: "B/W"
    }, {
      title: "Casablanca",
      theater: 5,
      year: 1942,
      summary: "Rick Blaine (Humphrey Bogart), who owns a nightclub in Casablanca, discovers his old flame Ilsa (Ingrid Bergman) is in town with her husband, Victor Laszlo (Paul Henreid). Laszlo is a famed rebel, and with Germans on his tail, Ilsa knows Rick can help them get out of the country.",
      poster: "/images/mp1.jpg",
      frequency: "Daily Showings",
      showtimes: ["10:00 A.M.", "2:00 P.M.", "6:00 P.M."],
      price: "$10",
      length: "1hr 42m",
      rating: "9.5/10",
      genres: ["Drama", " Romance", " War"],
      format: "B/W"
    }, {
      theater: 6,
      title: "One Flew Over The Cuckoo's Nest",
      year: 1975,
      summary: "When Randle Patrick McMurphy (Jack Nicholson) gets transferred for evaluation from a prison farm to a mental institution, he assumes it will be a less restrictive environment. But the martinet Nurse Ratched (Louise Fletcher) runs the psychiatric ward with an iron fist, keeping her patients cowed through abuse, medication and sessions of electroconvulsive therapy. The battle of wills between the rebellious McMurphy and the inflexible Ratched soon affects all the ward's patients.",
      poster: "/images/mp2.jpg",
      frequency: "Daily Showings",
      showtimes: ["10:15 A.M.", "2:30 P.M.", "6:15 P.M."],
      price: "$12",
      length: "2h 14m",
      rating: "9.6/10",
      genres: ["Drama", " Psychological", " Tragedy"],
      format: "Standard HD"
    }, {
      theater: 7,
      title: "The Circus",
      year: 1928,
      summary: "Wrongfully accused of criminal acts, a tramp (Charlie Chaplin) unwittingly ducks into a big top, where his bumbling attempts to avoid pursuing police officers earn the laughter and applause of the circus-goers. Impressed, the ringmaster (Allan Garcia) decides to employ the tramp as an entertainer. In between getting trapped in a lion's cage and partaking in clumsy high wire escapades, he falls for a beautiful show rider (Merna Kennedy), who unfortunately has eyes for a daring tightrope acrobat.",
      poster: "/images/mp9.jpg",
      frequency: "Daily Showings",
      showtimes: ["12:00 P.M.", "6:00 P.M.", "9:00 P.M."],
      price: "$10",
      length: "1hr 12m",
      rating: "9.4/10",
      genres: ["Comedy", " Romance", " Silent"],
      format: "B/W"
    }, {
      theater: 8,
      title: "The Godfather",
      year: 1972,
      summary: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.",
      poster: "/images/mp5.jpg",
      frequency: "Daily Showings",
      showtimes: ["11:00 A.M.", "4:00 P.M.", "7:30 P.M."],
      price: "$12",
      length: "2h 58m",
      rating: "9.7/10",
      genres: ["Crime", " Drama", " Gangster"],
      format: "Standard HD"
    }]
    */


const reserveMovie = function(req, res) {
  res.render("reserve-movie", {
    brandName: "Atomic Films",
    pageTitle: "Reserve A Movie",
    pageHeader: {
      brandMotto: "...enjoy the classics of yesterday, today!",
      message: "Beat the lineups and reserve a ticket and seat ahead of time!"
	  }
  });
};

module.exports = {
  movieList,
  movieDetails,
  reserveMovie
};
