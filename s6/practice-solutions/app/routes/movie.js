import express from 'express';
import * as movieController from "../controllers/movie.js";

export const router = express.Router();

// rute get
router.get("/", movieController.getMovies);
router.get("/random", movieController.getRandomMovie);
router.get("/search", movieController.search);
router.get("/:id", movieController.getById);

// rute post
router.post("/", movieController.create);

