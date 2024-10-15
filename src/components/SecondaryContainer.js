import React from 'react'
import MovieSection from './MovieSection';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector((store) => store.movies?.popularMovies);
    const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
    const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

    return (
        <div className='px-12 w-full bg-black relative'>
            <div className='-my-48 bg-inherit  z-20'>
                <MovieSection title="Now Playing" data={nowPlayingMovies} />
                <MovieSection title="Top Rated Movies" data={topRatedMovies} />
                <MovieSection title="Popular Movies" data={popularMovies} />
                <MovieSection title="Upcoming Movies" data={upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer