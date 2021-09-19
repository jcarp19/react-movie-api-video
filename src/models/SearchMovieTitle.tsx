export default interface SearchMovieTitle {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_results: number;
    total_pages: number;
  }
  export interface ResultsEntity {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path?: string | null;
    // adult: boolean;
    // release_date: string;
    // genre_ids?: (number | null)[] | null;
    // original_title: string;
    // original_language: string;
    // backdrop_path?: string | null;
    // popularity: number;
    // vote_count: number;
    // video: boolean;
  }
  