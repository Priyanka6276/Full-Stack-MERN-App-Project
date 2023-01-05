import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import http from "../../lib/http"
import styles from "./WordList.module.css"


export default function WordList(props) {
    const [words, setWords] = useState([""])

    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get("/api/words/vocab-list")
            setWords(data)
        }
        fetchData()
    }, [])

    const filteredData = words.filter((word) => {
        if (props.input === "") {
            return word
        } else {
            return word.english.toLowerCase().includes(props.input) || word.category.toLowerCase().includes(props.input) || word.language.toLowerCase().includes(props.input)
        }
    })

    return (
        <div className={styles.WordListPage}>
            <div className={styles.vocabcontainer}>
                <ol className={styles.table}>
                    <div className={styles.word}>
                        <h2>Word</h2>
                        {
                            filteredData.map((word) => {
                                return (
                                    <Link to={`/vocab-list/${word._id}`} className={styles.link}>

                                        <h3>{word.language}</h3>

                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={styles.english}>
                        <h2>Defintion</h2>
                        {
                            filteredData.map((word) => {
                                return (

                                    <h3>{word.english}</h3>

                                )
                            })
                        }
                    </div>
                    <div className={styles.category}>
                        <h2>Category</h2>
                        {
                            filteredData.map((word) => {
                                return (

                                    <h3>{word.category}</h3>

                                )
                            })
                        }

                    </div>
                </ol>
            </div>
        </div>



    )
        ;
    // const [searchInput, setSearchInput] = useState("")
    // const [filteredData, setWords] = useState([""])

    // useEffect(() => {
    //     async function fetchData() {
    //         const { data } = await http.get("/api/words/vocab-list")
    //         setWords(data)
    //     }
    //     fetchData()
    // }, [])

    // function handleChange(e){
    //     e.preventDefault()
    //     setSearchInput(e.target.value)
    // }

    // if(searchInput.length > 0){
    //     words.filter((word) => {
    //         return word.english.match(searchInput)
    //     })
    // }

    // return(
    //     <div>
    //         <input type="search" placeholder="search" onChange={handleChange} value={searchInput}/>
    //         <table>
    //             <tr>
    //                 <thead>Word</thead>
    //                 <thead>English</thead>
    //                 <thead>Category</thead>
    //             </tr>
    //             { words.map((word) => {
    //                 <div>
    //                     <tbody>{word.language}</tbody>
    //                     <tbody>{word.english}</tbody>
    //                     <tbody>{word.category}</tbody>
    //                 </div>
    //             })}
    //         </table>
    //     </div>

    // )
}