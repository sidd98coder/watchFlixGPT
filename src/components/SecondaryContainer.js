import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const SecondaryContainer = () => {
    
    const nowPlayingList = useSelector((store) => store.movies?.nowPlayingMovies);

    return (
        <div className='my-6'>
            {nowPlayingList && <div className='border-black flex flex-col gap-5'>
                <h1 className='font-bold text-xl'>Now Playing</h1>

                <div className='flex flex-wrap w-full px-2'>
                    {nowPlayingList?.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })}
                </div>

            </div>}
        </div>
    )
}

export default SecondaryContainer