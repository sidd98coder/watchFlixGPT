import React, { useEffect, useRef } from 'react'
import MovieCard from './MovieCard';

const MovieSection = ({ title, data }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        // Function to handle horizontal scrolling
        const handleScroll = (event) => {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY * 2; // Adjust the scroll speed by multiplying deltaY
        };

        // Add event listener for the mouse wheel
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', handleScroll);
        }

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);


    return (
        <div>
            <div className='my-3'>
                {data && <div className='border-black flex flex-col gap-3'>
                    <h1 className='font-bold text-2xl text-white py-2'>{title}</h1>
                    <div ref={scrollRef} className='flex overflow-x-scroll scrollbar-hide'>
                        <div  className='flex gap-2'>
                            {data?.map((movie) => {
                                return (
                                    <MovieCard key={movie?.id} movie={movie} />
                                )
                            })}
                        </div>
                    </div>


                </div>}
            </div>
        </div>
    )
}

export default MovieSection