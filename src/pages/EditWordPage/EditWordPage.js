import { useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import http from "../../lib/http"
import styles from "./EditWordPage.module.css"

export default function EditWordPage() {
    const { id: wordId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get(`/api/words/vocab-list/${wordId}`)
            reset(data)
        }
        fetchData()
    }, [wordId, reset])

    const onSubmit = async ({ language, english, category, notes }) => {
        const payload = {
            language,
            english,
            category,
            notes
        }
        await http.put(`/api/words/vocab-list/${wordId}`, { data: payload })
        navigate(`/vocab-list/${wordId}`)
    }


    return (

        <div className={styles.formContainer}>
            <div className={styles.top}>
                <Link to="/vocab-list" className={styles.link}>
                    <button className={styles.back}>
                        Back to Vocabulary List
                    </button>
                </Link>
                <h1>Edit Your Word</h1>
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
                    <button type="submit" className={styles.publish}>Save</button>
                </div>
            </form>
        </div>

    )
}