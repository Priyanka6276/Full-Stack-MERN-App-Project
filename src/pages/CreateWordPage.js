import { useNavigate, Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import http from "../lib/http"

export default function CreateWordPage () {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = async ({ language, english, category }) => {
        const payload = {
            language,
            english,
            category
            
        }
        await http.put(`/api/words`, { data: payload })
        navigate(`/vocab-list/:id`)
    }

    return(
        <div>
            <h1>Create New Word</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Word</label>
                <input type="text" placeholder="Enter Word" {...register("word")} />
                <label>Defintion</label>
                <input type="text" placeholder="Enter defintion" {...register("english")} />
                <label>Category</label>
                <input type="text" placeholder="Enter Category Type" {...register("category")} />
                <button type="submit">Publish</button>
            </form>
            <Link to="/notebook">Back to Vocabulary List</Link>
        </div>
    )
}
