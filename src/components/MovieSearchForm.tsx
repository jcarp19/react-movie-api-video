import { useState } from "react"

export default function MovieSearchForm({onSubmit}:{onSubmit: (searchQuery: string) => void}) {
    const [movieQuery, setMovieQuery] = useState("");
    const [filter, setFilter] = useState("");

    return (
        <div className="MovieSearchWrapper">
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(movieQuery)
                }}>
                <input type="text" value={movieQuery} onChange={(e) => {
                    setMovieQuery(e.target.value);
                }} />
                <label htmlFor="filter">Filter By:
                    <select name="filter" id="filter" onChange={(e) => {
                        console.log(e.target.value)
                        setFilter(e.target.value)
                        }}>
                        <option value="" selected>Select One</option>
                        <option value="Genre">Genre</option>
                        <option value="Runtime">Runtime</option>
                        <option value="Up Votes">Up Votes</option>
                    </select>
                </label>
            </form>
        </div>
    )
}