import React, {useState, useContext} from 'react';
import {WatchlistContext} from "../components/context/WatchlistContext";
import { single } from './SingleMovieInfo';
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
        <>
                <h2 className="watchlist-headline">Watchlist</h2>
            <div
            className="watchlist-container">
                {watchList.map((item, index) =>
                <div className="watchlist-card">
                <div
                aria-label = "addDiv1"
                role = "Div1"
                 className="movie-results" key={index}>
                    <img className="moviePoster" src={item.posterPath} />
                    <div className="movie-results-info">
                        <h2 className="movie-title">{item.title}</h2>
                        <p 
                        aria-label = "addInput"
                        role = "Input"
                        className="movie-runtime">Runtime: {item.runtime} minutes</p>
                    </div>
                </div>
                    <div className="movie-detail">
                        <p
                        aria-label = "addInput1"
                        role = "Input1"
                        >{item.plot}</p>
                        <button 
                        aria-label = "addMovie"
                        role = "button"
                        className="btn" onClick={(e) => {
                            e.preventDefault(); 
                            let newMovieList = [...watchList]
                            newMovieList.splice(index, 1)
                            setWatchList([]);
                            setWatchList(newMovieList);
                            single.splice(index, 1); 
                            console.log(watchList)
                        }}>Remove from watch list</button>
                    </div>
                </div>
                )}
            </div>
            </>
                
        )
    }
