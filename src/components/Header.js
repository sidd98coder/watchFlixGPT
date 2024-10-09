import React from 'react';

const Header = () => {
  return (
    <div className='absolute w-full h-20 bg-gradient-to-b from-black z-10'>
        <div className='relative w-44 m-2 p-2 '>
            <img src={`${process.env.PUBLIC_URL}/images/watchflix-logo.png`} alt="logo"/>
        </div>
    </div>
  )
}

export default Header