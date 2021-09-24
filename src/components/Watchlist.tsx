import React, {useContext} from 'react';
import MovieDetails from "../components/MovieDetail";

// THIS IS OUR CHILD
import {Watch} from "../components/SingleMovieInfo";

export const Watchlist = () => {
    return (
        <div>
            {useContext(Watch)}
        </div>
    )
}
