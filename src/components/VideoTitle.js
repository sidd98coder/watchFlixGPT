import React from 'react'
import PlayIcon from '../images/play-button-arrowhead.png';
import InfoIcon from "../images/infoIcon.png"

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video px-12 pt-[20%] absolute bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold text-white'>{title}</h1>
        <p className='text-md py-6 w-1/4 text-white'>{overview}</p>
        <div className='flex gap-2'>
            <button className='flex items-center justify-center gap-2 h-10 w-32 border rounded-md font-bold bg-white text-black hover:bg-opacity-80'>
                 <img src={PlayIcon} alt="play"
                 className='h-4 w-4'/>
                Play
            </button>
            <button className='flex items-center justify-center gap-2 h-10 w-32  border rounded-md font-bold bg-[#80808066] text-white  hover:bg-opacity-80'>
                <img src={InfoIcon} alt="play"
                 className='h-6 w-6'/>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle