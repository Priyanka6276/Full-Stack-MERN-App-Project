import { useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import http from "../lib/http"

export default function EditNotebookPage() {
    const { id: pageId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get(`/api/pages/${pageId}`)
            reset(data.data.page)
        }
        fetchData()
    }, [pageId, reset])

    const onSubmit = async ({ title, entry, tags }) => {
        const payload = {
            title,
            tags: tags.split(",").map((tag) => tag.trim()),
            entry,
        }
        await http.put(`/api/pages/${pageId}`, { data: payload })
        navigate(`/notebook/pages/${pageId}`)
    }


    return (
        <>
            <h1>Edit Your Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Title</label>
                <input type="text" placeholder="Enter Title" {...register("title")} />
                <label>Tags</label>
                <input type="text" placeholder="Enter tags" {...register("tags")} />
                <p>Separate tags with ","</p>
                <label>Entry</label>
                <input type="text" placeholder="Enter Entry" {...register("entry")} />
                <button type="submit">Save</button>
            </form>
            <Link to="/notebook">Back to Notebook</Link>
        </>
    )
}