/* eslint-disable react/prop-types */
import styles from "./UserCard.module.css";

const UserCard = ({firstname, lastname, email, phone}) => {
    return (
        <div className={styles.card}>
            <h3>{firstname} {lastname}</h3>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserCard;