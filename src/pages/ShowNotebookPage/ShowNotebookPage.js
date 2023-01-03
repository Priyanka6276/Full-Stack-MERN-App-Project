import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import http from "../../lib/http"
import formatDate from "../../lib/formatDate"

export default function ShowNotebookPage() {
    const { id: pageId } = useParams()
    const [page, setPage] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get(`/api/pages/${pageId}`)
            setPage(data.data.page)
        }
        fetchData()
    }, [pageId])

    const deletePage = async () => {
        await http.delete(`/api/pages/${pageId}`)
        navigate("/notebook")
    }

    return(
        <>
            <h1>{page.title}</h1>
            <div>{formatDate(page.createdAt)}</div>
            {page.tags?.map((tag) => <span>{tag}</span>)}
            <div>{page.entry}</div>
            <div>
                <Link to={`/notebook/${pageId}/edit`}>Edit</Link>
            </div>
            <button onClick={deletePage}>Delete</button>
            <Link to="/notebook"></Link>
        </>
    )
}


