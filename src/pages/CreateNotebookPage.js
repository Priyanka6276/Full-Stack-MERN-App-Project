import { useNavigate, Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import http from "../lib/http"

export default function CreateNotebookPage () {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = async ({ title, entry, tags }) => {
        const payload = {
            title,
            tags: tags.split(",").map((tag) => tag.trim()),
            entry,
        }
        await http.put(`/api/pages`, { data: payload })
        navigate(`/notebook/pages/:id`)
    }

    return(
        <div>
            <h1>Create New Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
                <input type="text" placeholder="Enter Title" {...register("title")} />
                <label>Tags</label>
                <input type="text" placeholder="Enter tags" {...register("tags")} />
                <p>Separate tags with ","</p>
                <label>Entry</label>
                <input type="text" placeholder="Enter Entry" {...register("entry")} />
                <button type="submit">Publish</button>
            </form>
            <Link to="/notebook">Back to Notebook</Link>
        </div>
    )
}