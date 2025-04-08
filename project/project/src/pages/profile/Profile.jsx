import { useParams } from "react-router-dom"
import { useApi } from "../../customHooks/CustomHooks"

const Profile = () => {

    let {id} = useParams() //used to get params from current url, returns an object
    console.log(id)

    let user = useApi(`http://localhost:8080/users/${id}`)
    console.log(user)

    return (
        <div>
            <h1>Profile Page {user?.username}</h1>
        </div>
    )
}

export default Profile
