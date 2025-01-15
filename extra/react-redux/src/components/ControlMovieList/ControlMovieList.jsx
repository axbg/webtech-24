import { useDispatch } from "react-redux"
import { addMovie, setMovies } from "../../redux/reducers";

const movie = {
  id: 3,
  title: "Harry Potter and the Prisoner of Azbakan",
  year: 2004,
  duration: 122,
  genre: "Adventure",
  director: "Alfonso Cuaron",
  synopsis: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
  poster: "https://static.posters.cz/image/1300/harry-potter-and-the-prisoner-of-azkaban-i133057.jpg"
}

const ControlMovieList = () => {
  const dispatch = useDispatch();

  const addSampleMovie = () => {
    dispatch(addMovie(movie));
  }

  const resetMovies = () => {
    dispatch(setMovies([]));
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px", width: "200px" }}>
        <button onClick={addSampleMovie}>Add a sample movie</button>
        <button onClick={resetMovies}>Reset initial movies</button>
      </div >
    </>
  )
}

export default ControlMovieList;
