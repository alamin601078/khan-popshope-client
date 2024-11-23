import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SellerManu = () => {
    return (
        <div>
             <li>
                <NavLink to="/dashboard/sellerhome">
                <FaHome></FaHome>
                Seller Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/addproduct">
                <FaHome></FaHome>
                Add Product</NavLink>
            </li>
          
        </div>
    );
};

export default SellerManu;