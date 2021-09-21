import {useState} from "react";
import MovieDetails from "../services/MovieDetails";
import SingleMovieDetail from "../models/SingleMovieDetail";

export default function MovieDetail() {
    const [movieDetail, setMovieDetails] = useState<SingleMovieDetail>();
    function showPage () {
        MovieDetails(11).then((data) => setMovieDetails(data));
    }

    return (
        <div>
            <h1>Movie Details</h1>
            <p>{movieDetail}</p>
            <button onClick={showPage}>Add To Watch List</button>
        </div>
    )
}