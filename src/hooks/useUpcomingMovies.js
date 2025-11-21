// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addUpcomingMovies } from "../utils/moviesSlice";
// import { API_OPTIONS } from "../utils/constants";

// const useUpcomingMovies = () => {
//   const dispatch = useDispatch();

//   const getUpcomingMovies = async () => {
//     try {
//       const response = await fetch(
//         "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
//         API_OPTIONS
//       );
//       const data = await response.json();
//       console.log("Upcoming Movies:", data.results); // ✅ Debug
//       dispatch(addUpcomingMovies(data.results));
//     } catch (error) {
//       console.error("Failed to fetch upcoming movies:", error);
//     }
//   };

//   useEffect(() => {
//     getUpcomingMovies();
//   }, [dispatch]);

// };

// export default useUpcomingMovies;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };

    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
