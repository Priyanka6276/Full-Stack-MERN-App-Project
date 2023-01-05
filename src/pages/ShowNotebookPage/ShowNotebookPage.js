import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import http from "../../lib/http"
import formatDate from "../../lib/formatDate"
import styles from "./ShowNotebookPage.module.css"




export default function ShowNotebookPage() {
    const { id: pageId } = useParams()
    const [page, setPage] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get(`/api/pages/notebook/${pageId}`)
            setPage(data)
        }
        fetchData()
    }, [pageId])

    const deletePage = async () => {
        await http.delete(`/api/pages/notebook/${pageId}`)
        navigate("/notebook")
    }

    return (
        <>
            <Link to={`/notebook`} className={styles.link}>
                <button className={styles.back}>
                    Back To Your Pages
                </button>
            </Link>
            <div className={styles.container}>
                    <div className={styles.bottomContainer}>
                        <div className={styles.tag}>
                            <h1>{page.title}</h1>
                            <div className={styles.smallerText}>
                            <h4>{formatDate(page.created)}</h4>
                            <h4 className={styles.word}> Category: {page.category}</h4>
                            </div>
                        </div>
                        <div className={styles.notes}>{page.entry}</div>
                    </div>

            </div>
            <div className={styles.buttons}>
                <Link to={`/notebook/${pageId}/edit`} className={styles.link}>
                    <button className={styles.edit}>
                        Edit Page
                    </button>
                </Link>
                <button onClick={deletePage} className={styles.delete}>Delete Page</button>
            </div>
        </>
    )
}


