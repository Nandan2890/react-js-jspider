import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./router/Router";

const App = () => {
  return (
    <RouterProvider router={myRoutes}/>
  )
}

export default App;