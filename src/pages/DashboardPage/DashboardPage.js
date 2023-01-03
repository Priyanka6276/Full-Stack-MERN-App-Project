import { Link } from "react-router-dom"
import styles from "./Dashboard.module.css"

export default function DashboardPage(props) {
    return (
        <div className={styles.DashboardPage}>
            <div className={styles.vocabulary}>
                <Link to="/vocab-list">
                    <h3>Vocabulary List</h3>
                </Link>
            </div>
            <div className={styles.notebook}>
                <Link to="/notebook">
                    <h3>Notebook</h3>
                </Link>
            </div>
        </div>
    )
}