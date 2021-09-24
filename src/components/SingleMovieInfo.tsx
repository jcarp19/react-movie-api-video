import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import SingleMovieDetail from '../models/SingleMovieDetail';
import MovieDetails from '../services/MovieDetails';
// import { Link } from 'react-router-dom';
// import {GenresEntity} from "../models/SingleMovieDetail";
import "./MovieResults.css";
import "./MovieDetail.css";
import "./SingleMovieInfo.css";

 // context array of object
export const single = [{
    title: "",
    runtime: 0
}];


export const SingleMovieInfo = () => {
    const [singleMovie, setSingleMovie] = useState<SingleMovieDetail>();
    
    const {id}: {id: string} = useParams();
    useEffect(() => {
        MovieDetails(id)
        .then((data) => setSingleMovie(data))
    }); 
    
    let posterPath = `https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`;
    
    
    return (
        <div>
            <h2 className="page-heading"></h2>
            <div className="movie-results">
                <img className="moviePoster" src={posterPath} alt={singleMovie?.title} />
                <div className="movie-results-info">
                    <h2>{singleMovie?.title}</h2>
                    <p className="movie-release">Released: {singleMovie?.release_date.substr(0,4)}</p>
                </div>
            </div>
            <div className="movie-detail">
                {/* <p>{singleMovie?.overview}</p> */}
                <details>
                    <summary>Movie Plot</summary>
                <p>{singleMovie?.overview}</p>
                </details>
                <p><a href={singleMovie?.homepage} className="site-link">Visit Website</a></p>
                <p>Popularity: {singleMovie?.popularity}</p>
                <p>Minutes: {singleMovie?.runtime}</p>
                <h3 className="genre-heading">Genre</h3>
                {/* {genre} */}
                {singleMovie?.genres?.map((genre, index) =>
                    <p className="genre-name" key={index}>{genre.name}</p>
                )}
            </div>
            <button onClick={
                () => {
                    single.push({title: "Jim Carpenter", runtime: 121})
                    // single.push({singleMovie?.title})
                }
            }>Add to Watchlist</button>
        </div>
    )
}

export default SingleMovieInfo;