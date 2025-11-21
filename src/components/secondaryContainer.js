// import { useSelector } from "react-redux";
// import MovieList from "./MovieList";

// const SecondaryContainer = () => {
//   const movies = useSelector((store) => store.movies);

//   return (
//     movies.nowPlayingMovies && (
//       <div className="bg-black">
//         <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
//           <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
//           <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
//           <MovieList title={"Popular"} movies={movies.popularMovies} />
//           <MovieList
//             title={"Upcoming Movies"}
//             movies={movies.nowPlayingMovies}
//           />
//           <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
//         </div>
//       </div>
//     )
//   );
// };
// export default SecondaryContainer;


// import MovieList from './MovieList';
// import { useSelector } from 'react-redux';

// const SecondaryContainer = () => {
//   const movies = useSelector((store) => store.movies);

//   return (
//     <div className="relative z-20 mt-[-80px] bg-black   ">
//       <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
//        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
//         <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
//          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
//           <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
//            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
//     </div>
//   );
// };

// export default SecondaryContainer;



 import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
   useTrendingMovies("week");
 return (
  <div className="bg-black">
    <div className="relative z-20 mt-[-80px] px-4 space-y-6">
      {movies?.nowPlayingMovies && (
        <MovieList
          title="Now Playing"
          movies={movies.nowPlayingMovies}
          rowClass="flex space-x-4 overflow-x-auto py-2"
          cardClass="min-w-[150px] md:min-w-[200px] lg:min-w-[250px] cursor-pointer transition transform hover:scale-105"
        />
      )}

     {movies?.topRatedMovies && (
  <MovieList
    title="Top Rated"
    movies={movies.topRatedMovies}
    rowClass="flex space-x-4 overflow-x-auto py-2"
    cardClass="min-w-[150px] md:min-w-[200px] lg:min-w-[250px] cursor-pointer transition transform hover:scale-105"
  />
)}


      {movies?.upcomingMovies && (
        <MovieList
          title="Upcoming"
          movies={movies.upcomingMovies}
          rowClass="flex space-x-4 overflow-x-auto py-2"
          cardClass="min-w-[150px] md:min-w-[200px] lg:min-w-[250px] cursor-pointer transition transform hover:scale-105"
        />
      )}
      {movies?.trendingMovies && (
        <MovieList
          title="Trending"
          movies={movies.trendingMovies}
          rowClass="flex space-x-4 overflow-x-auto py-2"
          cardClass="min-w-[150px] md:min-w-[200px] lg:min-w-[250px] cursor-pointer transition transform hover:scale-105"
        />
      )}
      {movies?.popularMovies && (
          <MovieList
            title="Popular"
            movies={movies.popularMovies}
            rowClass="flex space-x-4 overflow-x-auto py-2"
            cardClass="min-w-[150px] md:min-w-[200px] lg:min-w-[250px] cursor-pointer transition transform hover:scale-105"
          />
        )}

    </div>
  </div>
);

};

export default SecondaryContainer;
