
import React, {useState} from "react";
import MovieDetails from "../services/MovieDetails";
import SingleMovieDetail from "../models/SingleMovieDetail";

// THIS IS OUR PARENT

// export default function MovieDetail() {
//     const [movieDetail, setMovieDetails] = useState<SingleMovieDetail>();
//     function showPage () {
//         MovieDetails(11).then((data) => setMovieDetails(data));
//     }
    
//     return (
//         <div>
//             <h1>Movie Details</h1>
//             <p>{movieDetail}</p>
//             <button onClick={showPage}>Add To Watch List</button>
//         </div>
//     )
// }

// make a function that calls the api and returns the data

function Math(n: number) {
    return n > 0 ? "Yes" : "No";
}
// export const Watch = React.createContext("We did it!")
export const Watch = React.createContext("Context");

export default Watch