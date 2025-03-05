import { useState } from "react";
import Nav from "./Nav";

const Cart = () => {

    let [items, setItems] = useState(0);

    let addItems = () => setItems(items+1);

    return(
        <div>
            <Nav props={items} />
            <h1>Cart Component</h1>
            <button onClick={addItems}>Add to Cart</button>
        </div>
    )
}

export default Cart;


//! props are used to share data from parent component to child component
//! parent component => child component not vice versa
//! whenever we sending the data the data send in form of object

