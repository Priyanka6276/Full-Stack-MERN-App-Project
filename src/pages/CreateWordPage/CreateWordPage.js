import { useNavigate, Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react"
import http from "../../lib/http"
import styles from "./CreateWordPage.module.css"

export default function CreateWordPage() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [words, setWords] = useState([""])

    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get("/api/words/vocab-list")
            setWords(data)
        }
        fetchData()
    }, [])

    const onSubmit = async ({ language, english, category, notes }, e) => {
        e.preventDefault()
        const payload = {
            language,
            english,
            category,
            notes
        }
        await http.post(`/api/words/vocab-list`, { data: payload })
        navigate(`/vocab-list`)
        console.log(payload)
    }


    return (
        <div className={styles.formContainer}>
            <div className={styles.top}>
                <Link to="/vocab-list" className={styles.link}>
                    <button className={styles.back}>
                        Back to Vocabulary List
                    </button>
                </Link>
                <h1>Create New Word</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form}>
                    <div className={styles.wordContainer}>
                        <label>Word</label>
                        <input type="text" placeholder="Enter Word" {...register("language")} />
                        <label>Defintion</label>
                        <input type="text" placeholder="Enter defintion" {...register("english")} />
                        <label>Category</label>
                        <input type="text" placeholder="Enter Category Type" {...register("category")} />
                    </div>
                    <div className={styles.notes}>
                        <label>Notes</label>
                        <textarea type="text" placeholder="Add Some Notes..." {...register("notes")} />
                    </div>
                </div>
                <div>
                    <button type="submit" className={styles.publish}>Publish</button>
                </div>
            </form>
        </div>
    )
}
