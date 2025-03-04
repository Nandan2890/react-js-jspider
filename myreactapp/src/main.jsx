import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <App />
);



//! Fragment is used to wrap the element as a parent element without creating an extra node in dom tree
//? way1: <></>
//? way2: <React.Fragment></React.Fragment>

//!<App />: Self closing tag