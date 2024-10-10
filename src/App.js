import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebaseConfig'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './utils/userSlice'
import Browse from './components/Browse';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    }
  ])
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  
  }, []);

  return (
    <div className='app'>
        <RouterProvider router={appRouter} />
    </div>


  );
}

export default App;
