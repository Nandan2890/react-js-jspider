/* eslint-disable react/prop-types */
import UserCard from "./UserCard";
import styles from "./UserDisplay.module.css";

const UserDisplay = ({ user }) => {
    let { id, name: { firstname, lastname }, email, phone } = user;

    return (
        <div key={id} className={styles.userDisplay}>
            <UserCard firstname={firstname} lastname={lastname} email={email} phone={phone} />
        </div>
    )
}

export default UserDisplay;