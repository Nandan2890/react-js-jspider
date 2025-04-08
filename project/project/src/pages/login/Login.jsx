import React, { useState } from "react";
import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";
import { useApi } from "../../customHooks/CustomHooks";
import toast from "react-hot-toast";


const Login = () => {
    let [loginuser, setLoginuser] = useState({
        email: "",
        password: "",
    });

    // returns naviagte function, helps to navigate between components
    let navigate = useNavigate();

    let allSignupusers = useApi("http://localhost:8080/users");

    let handleChange = (e) => {
        let { name, value } = e.target;
        setLoginuser({ ...loginuser, [name]: value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginuser);

        let authUser = allSignupusers.find((ele) => {
            return ele.email === loginuser.email && ele.password === loginuser.password;
        })
        console.log(authUser)

        if(authUser) {
            // navigate Profile.jsx
            navigate(`/profile/${authUser.id}`);

            // authuser ID save localstorage
            localStorage.setItem("userid", authUser.id)

            toast.success("Login Successfully")

        }else{
            // navigate Signup.jsx
            navigate("/")

            toast.error("Login Failed")
        }
    };

    return (
        <main id={style.logincontainer}>
            <section>
                <article>
                    <h1>Hello, Friend</h1>
                    <p>
                        Enter your personal details and start <br /> journey with us
                    </p>
                    <Link to={"/"}>
                        <button>
                            Sign Up
                        </button>
                    </Link>
                </article>
                <article>
                    <h1>Sign in</h1>
                    <div className={style.iconscontainer}>
                        <span>
                            <FaFacebookF />
                        </span>
                        <span>
                            <FaGooglePlusG />
                        </span>
                        <span>
                            <FaLinkedinIn />
                        </span>
                    </div>
                    <p>or use your account</p>
                    <form onSubmit={handleSubmit}>
                        <br />
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={loginuser.email}
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={loginuser.password}
                            onChange={handleChange}
                        />
                        <br />
                        <p>Forgot your password?</p>
                        <button type="submit">SIGN IN</button>
                    </form>
                </article>
            </section>
        </main>
    );
};

export default Login;
