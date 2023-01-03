import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import http from "../lib/http"


export default function ShowWordPage() {
    const { id: wordId } = useParams()
    const [word, setWord] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get(`/api/words/${wordId}`)
            setWord(data.data.word)
        }
        fetchData()
    }, [wordId])

    const deleteWord = async () => {
        await http.delete(`/api/words/${wordId}`)
        navigate("/vocab-list")
    }

    return(
        <>
            <h1>{word.title}</h1>
           
            {word.tags?.map((tag) => <span>{tag}</span>)}
            <div>{word.entry}</div>
            <div>
                <Link to={`/vocab-list/${wordId}/edit`}>Edit</Link>
            </div>
            <button onClick={deleteWord}>Delete</button>
            <Link to="/notebook"></Link>
        </>
    )
}


