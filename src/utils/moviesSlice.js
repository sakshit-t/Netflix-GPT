import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,     
    popularMovies: null,
    trailerVideo: null,
    upcomingMovies: null,
    trendingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {  
      state.upcomingMovies = action.payload;
    },
     addTrendingMovies: (state, action) => {
       state.trendingMovies = action.payload; 
      },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addTrailerVideo,
  addUpcomingMovies,
   addTrendingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;