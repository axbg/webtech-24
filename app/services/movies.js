import { Op } from "sequelize";
import { Movie } from "../models/config.js";

const getMovies = async (filters) => {
    // extragem toate campurile definite la nivelul entitatii Movie
    const entityKeys = Object.keys(Movie.getAttributes());

    // eliminam din obiectul de query proprietatile pentru care nu dorim sa aplicam filtrarea
    delete filters.id;
    delete filters.poster;

    // definim o conditie de selectie dinamica pe baza campurilor primite in cadrul apelului
    //  dar inainte vom filtra criteriile primite ce nu reprezinta campuri valide pentru entitatea Movie
    const whereCondition = Object.keys(filters)
        .filter(key => entityKeys.includes(key))
        .map(key => {
            // in cazul in care filtrul este aplicat pe titlu sau pe regizor, aplicam clauza "like"
            if (key === "title" || key === "director") {
                return { [key]: { [Op.like]: `%${filters[key]}%` } }
            }

            // pentru toate celelalte campuri dorim sa testam egalitatea
            return { [key]: filters[key] }
        });

    return await Movie.findAll({
        attributes: ['id', 'title', 'year', 'director', 'genre', 'poster'],
        where: whereCondition
    });
};

const createMovie = async (movie) => {
    // pentru a preveni setarea unui id intr-un mod nepermis, vom sterge de la nivelul obiectului
    //  primit aceasta proprietate (in eventualitatea in care ea este setata)
    delete movie.id;

    return Movie.create(movie);
};

const updateMovie = async (movie) => {
    const identifiedMovie = await Movie.findOne({ where: { id: movie.id } });

    // daca filmul este identificat in baza de date, actualizam valorile
    if (!!identifiedMovie) {
        identifiedMovie.set({ ...movie });
        return await identifiedMovie.save();
    }
}

const deleteMovie = async (id) => {
    return await Movie.destroy({ where: { id: id } });
}

export {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
}  
