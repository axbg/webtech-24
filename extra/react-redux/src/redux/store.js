import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers";

const store = configureStore({
  reducer: moviesReducer
});

export default store;
