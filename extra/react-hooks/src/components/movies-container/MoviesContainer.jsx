import './style.css';
import Movie from '../movie/Movie';
import { useEffect, useState } from 'react';

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/movies")
      .then(data => data.json())
      .then(data => data.records.map(movie => ({ title: movie.title, year: movie.year, director: movie.director, poster: movie.poster })))
      .then(movies => setMovies(movies));
  }, []);

  return (
    <>
      {
        movies.map((movie, idx) => <Movie key={idx} title={movie.title} director={movie.director} year={movie.year} poster={movie.poster} />)
      }
    </>
  )
}

export default MoviesContainer;

