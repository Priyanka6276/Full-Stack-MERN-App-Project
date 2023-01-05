import { useParams, useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import http from "../../lib/http"
import styles from "./CreateNotebookPage.module.css"


export default function CreateNotebookPage() {
    const { id: pageId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = async ({ title, entry, category }) => {
        const payload = {
            title,
            category,
            entry,
        }
        await http.post(`/api/pages/notebook`, { data: payload })
        navigate(`/notebook`)

    }

    return (
        <>
            <div className={styles.top}>
                <Link to="/notebook" className={styles.link}>
                    <button className={styles.back}>
                        Back to Your Notebook
                    </button>
                </Link>
                <h1>Create Your Page</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form}>
                    <div className={styles.wordContainer}>
                        <label>Title</label>
                        <input type="text" placeholder="Enter Title" {...register("title")} />
                        <label>Category</label>
                        <input type="text" placeholder="Enter Category" {...register("category")} />
                    </div>
                    <div className={styles.notes}>
                        <label>Entry</label>
                        <textarea type="text" placeholder="Enter Entry" {...register("entry")} />
                    </div>
                </div>
                <div>
                    <button type="submit" className={styles.publish}>Save</button>
                </div>
            </form>
        </>
    )
}