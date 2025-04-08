import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Layout from "../pages/Layout/Layout";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import EditProfile from "../pages/editprofile/EditProfile";

export let myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile/:id",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                )
            },
            {
                path: "/edit/:editid",
                element: (
                    <PrivateRoute>
                        <EditProfile />
                    </PrivateRoute>
                )
            }
        ],
    }
]);