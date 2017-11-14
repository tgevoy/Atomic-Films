'use strict';

const movieList = function(req, res) {
  res.render("movie-list", {
    title: "Atomic Films",
    pageHeader: {
      heading: "Feature Films",
      tagline: "...enjoy the classics of yesterday, today!"
		}
  });
};

const movieDetails = function(req, res) {
  res.render("movie-details", {
    title: "Atomic Films",
    pageHeader: {
      heading: "Film Synopsis & Details",
      tagline: "Find out what your favourite classic film is all about, including which stars featured, and the year it was released in the information below."
    }
    /*
    movies: [{
      film: "Casablanca",
      year: "1942",
      summary: "Rick Blaine (Humphrey Bogart), who owns a nightclub in Casablanca, discovers his old flame Ilsa (Ingrid Bergman) is in town with her husband, Victor Laszlo (Paul Henreid). Laszlo is a famed rebel, and with Germans on his tail, Ilsa knows Rick can help them get out of the country."
    }, {
      film: "One Flew Over The Cuckoo's Nest",
      year: "1975",
      summary: "When Randle Patrick McMurphy (Jack Nicholson) gets transferred for evaluation from a prison farm to a mental institution, he assumes it will be a less restrictive environment. But the martinet Nurse Ratched (Louise Fletcher) runs the psychiatric ward with an iron fist, keeping her patients cowed through abuse, medication and sessions of electroconvulsive therapy. The battle of wills between the rebellious McMurphy and the inflexible Ratched soon affects all the ward's patients."
    }, {
      film: "A Clockwork Orange",
      year: "1971",
      summary: "In an England of the future, Alex (Malcolm McDowell) and his 'Droogs' spend their nights getting high at the Korova Milkbar before embarking on 'a little of the old ultraviolence,' while jauntily warbling 'Singin\' in the Rain.' After he's jailed for bludgeoning the Cat Lady to death, Alex submits to behavior modification technique to earn his freedom; he's conditioned to abhor violence. Returned to the world defenseless, Alex becomes the victim of his prior victims."
    }, {
      film: "Wizard Of Oz",
      year: "1939",
      summary: "When a tornado rips through Kansas, Dorothy (Judy Garland) and her dog, Toto, are whisked away in their house to the magical land of Oz. They follow the Yellow Brick Road toward the Emerald City to meet the Wizard, and en route they meet a Scarecrow (Ray Bolger) that needs a brain, a Tin Man (Jack Haley) missing a heart, and a Cowardly Lion (Bert Lahr) who wants courage. The wizard asks the group to bring him the broom of the Wicked Witch of the West (Margaret Hamilton) to earn his help."
    }, {
      film: "The Godfather",
      year: "1972",
      summary: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business."
    }, {
      film: "2001: A Space Odyssey",
      year: "1968",
      summary: "An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. When Dr. Dave Bowman (Keir Dullea) and other astronauts are sent on a mysterious mission, their ship's computer system, HAL, begins to display increasingly strange behavior, leading up to a tense showdown between man and machine that results in a mind-bending trek through space and time."
    }, {
      film: "Anatomy Of A Murder",
      year: "1959",
      summary: "Semi-retired Michigan lawyer Paul Biegler (James Stewart) takes the case of Army Lt. Manion (Ben Gazzara), who murdered a local innkeeper after his wife (Lee Remick) claimed that he raped her. Over the course of an extensive trial, Biegler parries with District Attorney Lodwick (Brooks West) and out-of-town prosecutor Claude Dancer (George C. Scott) to set his client free, but his case rests on the victim's mysterious business partner (Kathryn Grant), who's hiding a dark secret."
    }, {
      film: "12 Angry Men",
      year: "1957",
      summary: "Following the closing arguments in a murder trial, the 12 members of the jury must deliberate, with a guilty verdict meaning death for the accused, an inner-city teen. As the dozen men try to reach a unanimous decision while sequestered in a room, one juror (Henry Fonda) casts considerable doubt on elements of the case. Personal issues soon rise to the surface, and conflict threatens to derail the delicate process that will decide one boy's fate."
    }, {
      film: "The Circus",
      year: "1928",
      summary: "Wrongfully accused of criminal acts, a tramp (Charlie Chaplin) unwittingly ducks into a big top, where his bumbling attempts to avoid pursuing police officers earn the laughter and applause of the circus-goers. Impressed, the ringmaster (Allan Garcia) decides to employ the tramp as an entertainer. In between getting trapped in a lion's cage and partaking in clumsy high wire escapades, he falls for a beautiful show rider (Merna Kennedy), who unfortunately has eyes for a daring tightrope acrobat."
    }]
    */
  });
};

const reserveMovie = function(req, res) {
  res.render("reserve-movie", {
    title: "Atomic Films",
    pageHeader: {
      heading: "Reserve A Movie",
      tagline: "Beat the lineups and reserve a ticket and seat ahead of time!",
      message: "Nice choice! You've selected a great classic film to enjoy!"
	}
  });
};

module.exports = {
  movieList,
  movieDetails,
  reserveMovie
};
