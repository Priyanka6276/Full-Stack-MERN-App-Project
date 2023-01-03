import { Link } from "react-router-dom"
import styles from "./NavTop.module.css"

export default function NavTop() {
    return (
        <nav className={styles.NavBar}>
            <div className={styles.links}>
                <Link to="/user/signup" className={styles.link}>Sign Up</Link>
                &nbsp; | &nbsp;
                <Link to="/user/login" className={styles.link}>Login</Link>
            </div>

        </nav>

    )
}