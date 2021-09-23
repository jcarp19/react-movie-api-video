import React, {useContext} from 'react';
import MovieDetails from "../components/MovieDetail";

// THIS IS OUR CHILD
import {Watch} from "../components/MovieDetail";

export const Watchlist = () => {
    return (
        <div>
            <h1>{useContext(Watch)}</h1>
        </div>
    )
}
