import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home";
import Product from "../pages/Product";
import About from "../pages/About";
import Login from "../component/share/Login";
import Register from "../component/share/Register";
import Dashbard from "../component/dashboard/Dashbard";
import Profile from "../component/share/Profile";
import Setting from "../component/share/Setting";
import ContactP from "../pages/ContactP";


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
          element: <ContactP/>
        },{
          path:"/about",
          element:<About/>
        },{
          path:"/login",
          element:<Login/>
        },{
          path:"/register",
          element:<Register/>
        },{
          path:"/profile",
          element:<Profile/>
        },{
          path:"/setting",
          element:<Setting/>
        }
      ]
    },{
      path:"/dashboard",
      element:<Dashbard/>,
      children:[
        {

        }
      ]
    }
  ]);