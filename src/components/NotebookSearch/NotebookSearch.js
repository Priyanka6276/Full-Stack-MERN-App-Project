import { React, useState } from "react"
import { Link } from "react-router-dom"
import NotebookList from "../NotebookList/NotebookList"
import styles from "./NotebookSearch.module.css"


export default function NotebookSearch() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase);
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>Notebook Pages</h1>
                <Link to="/notebook/new-page">
                    <button>
                        Create New Page
                    </button>
                </Link>
            </div>
            <form className={styles.searchContainer}>
                <div className={styles.inputContainer}>
                        <input type="search" placeholder="search" onChange={inputHandler} className={styles.search}/>
                </div>
            </form>
            <div>
                <NotebookList input={inputText} />
            </div>
        </div>

    )
}
