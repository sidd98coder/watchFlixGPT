import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='border-black w-24 h-56'>{movie.original_title}</div>
  )
}

export default MovieCard