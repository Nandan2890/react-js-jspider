import { useState } from "react";
import { useEffect } from "react";

const Fetch = () => {

    let [photos, setPhotos] = useState(null);

    async function getPhotos(){
        let response = await fetch("https:fakestoreapi.com/products");
        let data = await response.json();
        console.log(data);
        setPhotos(data);
    }

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <div>
            <h1>Fetch API using useEffect</h1>
            {
                photos?.map((ele) => {
                    console.log(ele);

                    let {id, image, title, rating:{rate, count}} = ele;

                    return (
                        <div key={id}>
                            <img src={image} alt="title" height={100} width={100} />
                            <h3>{title}</h3>
                            <p>{rate}</p>
                            <p>{count}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Fetch;