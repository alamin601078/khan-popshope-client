import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const AdminManu = () => {
    return (
        <div>
              <li>
                <NavLink to="/dashboard/adminhome">
                <FaHome></FaHome>
                Admin Home</NavLink>
            </li>
            
        </div>
    );
};

export default AdminManu;