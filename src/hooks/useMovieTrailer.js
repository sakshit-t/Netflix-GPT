// import { useDispatch,useEffect } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addTrailerVideo } from "../utils/moviesSlice";
// const useMovieTrailer=()=>{
//  const dispatch = useDispatch();
  

//   const getMovieVideos = async (movieId) => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/videos`,
//       API_OPTIONS
//     );

//     const json = await data.json();
//     console.log("Video API Response:", json);

//     // ensure results exists
//     const videos = json?.results || [];

//     // filter trailer
//     const trailer =
//       videos.find((video) => video.type === "Trailer") || videos[0];

//     console.log("Selected Trailer:", trailer);

//     dispatch(addTrailerVideo(trailer));
//   };

//   useEffect(() => {
//     if (movieId) getMovieVideos();
//   }, [movieId]);
// }
// export default  useMovieTrailer;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const videos = json?.results || [];
    const trailer =
      videos.find((video) => video.type === "Trailer") || videos[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);

  return trailerVideo;
};

export default useMovieTrailer;

