import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <div>navber</div>
            <div className=" h-screen">{Outlet}</div>
            <div>footer</div>
        </div>
    );
};

export default MainLayout;