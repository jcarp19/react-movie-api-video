import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import SingleMovieDetail from '../models/SingleMovieDetail';
import MovieDetails from '../services/MovieDetails';
// import { Link } from 'react-router-dom';
// import {GenresEntity} from "../models/SingleMovieDetail";
import "./MovieResults.css";
import "./MovieDetail.css";
import "./SingleMovieInfo.css";

interface oneMovie {
    title: string,
    runtime: string,
    plot: string,
    posterPath: string
}
//context array of object
export const single = [
    {
    title: "",
    runtime:"",
    plot: "",
    posterPath: ""
    }

];
// export const single:<oneMovie>[];
// export const single = (movie: SingleMovieDetail) => {
//     const [watchList, setWatchList] = useState<SingleMovieDetail[]>([
//         // {title: "Star Wars", runtime: 123}
//     ]);
//     let newList = [...watchList];
//     newList.push(movie);
//     setWatchList(newList);
// }




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
        <div className="single-movie-box">
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
            <Link to="/watchlist">
            <button className="btn watchlist-button" onClick={
                () => {
                    single.push({title: title, runtime: runtime, plot: plot, posterPath: posterPath})
                }
            }>Add to Watchlist</button>
            </Link>
        </div>
    )
}

export default SingleMovieInfo;