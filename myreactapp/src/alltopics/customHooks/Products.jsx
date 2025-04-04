import { useAPI } from "./CustomHooks";

const Products = () => {

    let productData = useAPI("http://fakestoreapi.com/products");
    let userData = useAPI("https://api.github.com/users")

    console.log(productData)
    console.log(userData)

    return (
        <div>
            <h1>Products</h1>
        </div>
    );
}

export default Products