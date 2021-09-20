import axios from "axios";
import SearchMovieDetail from "../models/SearchMovieTitle";

export default function GetMovies(searchQuery: string, filterType: string): Promise<SearchMovieDetail> {
      let url = "https://api.themoviedb.org/3/";

    if (!!!searchQuery && !!!filterType) {
        //Call the default API
        url += "search/movie"
    } else if (!!searchQuery && !!!filterType) {
        //Call the search query
        url += "search/movie"
    } else {
        // call the filter type
        url += "movie/" + filterType
    }
    return axios
        .get(url, {
            params: {
                api_key: process.env.REACT_APP_MOVIES_APP_KEY,
                language: "en-US",
                query: searchQuery,
                page: 1,
                include_adult: false
            }
        })
        .then(response => {
            console.log(response.data);
            return response.data
        })  
    
  }