import React, { useState } from 'react';
import { signout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOut = () => {
    signout(() => {
      navigate('/login');
    });
  }
  return (
    <div className='absolute w-full h-20 bg-gradient-to-b from-black z-10 flex justify-between items-center px-2'>
      <div>
        <div className='relative w-44 m-2 p-2 '>
          <img src={`${process.env.PUBLIC_URL}/images/watchflix-logo.png`} alt="logo" />
        </div>
      </div>
      {user && <div className='flex items-center gap-2'>
        <div>
        <img alt='user-icon' 
        src= {user.photoURL ? "https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfn5oPOIGVSlH36wxaH-5oL5d8wztZgxFQeRq_LSU9RKySbIUMGZ2118vOWyS6Xl3wkKoIHBIknKKSY7YjP3lhLbaaMR3u8.png?r=72f" : user.photoURL }
          className="w-12 h-12"
        />
        <div className='text-white'>{user?.displayName}</div>
        </div>
        <button onClick={() => {
          handleSignOut();
        }} className='font-bold text-white'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header