import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import http from "../../lib/http"
import styles from "./ShowWordPage.module.css"


export default function ShowWordPage() {
    const { id: wordId } = useParams()
    const [word, setWord] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get(`/api/words/vocab-list/${wordId}`)
            setWord(data)
        }
        fetchData()
    }, [wordId])

    const deleteWord = async () => {
        await http.delete(`/api/words/vocab-list/${wordId}`)
        navigate("/vocab-list")
    }

    return (
        <>
            <Link to={`/vocab-list`} className={styles.link}>
                <button className={styles.back}>
                    Back To Your List
                </button>
            </Link>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1>{word.language}</h1>
                    <div className={styles.tag}>
                        <h3>Defintion:</h3>
                        <h3 className={styles.word}>{word.english}</h3>
                    </div>
                    <div className={styles.tag}>
                        <h3>Category:</h3>
                        <h3 className={styles.word}>{word.category}</h3>
                    </div>
                </div>
                <div className={styles.notes}>{word.notes}</div>
            </div>
            <div className={styles.buttons}>
                <Link to={`/vocab-list/${wordId}/edit`} className={styles.link}>
                    <button className={styles.edit}>
                        Edit Word
                    </button>
                </Link>
                <button onClick={deleteWord} className={styles.delete}>Delete Word</button>
            </div>
            
        </>

    )
}


