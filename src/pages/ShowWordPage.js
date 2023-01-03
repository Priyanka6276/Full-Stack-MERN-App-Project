import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import http from "../lib/http"


export default function ShowWordPage() {
    const { id: wordId } = useParams()
    const [word, setWord] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get(`/api/words/vocab-list/${wordId}`)
            setWord(data)
        }
        fetchData()
    }, [wordId])

    const deleteWord = async () => {
        await http.delete(`/api/words/vocab-list/${wordId}`)
        navigate("/vocab-list")
    }

    return(
        <>
            <h1>{word.language}</h1>
            <div>{word.english}</div>
            <div>
                <Link to={`/vocab-list/${wordId}/edit`}>Edit</Link>
            </div>
            <button onClick={deleteWord}>Delete</button>
            <Link to="/notebook"></Link>
        </>
    )
}


