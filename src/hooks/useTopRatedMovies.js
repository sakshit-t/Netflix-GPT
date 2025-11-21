// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addTopRatedMovies } from "../utils/moviesSlice";
// import { API_OPTIONS } from "../utils/constants";

// const useTopRatedMovies = () => {
//   const dispatch = useDispatch();

//   const getTopRatedMovies = async () => {
//     try {
//       const response = await fetch(
//         "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
//         API_OPTIONS
//       );
//       const data = await response.json();
//       console.log("Top Rated Movies:", data.results);
//       dispatch(addTopRatedMovies(data.results));
//     } catch (error) {
//       console.error("Failed to fetch Top Rated movies:", error);
//     }
//   };

//   useEffect(() => {
//     getTopRatedMovies();
//   }, [dispatch]);
// };

// export default useTopRatedMovies;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };

    getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;

