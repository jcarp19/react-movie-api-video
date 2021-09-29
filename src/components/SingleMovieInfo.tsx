import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import SingleMovieDetail from '../models/SingleMovieDetail';
import MovieDetails from '../services/MovieDetails';
// import { Link } from 'react-router-dom';
// import {GenresEntity} from "../models/SingleMovieDetail";
import "./MovieResults.css";
import "./MovieDetail.css";
import "./SingleMovieInfo.css";

interface Movie {
    title: string,
    runtime: string,
    plot: string,
    posterPath: string
}
//context array of object
export const single:Movie[] = [
];

export const SingleMovieInfo = () => {
    const [singleMovie, setSingleMovie] = useState<SingleMovieDetail>();
    
    const {id}: {id: string} = useParams();
    useEffect(() => {
        MovieDetails(id)
        .then((data) => setSingleMovie(data))
    }); 
    
    let posterPath = `https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`;
    let title = `${singleMovie?.title}`;
    let runtime = `${singleMovie?.runtime}`;
    let plot = `${singleMovie?.overview}`;
    
    return (
        <>
        <h2 className="page-heading">Movie Details</h2>
        <div className="single-movie-box">
            <div className="single-results">
                <img className="single-moviePoster" src={posterPath} alt={singleMovie?.title} />
                {/* <div className="single-movie-results-info">
                </div> */}
            </div>
            <div className="single-movie-detail">
                <h2>{singleMovie?.title}</h2>
                <p className="movie-release">Released: {singleMovie?.release_date.substr(0,4)}</p>
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
            
            <button className="btn watchlist-button" id="add-to-watchlist" onClick={
                (e) => {
                    let btnValue
                    let btnState
                    let btnBGColor

                    console.log(btnValue);
                    e.preventDefault(); 
                    single.push({title: title, runtime: runtime, plot: plot, posterPath: posterPath})
                    
                    // change button text to "Added to Watchlist"
                    btnValue = (document.getElementById("add-to-watchlist") as HTMLButtonElement).innerHTML = "Added to Watchlist";
                    btnState = (document.getElementById("add-to-watchlist") as HTMLButtonElement).disabled = true;
                    btnBGColor = (document.getElementById("add-to-watchlist") as HTMLButtonElement).style.backgroundColor = "darkgreen";
                }
            }>Add to Watchlist</button>
            
            </div>
        </div>
        </>
    )
}

export default SingleMovieInfo;