import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditProfile = () => {
    let [editUser, setEditUser] = useState(null);

    let { editid } = useParams();
    console.log(editid);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${editid}`).then((resp) => {
            console.log(resp.data);
            setEditUser(resp.data);
        });
    }, []);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setEditUser({ ...editUser, [name]: value });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        let resp = await axios.put(
            `http://localhost:8080/users/${editid}`,
            editUser
        );
        console.log(resp.data);

        if (resp){
            toast.success("profile updated successfully");
            navigate(`/profile/${editid}`);
        }else{
            toast.error("updated failed");
        }
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>Username :</label>
                <input type="text" value={editUser?.username} name="username" onChange={handleChange} />
                <br />
                <br />

                <label>Email :</label>
                <input
                    type="text"
                    value={editUser?.email}
                    name="email"
                    onChange={handleChange}
                />{" "}
                <br />
                <br />

                <label>Password :</label>
                <input type="text" value={editUser?.password} name="password" onChange={handleChange} />
                <br />
                <br />

                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditProfile;
