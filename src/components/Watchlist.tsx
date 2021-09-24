import React, {useContext} from 'react';
import {WatchlistContext} from "../components/context/WatchlistContext";
// import MovieDetails from "../components/MovieDetail";

// THIS IS OUR CHILD
// import {Watch} from "../components/SingleMovieInfo";

// export const Watchlist = () => {
//     return (
//         <div>
//             {useContext(Watch)}
//         </div>
//     )
// }

export const Watchlist = () => {
    const movie  = useContext(WatchlistContext)
    return (
            <div>
                {movie.map((item, index) => 
                    <div key={index}>
                    <p>{item.title}</p>
                    <p>{item.runtime}</p>
                </div>
                )}
            </div>
        )
    }
