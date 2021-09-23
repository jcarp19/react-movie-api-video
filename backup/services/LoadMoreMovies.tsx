import axios from "axios";
import SearchMovieDetail from "../models/SearchMovieTitle";

export default function LoadMoreMovies(): Promise<SearchMovieDetail> {
      
    return axios
        .get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: process.env.REACT_APP_MOVIES_APP_KEY,
                language: "en-US",
                // query: searchQuery,
                page: +1,
                include_adult: false
            }
        })
        .then(response => {
            console.log(response.data);
            return response.data
        })    
  }
