import express from 'express';
import * as moviesController from "../controllers/movies.js";

export const router = express.Router();

// rute get
router.get("/", moviesController.getMovies);

// rute post
router.post("/", moviesController.create);

