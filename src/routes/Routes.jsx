import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../component/share/Login";
import Register from "../component/share/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },{
          path:"/product",
          element: <Product/>
        },{
          path:"/contact",
          element: <Contact/>
        },{
          path:"/about",
          element:<About/>
        },{
          path:"/login",
          element:<Login/>
        },{
          path:"/register",
          element:<Register/>
        }
      ]
    },
  ]);