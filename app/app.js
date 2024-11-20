import express from 'express';
import {router as moviesRouter} from './routes/movies.js';
import {synchronizeDatabase} from './models/config.js';

const PORT = 8080;

const app = express();
app.use(express.json());

// agregarea tuturor rutelor intr-un router principal
const router = express.Router();
router.use("/movies", moviesRouter);

// conectarea serverului la routerul principal si adaugarea unui prefix pentru toate rutele
app.use("/api/v1", router);

const server = app.listen(PORT, async () => {
        try {
            await synchronizeDatabase();
        } catch (ex) {
            console.log("The connection to database did not work");
            server.close();
        }

        console.log(`Server started on http://localhost:${PORT}`)
    }
);
