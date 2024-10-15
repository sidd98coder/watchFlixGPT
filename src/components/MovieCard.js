import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
  const {title, overview, backdrop_path, poster_path} = movie;
  return (
    <div className='w-52'>
      <img src={TMDB_IMG_URL + poster_path} alt='xyz'
      className=''/>
      {/* <div className='absolute text-white font-medium'>{title}</div> */}
    </div>
  )
}

export default MovieCard