import { Link } from "react-router-dom"
import styles from "./Dashboard.module.css"

export default function DashboardPage(props) {
    return (
        <div className={styles.DashboardPage}>
            <div className={styles.vocabulary}>
                <Link to="/vocab-list" className={styles.link}>
                    <h1>Vocabulary List</h1>
                </Link>
            </div>
            <div className={styles.notebook}>
                <Link to="/notebook" className={styles.link}>
                    <h1>Notebook</h1>
                </Link>
            </div>
        </div>
    )
}