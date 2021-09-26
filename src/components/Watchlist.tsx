import React, {useState, useContext} from 'react';
import {WatchlistContext} from "../components/context/WatchlistContext";
import "./Watchlist.css";
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
    const [watchList, setWatchList] = useState(movie);
    
    return (
            <div className="watchlist-container">
                {watchList.map((item, index) =>
                <>
                <div className="movie-results" key={index}>
                    <img className="moviePoster" src={item.posterPath} />
                    <div className="movie-results-info">
                        <h2 className="movie-title">{item.title}</h2>
                        <p className="movie-title">Runtime: {item.runtime} minutes</p>
                    </div>
                </div>
                    <div className="movie-detail">
                        <p>{item.plot}</p>
                        <button className="btn" onClick={() => {
                            let newMovieList = [...watchList]
                            newMovieList.splice(index, 1)
                            setWatchList(newMovieList);
                        }}>Remove from watch list</button>
                    </div>
                </>
                )}
            </div>
                
        )
    }
