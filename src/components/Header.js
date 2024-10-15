import React, { useEffect } from 'react';
import { signout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebaseConfig'
import { addUser, removeUser } from '../utils/userSlice'
import Logo from "../images/watchflix-logo.png"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  useEffect(()=>{
    //onAuthStateChanged returns a unsubscribe function when called
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/login');
      }
    });

    return ()=>{
      unsbscribe();
    }
  
  }, []);

  const handleSignOut = () => {
    signout();
  }
  return (
    <div className='absolute w-full h-20 bg-gradient-to-b from-black z-10 flex justify-between items-center px-12'>
      <div>
        <div className='relative w-44 my-2 py-2 '>
          <img src={Logo} alt="logo" />
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