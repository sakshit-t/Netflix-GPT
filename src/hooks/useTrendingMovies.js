// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addTrendingMovies } from "../utils/moviesSlice";
// import { API_OPTIONS } from "../utils/constants";

// const useTrendingMovies = (timeWindow = "week") => { // "day" or "week"
//   const dispatch = useDispatch();

//   const getTrendingMovies = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/trending/movie/${timeWindow}`,
//         API_OPTIONS
//       );
//       const data = await response.json();
//       console.log("Trending Movies:", data.results);
//       dispatch(addTrendingMovies(data.results));
//     } catch (error) {
//       console.error("Failed to fetch trending movies:", error);
//     }
//   };

//   useEffect(() => {
//     getTrendingMovies();
//   }, [timeWindow]);
// };

// export default useTrendingMovies;


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    };

    getTrendingMovies();
  }, [dispatch]);
};

export default useTrendingMovies;
