import { MovieCard } from "./components/MovieCard/MovieCard";
import MovieTable from "./components/MovieTable/MovieTable";

const movie = {
  id: 1,
  title: "Harry Potter and the Sorcerer's Stone",
  year: 2001,
  duration: 122,
  genre: "Adventure",
  director: "Chris Columbus",
  synopsis: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
  poster: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_.jpg"
}

const movies = [
  movie, 
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    duration: 115,
    genre: "Adventure",
    director: "Chris Columbus",
    synopsis: "Harry Potter lives his second year at Hogwarts with Ron and Hermione when a message on the wall announces that the legendary Chamber of Secrets has been opened. The trio soon realize that, to save the school, it will take a lot of courage.",
    poster: "https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"     
  }
]

function App() {
  const onDelete = (movie) => {
    console.log("Marked for delete: " + movie);
  }

  return (
    <>
      <h3>Material Card example</h3>
      <MovieCard movie={movie} onDelete={onDelete} />
      <h3>Material Data Grid example</h3>
      <MovieTable movies={movies} deleteMovie={onDelete} />
    </>
  )
}

export default App
