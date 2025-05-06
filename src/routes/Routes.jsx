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
import AdminHome from "../component/dashboard/admin/AdminHome";
import BuyerHome from "../component/dashboard/buyer/BuyerHome";
import SellerHome from "../component/dashboard/seller/SellerHome";
import Wishlist from "../component/dashboard/buyer/Wishlist";
import AddProduct from "../component/dashboard/seller/AddProduct";
import Adminhom from "../component/dashboard/admin/Adminhom";
import ViewProduct from "../component/product/ViewProduct";



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
          element: <Product/>,
          children:[
            {
              path:"product/:id",
              element: <ViewProduct/>
            }
          ]
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
          path:"/dashboard/adminhome",
          element: <Adminhom/>
        },
        {
          path:"/dashboard/adminusers",
          element: <AdminHome/>
        },
        {
          path:"/dashboard/adminselar",
          element: <AdminHome/>
        },
        {
          path:"/dashboard/allproduct",
          element: <AdminHome/>
        },{
          path:"/dashboard/buyerhome",
          element:<BuyerHome/>
        },{
          path:"/dashboard/sellerhome",
          element:<SellerHome/>
        },{
          path:"/dashboard/wishlist",
          element:<Wishlist/>
        },{
          path:"/dashboard/addproduct",
          element:<AddProduct/>
        }
      ]
    }
  ]);