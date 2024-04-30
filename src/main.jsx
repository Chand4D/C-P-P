import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import MainLout from './layout/MainLout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLout/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/signin",
        element: <Signin/>,
      },
    
  ]
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>,
)
