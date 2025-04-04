import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Profile from "./pages/Profile"
import Services from "./pages/Services"
import Cart from "./pages/Cart"
import Layout from "./pages/Layout"

const Routing2 = () => {
    let myRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Profile />
                },
                {
                    path: "/services",
                    element: <Services />
                },
                {
                    path: "/cart",
                    element: <Cart />
                }
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={myRoutes} />
        </div>
    )
}

export default Routing2
