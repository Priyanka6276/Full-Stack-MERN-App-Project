import { useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import http from "../lib/http"

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

    const onSubmit = async ({ language, english, category }) => {
        const payload = {
            language,
            english,
            category
        }
        await http.put(`/api/words/vocab-list/${wordId}`, { data: payload })
        navigate(`/vocab-list/${wordId}`)
    }


    return (
        <>
            <h1>Edit Your Word</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Word</label>
                <input type="text" placeholder="Enter Word" {...register("language")} />
                <label>Defintion</label>
                <input type="text" placeholder="Enter Defintion" {...register("english")} />
                <label>Category</label>
                <input type="text" placeholder="Enter Category" {...register("category")} />
                <button type="submit">Save</button>
            </form>
            <Link to="/vocab-list">Back to Vocabulary List</Link>
        </>
    )
}