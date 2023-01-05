import { React, useState } from "react"
import { Link } from "react-router-dom"
import WordList from "../WordList/WordList"
import styles from "./SearchBar.module.css"


export default function SearchBar() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase);
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>Vocabulary List</h1>
                <Link to="/vocab-list/create-word">
                    <button>
                        Create New Word
                    </button>
                </Link>
            </div>
            <form className={styles.searchContainer}>
                <div className={styles.inputContainer}>
                        <input type="search" placeholder="search" onChange={inputHandler} className={styles.search}/>
                </div>
            </form>
            <div>
                <WordList input={inputText} />
            </div>
        </div>

    )
}


