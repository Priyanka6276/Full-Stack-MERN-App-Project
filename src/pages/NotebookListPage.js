import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import http from "../lib/http"
import formateDate from "../lib/formatDate"

export default function NotebookListPage (){
    const [pages, setPages] = useState([])
    useEffect(() => {
        async function fetchData(){
            const { data } = await http.get("/api/pages")
            setPages(data.data.pages)
        }
        fetchData()
    }, [])

    return(
        <div>
            <h1>Notebook Pages</h1>
            <Link to="/notebook/new-page">Create A New Page</Link>
            <div>
                <ol>
                    {
                        pages.map((page) => {
                            return(
                                <div>
                                    <Link to={`/notebook/${page._id}`}>{page.title}</Link>
                                    <span>{formateDate(page.createdAt)}</span>
                                </div>
                                
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}