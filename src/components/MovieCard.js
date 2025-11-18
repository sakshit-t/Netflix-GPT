// import React from 'react'
// import { IMG_CDN_URL } from "../utils/constants";

// const MovieCard = ({ posterPath }) => {
//   if (!posterPath) return null;
//   return (
//     <div className="w-36 md:w-48 pr-4">
//       <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
//     </div>
//   );
// };
// export default MovieCard;

import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-40 md:w-48 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200">
      <img
        className="rounded-lg w-full h-60 object-cover shadow-lg"
        src={IMG_CDN_URL + posterPath}
        alt={title}
      />

      <p className="text-white text-sm mt-2 w-full truncate">
        {title}
      </p>
    </div>
  )
}

export default MovieCard
