import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import http from "../../lib/http"
import styles from "./FlashCard.module.css"


export default function FlashCard() {
    // const { id: wordId } = useParams()
    // const [word, setWord] = useState({})
    // const navigate = useNavigate()
    // useEffect(() => {
    //     async function fetchData() {
    //         const { data } = await http.get(`/api/words/vocab-list/`)
    //         setWord(data)
    //     }
    //     fetchData()
    // }, [wordId])

    // let randomWord = word[Math.floor(Math.random()*word.length)]
    // console.log(randomWord)

    // return(
    //     <div>
    //         {randomWord.language}
    //         {randomWord.english}
    //     </div>
    // )

    // const [front, changeSide] = useState(true)
    // function handleClick(){
    //     setText(firstState => {
    //         if ( firstState === frontSide) {
    //             return backSide
    //         } else {
    //             return frontSide
    //         }
    //     })
    // }
    // const text = front ? frontSide : backSide
    // return(
    //     <div onClick={handleClick}>
    //         <p>{text}</p>
    //     </div>
    // )
    const { id: wordId } = useParams()
    const [word, setWord] = useState({})
    const [ flip, setFlip ] = useState (false)
    const [words, setWords] = useState([""])
    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get("/api/words/vocab-list")
            setWords(data) 
        }
        fetchData()
    }, [])

    return(
        <div 
            className={`card ${flip ? "flip" : ""}`}
            onClick={() => setFlip(!flip)}>
                 {
                        words.map((word) => {
                            return (
                                <div>
                                    {/* <div className={styles.front}>
                                        {word.language}
                                    </div>
                                    <div>
                                        {word.english}
                                    </div> */}
                                    {flip ? word.english : word.language}

                                </div>
                            )
                        }) 
                    }   
        </div>
    )
}

// export default function FlashCard ({ flashcard }) {
//     const [ words, setWords ] = useState("")
//     const [ defintion, setDefinition ] = useState("")

//     const [ flip, setFlip ] = useState(false)

//     useEffect(() => {
//         async function fetchData() {
//             const { data } = await http.get("/api/words/vocab-list")
//             data.map( dat => {console.log(dat.language)})
            
//             setWords(data)
//         }
//         fetchData()
//     }, [])

  

    
//     return(
//         <div>
//             <h1>Test Your Knowledge!</h1>
//             <Link to="/vocab-list">
//                 <button>
//                     Back to Vocabulary List
//                 </button>
//             </Link>
//             <div>
            
//             </div>
//         </div>
//     )
// }