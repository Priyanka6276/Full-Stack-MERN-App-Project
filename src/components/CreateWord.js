import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function CreateWord(){
    const [data, setData] = useState({ language:"", english:"", category:""})

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.language]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault()
        const word = {
            language: data.language,
            english: data.english,
            category: data.category,
        }
        console.log({ word })
        axios
        .post("http://localhost:3001/api/words", data)
        .then((res) => {
            setData({language:"", english:"", category:""})
            console.log(res.data.message)
        })
    }

    return(
        <section>
            <Link to="/vocab-list">
                <button> Back </button>
            </Link>
            <section>
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <label htmlFor="language">Word</label>
                    <input 
                        type="text"
                        name="language"
                        value={data.language}
                        onChange={handleChange}
                    />
                    <label htmlFor="english"> Defintion </label>
                    <input 
                        type="text"
                        name="english"
                        value={data.english}
                        onChange={handleChange}
                    />
                    <label htmlFor="category">Category</label>
                    <input 
                        type="text"
                        name="category"
                        value={data.category}
                        onChange={handleChange}
                    />
                    <button type="submit">Create Word</button>                
                </form>
            </section>
        </section>
    )
}