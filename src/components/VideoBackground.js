import { ADD_TRAILER_VIDEO, YOUTUBE_PREFIX } from '../utils/constants';
import useFetchAndStore from '../utils/customHooks/useFetchAndStore';
import { MOVIE_VIDEO_URL } from '../utils/apiUrls';
import { useSelector } from 'react-redux';

const VideoBackground = ({ id, title }) => {
    const data = useSelector((store)=>store.movies?.trailerVideo);
    useFetchAndStore(MOVIE_VIDEO_URL(id), ADD_TRAILER_VIDEO);
    if(!data) return;
    const trailers = data?.filter(video => video.type === "Trailer");
    const mainTrailer =  trailers?.length === 0 ? data[0] : trailers[0] ;

    return (
        <div>
            {
                mainTrailer && 
                    <iframe
                  src={YOUTUBE_PREFIX + "/" + mainTrailer?.key+"?&autoplay=1&mute=1"}
                  title={title} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  className='w-screen aspect-video'
                  >
                </iframe>
                
            }
        </div>
    )
}

export default VideoBackground