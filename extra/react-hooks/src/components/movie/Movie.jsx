const Movie = (props) => {
  return (
    <>
      <div className="movies-container">
        <h1>{props.title}</h1>
        <h2>{props.director}</h2>
        <h3>{props.year}</h3>
        <img src={props.poster} />
      </div>
    </>
  )
}

export default Movie;

