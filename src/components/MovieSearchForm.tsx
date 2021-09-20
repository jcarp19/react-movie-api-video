import { useState } from "react"

export default function MovieSearchForm({onSubmit}:{onSubmit: (payload:{seachQuery: string, filterType: string}) => void}) {
    const [movieQuery, setMovieQuery] = useState("");
    const [filter, setFilter] = useState("");

    return (
        <div className="MovieSearchWrapper">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit({seachQuery: movieQuery, filterType: filter});
                setMovieQuery("")
                setFilter("")
                }}>
                <input type="text" value={movieQuery} onChange={(e) => {
                    setMovieQuery(e.target.value);
                }} />
                <label htmlFor="filter">Filter By:
                    <select name="filter" id="filter" onChange={(e) => {
                        console.log(e.target.value)
                        setFilter(e.target.value)
                        }}>
                        <option value="">Select One</option>
                        {/* /movie/now_playing */}
                        <option value="now_playing">Now Playing</option>
                        {/* /movie/popular */}
                        <option value="popular">Popular</option>
                        {/* /movie/top_rated */}
                        <option value="top_rated">Top Rated</option>
                    </select>
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}