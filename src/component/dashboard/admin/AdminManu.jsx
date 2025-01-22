import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const AdminManu = () => {
    return (
        <div className="">
              <li className="mb-2">
                <NavLink to="/dashboard/adminhome">
                <FaHome></FaHome>
                Admin Home</NavLink>
            </li>
            <li className="mb-2">
                <NavLink to="/dashboard/adminusers">
                <FaHome></FaHome>
                All Users</NavLink>
            </li>
            <li className="mb-2">
                <NavLink to="/dashboard/adminselar">
                <FaHome></FaHome>
                All Sellers</NavLink>
            </li>
            <li className="mb-2">
                <NavLink to="/dashboard/allproduct">
                <FaHome></FaHome>
                All Products</NavLink>
            </li>
            
        </div>
    );
};

export default AdminManu;