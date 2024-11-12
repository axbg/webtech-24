import express from 'express';
import { router as moviesRouter } from './routes/movies.js';

const PORT = 8080;

const app = express();
app.use(express.json());

// agregarea tuturor rutelor intr-un router principal
const router = express.Router();
router.use("/movies", moviesRouter);

// conectarea serverului la routerul principal si adaugarea unui prefix pentru toate rutele
app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
