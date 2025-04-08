import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Fragment } from "react";
import toast from "react-hot-toast";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";

const Navbar = () => {

    let id = localStorage.getItem("userid");

    let navigate = useNavigate();

    let logout = () => {
        localStorage.removeItem("userid");
        navigate("/login");
        toast.success("logout successfully");
    };

    let deleteProfile = async() => {

        let permission = confirm("Abe BSDK mujhe delete karega?");
        if(permission){
            let resp = await axios.delete(`http://localhost:8080/users/${id}`);
            console.log(resp);

            if(resp){
                toast.success("successfully delete")
                localStorage.removeItem("userid");
                navigate("/");
            }else{
                toast.error("unable to delete")
            }
        }

    }

    return (
        <nav id={styles.navbar}>
            <h3>Logo</h3>

            <ul>
                {
                    id ? <div className={styles.hamburger}>
                        <RxHamburgerMenu />
                        <div className={styles.dropdown}>
                            <li onClick={logout}>logout</li>
                            <li><Link to={`/edit/${id}`}>update</Link></li>
                            <li onClick={deleteProfile}>delete</li>
                        </div>
                    </div> :
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
