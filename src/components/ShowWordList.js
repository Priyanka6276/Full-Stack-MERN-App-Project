import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


function WordCard({ data }) {
    const {_id, language, english, category } = data
    return(
        <li key={_id}>
            <div>
                <h3>{language}</h3>
                <p>{english}</p>
                <p>{category}</p>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    )
}

export default function ShowWordList(){
    
    const [words, setWord] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:3001/api/words")
        .then((res) => {
            console.log(res.data)
            setWord(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    
    return(
        
        <section>
            <Link to="/create-word">
                <button>Create New Word</button>
            </Link>
            <section>
                <h1>Vocab List</h1>
                
                    {

                        words.map((data) => {
                        return(
                            <WordCard data={data} />
                            
                        )
                    })}
                
            </section>
        </section>
    )
}