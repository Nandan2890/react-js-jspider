import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

const Routing1 = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Routing1;

// 1.BrowseRouter
// 2. CreateBrowserRouter
