import { resourceLimits } from "worker_threads";
import {ResultsEntity} from "../models/SearchMovieTitle";
import "./MovieResults.css";

export default function MovieResult({poster_path,title, id, vote_average, overview}: ResultsEntity) {
    let path = `https://www.themoviedb.org/t/p/original${poster_path}`;
    return (
        <div>
            <img className="moviePoster" src={path} alt="" />
            <h1>{title}</h1>
            <p>Overview: {overview}</p>
            <p>Rating: {vote_average}</p>
            <p><a href="${id}">Details</a></p>
        </div>

    )
}