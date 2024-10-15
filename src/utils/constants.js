import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrailerVideo, addUpcomingMovies } from "./movieSlice";

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGE0M2Y3Y2Y1MjA3ZDI2YmFhMTMyZmI5ZGYzOTc4NCIsIm5iZiI6MTcyODkwNjYwMS43NjQ2Miwic3ViIjoiNjcwZDA0OGRmNThhOTIwNmFhNDE1ZjQxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kgLt_VtGVVUj9k5h1nlyYyvuORIxMDaQHGRRHr8nJOo'
    }
  };

  export const YOUTUBE_PREFIX = "https://www.youtube.com/embed";
  export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500/";

  //actions
  export const ADD_NOW_PLAYING_MOVIES = addNowPlayingMovies;
  export const ADD_POPULAR_MOVIES = addPopularMovies;
  export const ADD_UPCOMING_MOVIES = addUpcomingMovies;
  export const ADD_TOP_RATED_MOVIES = addTopRatedMovies;
  export const ADD_TRAILER_VIDEO = addTrailerVideo;