/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "./signup.module.css";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    let [signupUser, setSignupUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    let navigate = useNavigate();

    let handleChange = (e) => {
        let { name, value } = e.target;
        setSignupUser({
            ...signupUser,
            [name]: value,
        });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signupUser);

        try{
            let response = await axios.post("http://localhost:8080/users", signupUser);

            console.log(response);

            toast.success("Signup Successfully");

            navigate("/login");
        } catch(error){
            console.log("error while posting the signupuser")
            toast.error("Unable to Signup");
        }

        //clearing input field
        setSignupUser({username: "", email: "", password: ""})
    };

    return (
        <main id={style.signupcontainer}>
            <section>
                <article>
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login <br /> with your personal
                        info
                    </p>
                    <Link to={"/login"}>
                        <button>
                            LOG IN
                        </button>
                    </Link>
                </article>
                <article>
                    <h1>Create Account</h1>
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
                    <p>or use your email for registration</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="username"
                            value={signupUser.username}
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={signupUser.email}
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={signupUser.password}
                            onChange={handleChange}
                        />
                        <br />
                        <button type="submit">SIGN UP</button>
                    </form>
                </article>
            </section>
        </main>
    );
};

export default Signup;
