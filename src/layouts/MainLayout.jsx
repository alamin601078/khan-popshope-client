import { Outlet } from "react-router-dom"
import Navber from './../component/share/Navber';
import Footer from './../component/share/Footer';

const MainLayout = () => {
    return (
        <div>
            <div><Navber/></div>
            <div className=""><Outlet/></div>
            <div><Footer/></div>
        </div>
    );
};

export default MainLayout;