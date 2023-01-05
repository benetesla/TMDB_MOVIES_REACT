function MOVIES({movie}){
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
           <h2>{movie.title}</h2>
           <br/>           
        </div>
    )
}
export default MOVIES;