import { NavLink } from "react-router-dom";
import styles from "./Navbar2.module.css";

const Navbar2 = () => {
    return (
        <>
            <nav>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? styles.active : "")}
                        to="/services"
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? styles.active : "")}
                        to="/"
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? styles.active : "")}
                        to="/cart"
                    >
                        Cart
                    </NavLink>
                </li>
            </nav>
        </>
    );
};

export default Navbar2;

// outlet is a component which is used to render the children component
