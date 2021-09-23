import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import SingleMovieDetail from '../models/SingleMovieDetail';
import MovieDetails from '../services/MovieDetails';
import { Link } from 'react-router-dom';
import {GenresEntity} from "../models/SingleMovieDetail";
import "./MovieResults.css";
import "./MovieDetail.css";

export const SingleMovieInfo = () => {
    const [singleMovie, setSingleMovie] = useState<SingleMovieDetail>();
    const [genre, setGenre] = useState<GenresEntity[]>();

    const {id}: {id: string} = useParams();
    // console.log(`the params is ${id}`)
    useEffect(() => {
        MovieDetails(id)
        .then((data) => setSingleMovie(data))
        // .then((data) => setGenre(data))
        // .then((genres) => setGenre(genres))
        // .then((data.genres) => setGenre(data.genres))
            
    });
    

    
    let posterPath = `https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`;
    let homePage = `${singleMovie?.homepage}`;
    return (
        <div>
            <h2>This is the real details page!</h2>
            <div className="movie-results">
                <img className="moviePoster" src={posterPath} alt={singleMovie?.title} />
                <div className="movie-results-info">
                    <h2>{singleMovie?.title}</h2>
                    <p className="movie-release">Released: {singleMovie?.release_date.substr(0,4)}</p>
                </div>
            </div>
            <div className="movie-detail">
                <p>{singleMovie?.overview}</p>
                <p><Link to={homePage} className="site-link">Visit Website</Link></p>
                <p>Popularity: {singleMovie?.popularity}</p>
                <p>Minutes: {singleMovie?.runtime}</p>
                <h3>Genre</h3>
                {genre?.map((genre, index) =>
                    <p key={index}>{genre.name}</p>
                )}
            </div>
            
        </div>
    )
}

export default SingleMovieInfo;