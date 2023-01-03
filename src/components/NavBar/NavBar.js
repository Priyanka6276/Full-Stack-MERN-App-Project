import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import styles from "./NavBar.module.css"



export default function NavBar({ name, setUser }) {
    // Add the following function
    function handleLogout() {
        // Delegate to the users-service
        userService.logOut()
        // Update state will also cause a re-render
        setUser(null)
    }
    return (
        <nav className={styles.NavBar}>
            <div className={styles.links}>
            <Link to="/dashboard" className={styles.link}>Dashboard</Link>
            &nbsp; | &nbsp;
            <Link to="/vocab-list" className={styles.link}>Vocab List</Link>
            &nbsp; | &nbsp;
            <Link to="/Notebook" className={styles.link}>Notebook</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogout} className={styles.link}>Log Out</Link>
            </div>
            <div className={styles.name}>
                <h2>{name}</h2>
            </div>
        </nav>
    )
}