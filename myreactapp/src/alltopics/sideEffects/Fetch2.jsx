import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./Fetch2.module.css";
import UserNav from "./Profile/UserNav";
import UserDisplay from "./Profile/UserDisplay";

const Fetch2 = () => {

    let [users, setUsers] = useState(null);

    let getUsers = async () => {
        let { data: { users } } = await axios.get("https://fakestoreapi.in/api/users");
        // console.log(users)
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className={styles.container}>
            <UserNav />
            <div className={styles.grid}>
                {
                    users?.map((ele) => (
                        <UserDisplay key={ele.id} user={ele} />
                    ))
                }
            </div>
        </div>
    )
}

export default Fetch2;


