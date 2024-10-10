import React, { useRef, useState } from 'react'
import { validateFormFields } from '../utils/Validator'
import Header from './Header'
import Background from './Background'
import { Link, useNavigate } from 'react-router-dom'
import { signUpWithEmailPassword } from '../utils/auth'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'




const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const usernameRef = useRef(null);


    const handleSignUp = () => {
        const msg = validateFormFields(emailRef.current.value, null);
        setErrorMessage(msg);

        if (msg === 'OK') {
            //sign up
            signUpWithEmailPassword(usernameRef.current.value , emailRef.current.value, passRef.current.value, (currentUser) => {
                dispatch(addUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL
                }))
                navigate('/browse');
            },
            (e) => {
                setErrorMessage(e.message);
            }
        );
        }
    }

    // const signUp = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed up 
    //             const user = userCredential.user;
    //             navigate('/browse');
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             setErrorMessage(errorMessage);
    //             // ..
    //         });
    // }

    return (
        <div>
            <Header />
            <Background />
            <form onSubmit={(e) => e.preventDefault()} className='absolute w-1/3 p-4 bg-black px-20 py-10 mt-24 mx-auto right-0 left-0 flex flex-col text-white gap-1 rounded-md opacity-80'>
                <h1 className='text-3xl font-bold mt-2 mb-4'>Sign Up</h1>
                <input ref={usernameRef} type='text' placeholder='Username' className='p-2 my-2 w-full rounded-md bg-gray-900 ring-white ring-1'></input>
                <input ref={emailRef} type='text' placeholder='Email' className='p-2 my-2 w-full rounded-md bg-gray-900 ring-white ring-1'></input>
                <input ref={passRef} type='password' placeholder='password' className='p-2 my-2 w-full rounded-md bg-gray-900 ring-white ring-1'></input>
                {errorMessage && <p className={`py-2 font-medium ${errorMessage === 'OK' ? 'text-green-500' : 'text-red-500'}`}>{errorMessage === 'OK' ? 'Success!' : errorMessage}</p>}
                <button onClick={() => handleSignUp()} className='p-2 my-2 bg-red-500 w-full font-medium rounded-md bg-opacity-100'>Sign Up</button>
                <div className='my-2'>Already a user?<Link className='hover:underline font-bold' to="/login"> Sign in now</Link></div>
            </form>
        </div>
    )
}

export default Signup