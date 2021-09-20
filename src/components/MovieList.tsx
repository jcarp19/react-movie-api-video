import { useState } from "react";
import GetMovies from "../services/GetMovies";
import  MovieSearchForm from "../components/MovieSearchForm";
import SearchMovieTitle from "../models/SearchMovieTitle";
import MovieResult from "../components/MovieResult";
import searchParams from "../models/searchParams";
import LoadMoreMovies from "../services/LoadMoreMovies";

export default function MovieList() {
    const [searchMovie, setSearchMovie] = useState<SearchMovieTitle>();
    
    function onSubmit(payload:{seachQuery: string, filterType: string}):void {
        GetMovies(payload.seachQuery, payload.filterType).then((data) => setSearchMovie(data));
    }
   
    return (
        <div>
            <h1>Movie List</h1>
            {/* <button onClick={GetMovies}>Get axios response</button> */}
            <MovieSearchForm onSubmit={onSubmit}/>
            {searchMovie?.results?.map((result, index) => <MovieResult key={index} id={result.id} title={result.title} overview={result.overview} vote_average={result.vote_average} poster_path={result.poster_path} />)}

            {/* {searchMovie && <button onClick={() => {}}>Load More</button>} */}
        </div>
    )
}