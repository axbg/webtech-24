import random from "random";
import { movies } from "../models/movie.js";

const getMovies = () => {
  return movies;
};

const getRandomMovie = () => {
  const rnd = random.int(0, movies.length - 1);
  return movies[rnd];
};

const search = (title) => {
  return movies.find(movie => movie.includes(title));
};

const getById = (id) => {
  return movies[id];
};

const create = (title) => {
  if (!movies.includes(title)) {
    movies.push(title);
  }
};

// alte metode

export {
  getMovies,
  getRandomMovie,
  search,
  getById,
  create
}  
