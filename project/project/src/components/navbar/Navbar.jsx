import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Fragment } from "react";
import toast from "react-hot-toast";

const Navbar = () => {

    let id = localStorage.getItem("userid");

    let navigate = useNavigate();

    let logout = () => {
        localStorage.removeItem("userid");
        navigate("/login");
        toast.success("logout successfully");
    };

    return (
        <nav id={styles.navbar}>
            <h3>Logo</h3>

            <ul>
                {
                    id ? <li onClick={logout} className={styles.logoutbtn}>
                        Logout
                    </li>:
                        <Fragment>
                            <li className={styles.loginbtn}>
                                <Link to="/login">Login</Link>
                            </li>
                            <li className={styles.signupbtn}>
                                <Link to="/">Signup</Link>
                            </li>
                        </Fragment>
                }
            </ul>
        </nav>
    );
};

export default Navbar;
