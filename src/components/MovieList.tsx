import { useState } from "react";
import GetMovies from "../services/GetMovies";
import  MovieSearchForm from "../components/MovieSearchForm";
import SearchMovieTitle from "../models/SearchMovieTitle";
import MovieResult from "../components/MovieResult";
import searchParams from "../models/searchParams";
import LoadMoreMovies from "../services/LoadMoreMovies";
import { resourceLimits } from "worker_threads";
import SingleMovieDetail from "../models/SingleMovieDetail";
import { Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import SingleMovieInfo from "./SingleMovieInfo";

export default function MovieList() {
    const [searchMovie, setSearchMovie] = useState<SearchMovieTitle>();
    // const [searchMovie, setSearchMovie] = useState<SingleMovieDetail>();
    
    function onSubmit(payload:{seachQuery: string, filterType: string}):void {
        GetMovies(payload.seachQuery, payload.filterType).then((data) => setSearchMovie(data));
    }
   
    return (
        <div>
            {/* <button onClick={GetMovies}>Get axios response</button> */}
            <MovieSearchForm onSubmit={onSubmit}/>
            {/* <Router>
                <Switch>
                <Route exact path="/:id">
                        <SingleMovieInfo />
                    </Route>
                    <Route exact path="/"> */}
                    {searchMovie?.results?.map((result, index) => 
                        <MovieResult key={index} id={result.id} title={result.title} overview={result.overview} vote_average={result.vote_average} poster_path={result.poster_path} release_date={result.release_date} /> 
                    )}
                    {/* </Route>
                </Switch>
            </Router>   */}
            {/* {searchMovie && <button onClick={() => {}}>Load More</button>} */}
        </div>
    )
}