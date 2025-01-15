
import { createSlice } from "@reduxjs/toolkit";

const moviesReducer = createSlice({
  name: "movies",
  initialState: {
    movies:
      [
        {
          id: 1,
          title: "Harry Potter and the Sorcerer's Stone",
          year: 2001,
          duration: 122,
          genre: "Adventure",
          director: "Chris Columbus",
          synopsis: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
          poster: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_.jpg"
        },
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
  },
  reducers: {
    addMovie: (state, action) => {
      return { ...state, movies: !state.movies.some(movie => movie.id === action.payload.id) ? [...state.movies, action.payload] : state.movies }
    },
    setMovies: (state, action) => {
      return { ...state, movies: [...action.payload] }
    }
  }
});

export const { addMovie, setMovies } = moviesReducer.actions;

export default moviesReducer.reducer;
