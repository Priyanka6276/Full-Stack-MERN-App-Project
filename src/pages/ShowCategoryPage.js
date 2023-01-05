import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import http from "../../lib/http"
import styles from "./ShowWordPage.module.css"


export default function ShowCategoryPage() {
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
    

}