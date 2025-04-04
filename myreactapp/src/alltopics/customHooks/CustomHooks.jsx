import axios from "axios"
import { useEffect, useState } from "react";

export let useAPI = (api_url) => {

    let [api, setApi] = useState(null);

    let getData = async (url) => {
        let response = await axios.get(url);
        setApi(response.data);
    }

    useEffect(()=>{
        getData(api_url);
    }, [])

    return api;
}