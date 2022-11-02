import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

  const router = createBrowserRouter([

    {
      path: '/',

      element : <Main></Main>,

      children: [

         
     {
        path : '/',
        
        element: <Home></Home>
        
      },

           
     {
      path : '/login',
      
      element: <Login></Login>
      
    },

    {
      path : '/sign',
      
      element: <SignUp></SignUp>
      
    }

      ]

    }
  ])

  export default router;
