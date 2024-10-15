import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './components/Browse';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';


function App() {
  

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
  

  return (
    <div className='app'>
        <RouterProvider router={appRouter} />
    </div>


  );
}

export default App;
