var Film = require('./film.js');
var Review = require('./review.js');

var Films = function(){

  var films = [];

  var review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Val"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Val"
  });

  var review3 = new Review({
    comment: "uhhh....Produced by aliens",
    rating: 1337,
    author: "Kieran"
  })

  var film1 = new Film({
    title: "Now You See Me",
    genre: "Comedy",
    actors: ["Woody Harrelson", "Jesse Eisenberg"]
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    genre: "Sci-Fi",
    actors: ["Harrison Ford", "Alec Guiness"]
  });

  var film3 = new Film({
    title: "The Room",
    genre: "Horror",
    actors: ["Tommy Wiseau", "Greg Sestero"]
  });

  film1.addReview(review1);
  film1.addReview(review3);
  film2.addReview(review2);
  film3.addReview(review3);
  addFilm(films, film1);
  addFilm(films, film2);
  addFilm(films, film3);

  return films;
}

var addFilm = function(array, film){
   array.push(film);
  }

module.exports = Films;