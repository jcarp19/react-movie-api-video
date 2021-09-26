import { useState } from "react";
import "./MovieSearchForm.css";

export default function MovieSearchForm({onSubmit}:{onSubmit: (payload:{seachQuery: string, filterType: string}) => void}) {
    const [movieQuery, setMovieQuery] = useState("");
    const [filter, setFilter] = useState("");

    return (
        <div className="MovieSearchWrapper">
            <h1 className="headline">Find a great movie</h1>
            <p className="main-copy">Use the search box below to search by title, or select from one of the filters to see a lists of great movies.</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit({seachQuery: movieQuery, filterType: filter});
                setMovieQuery("")
                setFilter("")
                }}>
                {/* <label htmlFor="search" className="form-label">Search</label> */}
                <input name="search" id="search" placeholder="Search by Title" type="text" value={movieQuery} onChange={(e) => {
                    setMovieQuery(e.target.value);
                }} />
                
                {/* <label htmlFor="filter" className="form-label">Filter By:</label> */}
                    <select name="filter" id="filter" onChange={(e) => {
                        console.log(e.target.value)
                        setFilter(e.target.value)
                        }}>
                        <option className="filter-option" value="">Filter By</option>
                        {/* /movie/now_playing */}
                        <option className="filter-option" value="now_playing">Now Playing</option>
                        {/* /movie/popular */}
                        <option className="filter-option" value="popular">Popular</option>
                        {/* /movie/top_rated */}
                        <option className="filter-option" value="top_rated">Top Rated</option>
                    </select>
                
                <button className="btn" type="submit">Show Me The Movies</button>
            </form>
        </div>
    )
}