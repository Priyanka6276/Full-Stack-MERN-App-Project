import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import http from "../lib/http"


export default function WordListPage() {
    const [words, setWords] = useState([""])
    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get("/api/words")
            setWords(data.data.words)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Vocabulary List</h1>
            <Link to="/vocab-list/create-word">
                <button>
                    Create New Word
                </button>
            </Link>
            <div>
                <ol>
                    {
                        words.map((word) => {
                            return (
                                <div>
                                    <Link to={`/vocab-list/${word._id}`}>{word.language}</Link>
                                </div>

                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}


// import { useState, useEffect } from "react"
// import axios from "axios"
// import { Link } from "react-router-dom"
// import UpdateWord from "./UpdateWord"


// function WordCard({ data, handleEdit, handleDelete }) {
//     const { _id, language, english, category } = data
//     return (
//         <li key={_id}>
//             <div>
//                 <h3>{language}</h3>
//                 <p>{english}</p>
//                 <p>{category}</p>
//             </div>
//             <div>
//                 <button name={_id} onClick={handleEdit}>Edit</button>
//                 <button name={_id} onClick={handleDelete}>Delete</button>
//             </div>
//         </li>
//     )
// }

// export default function ShowWordList() {

//     const [words, setWords] = useState([
//         language="",
//         english="",
//         category=""
//     ])
//     const [open, setOpen] = useState(false)
//     const [id, setId] = useState("")
//     const [update, setUpdate] = useState(false)

//     useEffect(
//         function () {
//             axios
//                 .get("http://localhost:3001/api/words")
//                 .then((res) => {
//                     console.log(res.data)
//                     setWords(res.data.words)
//                 })
//                 .catch((err) => {
//                     console.log(err.message)
//                 })
//         },
//         [update]
//     )

//     function handleEdit(e) {
//         setId(e.target.language)
//         setOpen(true)
//     }

//     function handleUpdate() {
//         console.log("update:", update, !update)
//         setUpdate(!update)
//     }


//     function handleDelete(e) {
//         axios.delete(`http://localhost:3001/api/words/${e.target.language}`)
//         setWords((data) => {
//             return data.filter((words) => words._id !== e.target.language)
//         })
//     }

//     function handleClose() {
//         setId("")
//         setOpen(false)
//     }


//     return (

//         <section>
//             <Link to="/vocab-list/create-word">
//                 <button>Create New Word</button>
//             </Link>
//             <section>
//                 <h1>Vocab List</h1>
//                 <ul >
//                     {words.map((data) => (
//                         <WordCard
//                             data={data}
//                             handleEdit={handleEdit}
//                             handleDelete={handleDelete}
//                         />
//                     ))}
//                 </ul>
//             </section>
//             {open ? (
//                 <section>
//                     <div>
//                         <p onClick={handleClose}>
//                             &times
//                         </p>
//                         <UpdateWord
//                             _id={id}
//                             handleClose={handleClose}
//                             handleUpdate={handleUpdate}
//                         />
//                     </div>
//                 </section>
//             ) : (
//                 ""
//             )
//             }
//         </section>
//     )
// }