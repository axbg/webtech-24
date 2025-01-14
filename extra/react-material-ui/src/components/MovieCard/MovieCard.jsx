import { Card, CardContent, Button, Box, Grid, Typography } from '@mui/material';

// componenta MovieCard primeste un prop denumit movie - obiectul ce descrie un film
// o functie onDelete ce va fi apelata atunci cand se doreste stergerea unui element
const MovieCard = ({ movie, onDelete }) => {
    const confirmDelete = (movie) => {
        if (window.confirm(`Do you want to delete ${movie.title}?`)) {
            onDelete(movie);
        }
    }

    return (
        <Card variant='outlined' sx={{ marginTop: 2 }} style={{width: "500px"}}>
            {/* utilizarea componentei Card si CardContent pentru afisarea continutului intr-o forma structurata */}
                <CardContent>
                {/* utilizarea componentei grid pentru a realiza aranjarea si spatierea elementelor */}
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={2}>
                            <img alt="movie-img" style={{ maxWidth: "100%", height: "auto" }} src={movie.poster} />
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container columns={12}>
                                <Grid item xs={5}>
                                    {/* utilizarea componentei Typography pentru stilizarea textului */}
                                    <Typography variant="h6">
                                        {/* sintaxa de JSX */}
                                        {`${movie.title} (${movie.year})`}
                                    </Typography>
                                </Grid>
                                <Grid item xs={7} textAlign="right">
                                    <Button variant="contained" color="error" onClick={() => confirmDelete(movie)}>X</Button>
                                </Grid>
                            </Grid>
                            <Box mt={2} mb={2}>
                                {/* sx - proprietate pentru stil custom */}
                                <Typography sx={{ fontStyle: 'italic' }}>
                                    {`${movie.genre} • ${movie.duration} minutes • ${movie.director}`}
                                </Typography>
                            </Box>
                            {/* culoare selectata din tema default https://mui.com/material-ui/customization/palette/ */}
                            <Box backgroundColor="warning.main" p={2} sx={{ borderRadius: 5 }} color="white">
                                {movie.synopsis}
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
        </Card>
    )
};

export { MovieCard };