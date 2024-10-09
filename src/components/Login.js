import React from 'react'
import Header from './Header'
import Background from './Background'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <Header/>
        <Background/>
        <form className='absolute w-1/3 p-4 bg-black px-20 py-10 mt-24 mx-auto right-0 left-0 flex flex-col text-white gap-1 rounded-md opacity-80'>
            <h1 className='text-3xl font-bold mt-2 mb-4'>Sign In</h1>
            <input type='text' placeholder='Email or mobile number' className='p-2 my-2 w-full rounded-md bg-gray-900 ring-white ring-1'></input>
            <input type='text' placeholder='password' className='p-2 my-2 w-full rounded-md bg-gray-900 ring-white ring-1'></input>
            <button className='p-2 my-2 bg-red-500 w-full font-medium rounded-md bg-opacity-100'>Sign In</button>
            <h2 className='text-center'>OR</h2>
            <button className='p-2 my-2 bg-red-500 w-full font-medium rounded-md text-center bg-[#80808066]'>Use a sign-in code</button>
            <Link className='text-center m-2 hover:underline' to="/forgot-password">Forgot password?</Link>
            <div className='flex items-center'>
                <input type='checkbox' className='w-4 h-4'/>
                <label>Remember me</label>
            </div>
            <div className='my-2'>New to Netflix?.<Link className='hover:underline font-bold' to="/signup"> Sign up now</Link></div>
        </form>
    </div>
  )
}

export default Login