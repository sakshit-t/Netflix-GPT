import React from 'react'
import {useSelector} from "react-redux";
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground'
const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
 if(!movies) return;
 const mainMovie=movies[0];
 console.log(mainMovie); 
 const{original_title,overview,id}=mainMovie;
    return (
    <div className="relative w-screen h-[90vh]">

      <VideoBackground movieId={id} />
      <div className="absolute inset-0">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  )
}

export default MainContainer;
