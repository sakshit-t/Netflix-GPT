// import React, { useState } from 'react';
// import { signOut } from "firebase/auth";
// import { auth } from "../utils/Firebase";
// import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from  './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browser = () => {
   useNowPlayingMovies();
   return(
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
   )
}

export default Browser;


  


