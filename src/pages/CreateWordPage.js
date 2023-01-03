import { useNavigate, Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import http from "../lib/http"

export default function CreateWordPage () {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = async ({ language, english, category },e) => {
        e.preventDefault()
        const payload = {
            language,
            english,
            category
            
        }
        await http.post(`/api/words/vocab-list`, { data: payload })
        navigate(`/vocab-list`)
        console.log("hello")
    }


    return(
        <div>
            <h1>Create New Word</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Word</label>
                <input type="text" placeholder="Enter Word" {...register("language")} />
                <label>Defintion</label>
                <input type="text" placeholder="Enter defintion" {...register("english")} />
                <label>Category</label>
                <input type="text" placeholder="Enter Category Type" {...register("category")} />
                <button type="submit">Publish</button>
            </form>
            <Link to="/vocab-list">Back to Vocabulary List</Link>
        </div>
    )
}
