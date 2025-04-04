import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav id={styles.navbar}>
            <h3>Logo</h3>

            <ul>
                <li className={styles.loginbtn}>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/">Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
