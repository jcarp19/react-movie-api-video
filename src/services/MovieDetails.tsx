import axios from "axios";
import SingleMovieDetail from "../models/SingleMovieDetail";

export default function MovieDetails(id: string): Promise<SingleMovieDetail> {
    //   let url = "https://api.themoviedb.org/3/movie/";
      let url = `https://api.themoviedb.org/3/movie/${id}`;

    
    return axios
        .get(url, {
            params: {
                api_key: process.env.REACT_APP_MOVIES_APP_KEY,
                language: "en-US",
            }
        })
        .then(response => {
            // console.log(response.data);
            // console.log(response.data.genres);
            return response.data
            
             
        })  
    
  }