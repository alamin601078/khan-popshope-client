import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hocks/useAuth";


const Protuct = ({children}) => {
    const {user,loding} = useAuth();
    const location = useLocation();
    console.log(user)

    if (loding){
        return <h1 className="text-4xl">Loading</h1>
    }

    if(!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }
    return (
        <div>
           {children}
        </div>
    );
};

export default Protuct;