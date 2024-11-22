import { NavLink, Outlet } from "react-router-dom";
 import {   FaHome ,FaTrademark } from "react-icons/fa";
import useRole from "../../hocks/useRole";
import AdminManu from "./admin/AdminManu";
import BuyerManu from "./buyer/BuyerManu";
import SellerManu from "./seller/SellerManu";

const Dashbard = () => {
    const {role }= useRole();  
    console.log(role)


   
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-opacity-30  bg-black">
            <ul className="menu p-4">
                
                { role ==='admin'&& <AdminManu/>}
                { role ==='trainer'&& <SellerManu/>}
                { role ==='buyer'&& <BuyerManu/>}

                <div className="divider"></div>
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>
               
                <li>
                    <NavLink to="/product">
                    <FaTrademark/>
                    Product</NavLink>
                </li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet/>
        </div>
    </div>
    );
};

export default Dashbard;