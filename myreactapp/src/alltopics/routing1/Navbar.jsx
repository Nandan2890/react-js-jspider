import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contacts">Contact</Link>
            </li>
            <hr />
        </div>
    )
}

export default Navbar
