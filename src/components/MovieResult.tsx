import {ResultsEntity} from "../models/SearchMovieTitle";
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import "./MovieResults.css";


export default function MovieResult({poster_path,title, id, vote_average, overview, release_date}: ResultsEntity) {
    const movieId = `${id}`; 
    // let posterPath = `https://www.themoviedb.org/t/p/original${poster_path}`;
    let posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
    // let idPath = {id};
   
    return (
        <>
        <div className="movie-results">
                <img className="moviePoster" src={posterPath} alt="" />
                <div className="movie-results-info">
                    <h2 className="movie-title">{title}</h2>
                    <p className="movie-release">Released: {release_date.substring(0,4)}</p>
                    {/* <p>Overview: {overview}</p>
                    <p>Rating: {vote_average}</p> */}
                    <Link to={movieId}><button className="btn">Movie Details</button></Link>
                </div>
        </div>
        <div className="spacer"></div>
        </>
    )
}