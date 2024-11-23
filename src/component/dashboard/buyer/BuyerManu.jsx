import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const BuyerManu = () => {
    return (
        <div>
            <li>
                <NavLink to="/dashboard/buyerhome">
                <FaHome></FaHome>
                Buyer Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/wishlist">
                <FaHome></FaHome>
                Wishlist</NavLink>
            </li>
            
        </div>
    );
};

export default BuyerManu;