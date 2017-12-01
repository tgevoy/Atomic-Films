'use strict';

const movieList = function(req, res) {
  res.render("movie-list", {
    title: "Atomic Films",
    pageHeader: {
      heading: "Now Playing",
      tagline: "Welcome to Atomic Films, where you can enjoy the classics of yesterday, today!",
      statement: "Our current feature films are some of Hollywood's best and most talked about creations. Select the button below a film to find out more details."
		},
    movies: [{
      id: 1,
      title: "Casablanca",
      poster: "/images/mp1.jpg",
      details: "Info"
    }, {
      id: 2,
      title: "One Flew Over The Cuckoos Nest",
      poster: "/images/mp2.jpg",
      details: "Info"
    }, {
      id: 3,
      title: "A clockwork Orange",
      poster: "/images/mp3.jpg",
      details: "Info"
    }, {
      id: 4,
      title: "Wizard Of Oz",
      poster: "/images/mp4.jpg",
      details: "Info"
    }, {
      id: 5,
      title: "The Godfather",
      poster: "/images/mp5.jpg",
      details: "Info"
    }, {
      id: 6,
      title: "2001: A Space Odyssey",
      poster: "/images/mp6.jpg",
      details: "Info"
    }, {
      id: 7,
      title: "Anatomy Of A Murder",
      poster: "/images/mp11.jpg",
      details: "Info"
    }, {
      id: 8,
      title: "12 Angry Men",
      poster: "/images/mp12.jpg",
      details: "Info"
    }, {
      id: 9,
      title: "The Circus",
      poster: "/images/mp9.jpg",
      details: "Info"
    }]
  });
};

const movieDetails = function(req, res) {
  res.render("movie-details", {
    title: "Atomic Films",
    pageHeader: {
      heading: "Film Synopsis & Showtimes",
      tagline: "Never seen that classic movie your friends and family are always talking about? Can't quite remember that exciting plot twist? Look no further! Atomic Films has you covered on all the necessary details, including the stars featured in each movie, the movie's release year, and an exciting synopsis to make you want more."
    },
    movies: [{
      title: "Casablanca",
      theaterNum: 1,
      year: 1942,
      summary: "Rick Blaine (Humphrey Bogart), who owns a nightclub in Casablanca, discovers his old flame Ilsa (Ingrid Bergman) is in town with her husband, Victor Laszlo (Paul Henreid). Laszlo is a famed rebel, and with Germans on his tail, Ilsa knows Rick can help them get out of the country.",
      poster: "/images/mp1.jpg",
      frequency: "Daily Showings",
      showtimes: ["10:00 A.M.", "2:00 P.M.", "6:00 P.M."],
      price: "$15",
      length: "1hr 42m",
      rating: "9.5/10",
      genres: ["Drama", "Romance", "War"]
    }, {
      theaterNum: 2,
      title: "One Flew Over The Cuckoo's Nest",
      year: 1975,
      summary: "When Randle Patrick McMurphy (Jack Nicholson) gets transferred for evaluation from a prison farm to a mental institution, he assumes it will be a less restrictive environment. But the martinet Nurse Ratched (Louise Fletcher) runs the psychiatric ward with an iron fist, keeping her patients cowed through abuse, medication and sessions of electroconvulsive therapy. The battle of wills between the rebellious McMurphy and the inflexible Ratched soon affects all the ward's patients.",
      poster: "/images/mp2.jpg",
      frequency: "Daily Showings",
      showtimes: ["10:15 A.M.", "2:30 P.M.", "6:15 P.M."],
      price: "$15",
      length: "2h 14m",
      rating: "9.6/10",
      genres: ["Drama", "Psychological", "Tragedy"]
    }, {
      theaterNum: 3,
      title: "A Clockwork Orange",
      year: 1971,
      summary: "In an England of the future, Alex (Malcolm McDowell) and his 'Droogs' spend their nights getting high at the Korova Milkbar before embarking on 'a little of the old ultraviolence,' while jauntily warbling 'Singin\' in the Rain.' After he's jailed for bludgeoning the Cat Lady to death, Alex submits to behavior modification technique to earn his freedom; he's conditioned to abhor violence. Returned to the world defenseless, Alex becomes the victim of his prior victims.",
      poster: "/images/mp3.jpg",
      frequency: "Daily Showings",
      showtimes: ["10:30 A.M.", "3:00 P.M.", "6:45 P.M."],
      price: "$15",
      length: "2h 17m",
      rating: "9.3/10",
      genres: ["Drama", "Crime", "Thriller"]
    }, {
      theaterNum: 4,
      title: "Wizard Of Oz",
      year: 1939,
      summary: "When a tornado rips through Kansas, Dorothy (Judy Garland) and her dog, Toto, are whisked away in their house to the magical land of Oz. They follow the Yellow Brick Road toward the Emerald City to meet the Wizard, and en route they meet a Scarecrow (Ray Bolger) that needs a brain, a Tin Man (Jack Haley) missing a heart, and a Cowardly Lion (Bert Lahr) who wants courage. The wizard asks the group to bring him the broom of the Wicked Witch of the West (Margaret Hamilton) to earn his help.",
      poster: "/images/mp4.jpg",
      frequency: "Daily Showings",
      showtimes: ["10:45 A.M.", "3:30 P.M.", "7:00 P.M."],
      price: "$15",
      length: "2h 05m",
      rating: "8.9/10",
      genres: ["Adventure", "Fantasy", "Musical"]
    }, {
      theaterNum: 5,
      title: "The Godfather",
      year: 1972,
      summary: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.",
      poster: "/images/mp5.jpg",
      frequency: "Daily Showings",
      showtimes: ["11:00 A.M.", "4:00 P.M.", "7:30 P.M."],
      price: "$15",
      length: "2h 58m",
      rating: "9.7/10",
      genres: ["Drama", "Crime", "Gangster"]
    }, {
      theaterNum: 6,
      title: "2001: A Space Odyssey",
      year: 1968,
      summary: "An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. When Dr. Dave Bowman (Keir Dullea) and other astronauts are sent on a mysterious mission, their ship's computer system, HAL, begins to display increasingly strange behavior, leading up to a tense showdown between man and machine that results in a mind-bending trek through space and time.",
      poster: "/images/mp6.jpg",
      frequency: "Daily Showings",
      showtimes: ["11:15 A.M.", "4:30 P.M.", "7:45 P.M."],
      price: "$15",
      length: "2h 41m",
      rating: "8.9/10",
      genres: ["Adventure", "Fantasy", "Mystery", "Sci-Fi", "Thriller"]
    }, {
      theaterNum: 7,
      title: "Anatomy Of A Murder",
      year: 1959,
      summary: "Semi-retired Michigan lawyer Paul Biegler (James Stewart) takes the case of Army Lt. Manion (Ben Gazzara), who murdered a local innkeeper after his wife (Lee Remick) claimed that he raped her. Over the course of an extensive trial, Biegler parries with District Attorney Lodwick (Brooks West) and out-of-town prosecutor Claude Dancer (George C. Scott) to set his client free, but his case rests on the victim's mysterious business partner (Kathryn Grant), who's hiding a dark secret.",
      poster: "/images/mp11.jpg",
      frequency: "Daily Showings",
      showtimes: ["11:30 A.M.", "5:00 P.M.", "8:00 P.M."],
      price: "$15",
      length: "2h 41m",
      rating: "9.1/10",
      genres: ["Crime", "Drama", "Law", "Mystery", "Thriller"]
    }, {
      theaterNum: 8,
      title: "12 Angry Men",
      year: 1957,
      summary: "Following the closing arguments in a murder trial, the 12 members of the jury must deliberate, with a guilty verdict meaning death for the accused, an inner-city teen. As the dozen men try to reach a unanimous decision while sequestered in a room, one juror (Henry Fonda) casts considerable doubt on elements of the case. Personal issues soon rise to the surface, and conflict threatens to derail the delicate process that will decide one boy's fate.",
      poster: "/images/mp12.jpg",
      frequency: "Daily Showings",
      showtimes: ["11:45 A.M.", "5:30 P.M.", "8:15 P.M."],
      price: "$15",
      length: "1h 36m",
      rating: "9.7/10",
      genres: ["Crime", "Drama", "Law", "Mystery"]
    }, {
      theaterNum: 9,
      title: "The Circus",
      year: 1928,
      summary: "Wrongfully accused of criminal acts, a tramp (Charlie Chaplin) unwittingly ducks into a big top, where his bumbling attempts to avoid pursuing police officers earn the laughter and applause of the circus-goers. Impressed, the ringmaster (Allan Garcia) decides to employ the tramp as an entertainer. In between getting trapped in a lion's cage and partaking in clumsy high wire escapades, he falls for a beautiful show rider (Merna Kennedy), who unfortunately has eyes for a daring tightrope acrobat.",
      poster: "/images/mp9.jpg",
      frequency: "Daily Showings",
      showtimes: ["12:00 P.M.", "6:00 P.M.", "9:00 P.M."],
      price: "$15",
      length: "1hr 12m",
      rating: "9.4/10",
      genres: ["Comedy", "Drama", "Romance", "Silent"]
    }]
  });
};

const reserveMovie = function(req, res) {
  res.render("reserve-movie", {
    title: "Atomic Films",
    pageHeader: {
      heading: "Reserve A Movie",
      tagline: "Beat the lineups and reserve a ticket and seat ahead of time!",
      acknowledge: "Nice choice! You've selected a great classic film to enjoy!"
	  }
  });
};

module.exports = {
  movieList,
  movieDetails,
  reserveMovie
};
