// import React, { useState } from 'react';
// import { signOut } from "firebase/auth";
// import { auth } from "../utils/Firebase";
// import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from  './header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
// import usePopularMovies from "../hooks/usePopularMovies";
// import useTopRatedMovies from "../hooks/useTopRatedMovies";
// import useTrendingMovies from "../hooks/useTrendingMovies";
// import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browser = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
   useNowPlayingMovies();
  //  usePopularMovies();
  //  useTopRatedMovies();
  //  useTrendingMovies();
  //  useUpcomingMovies();
  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;


  


