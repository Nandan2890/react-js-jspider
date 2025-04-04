import { Outlet } from "react-router-dom";
import Navbar2 from "../Navbar2";

const Layout = () => {
    return (
        <div>
            <Navbar2 />
            <Outlet />
            {/* it is used to render children routes on UI */}
        </div>
    )
};

export default Layout;