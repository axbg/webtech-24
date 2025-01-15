import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../redux/reducers';


const MovieList = () => {
  const movies = useSelector(state => state.movies);

  const dispatch = useDispatch();

  const getMovies = () => {
    dispatch(setMovies(movies));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h3>All movies</h3>
      <div id="moviesContainer">
        {movies.map(movie => (
          <p key={movie.id}>{movie.title} - {movie.year} - {movie.genre}</p>
        ))}
      </div>
    </div>
  )
};

export default MovieList;
