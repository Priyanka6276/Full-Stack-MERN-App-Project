import { useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import http from "../../lib/http"
import styles from "./EditNotebookPage.module.css"

export default function EditNotebookPage() {
    const { id: pageId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get(`/api/pages/notebook/${pageId}`)
            reset(data)
        }
        fetchData()
    }, [pageId, reset])

    const onSubmit = async ({ title, entry, category}) => {
        const payload = {
            title,
            category,
            entry,
        }
        await http.put(`/api/pages/notebook/${pageId}`, { data: payload })
        navigate(`/notebook/${pageId}`)
    }


    return (
        <>
            <div className={styles.top}>
                <Link to="/notebook" className={styles.link}>
                    <button className={styles.back}>
                        Back to Your Notebook
                    </button>
                </Link>
                <h1>Edit Your Page</h1>
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