import {ResultsEntity} from "../models/SearchMovieTitle";
import {NavLink, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "./MovieResults.css";


export default function MovieResult({poster_path,title, id, vote_average, overview}: ResultsEntity) {
    let posterPath = `https://www.themoviedb.org/t/p/original${poster_path}`;
    // let posterPath = `https://www.themoviedb.org/images/t/p/${poster_path}`;
    let idPath = {id};
    return (
        <div className="movie-results">
            <Router>
                <Switch>
                    <Route exact path="/moviedetail">
                        
                    </Route>
                </Switch>
            <img className="moviePoster" src={posterPath} alt="" />
            <h1>{title}</h1>
            <p>Overview: {overview}</p>
            <p>Rating: {vote_average}</p>
            <p><NavLink to="/moviedetail">Details</NavLink></p>
            </Router>
        </div>

    )
}