import styles from "./UserNav.module.css";

const UserNav = () => {
    return(
        <div className={styles.nav}>
            <h3>Logo</h3>
            <div className={styles.navOptions}>
                <button className={styles.navButton}><a>Home</a></button>
                <button className={styles.navButton}><a>Login</a></button>
                <button className={styles.navButton}><a>Signup</a></button>
            </div>
        </div>
    )
}

export default UserNav;