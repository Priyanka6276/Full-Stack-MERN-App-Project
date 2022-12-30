import AddNewWord from "../components/AddNewWord"
import WordList from "../components/WordList"
import { useState } from "react"
import words from "../data"

export default function WordListPage () {
    const [vocabWord, setVocabWord] = useState(words)
    return(
        <div>
           <AddNewWord />
            <WordList vocabWord={vocabWord} />
        </div>
    )
}




// import { useState, useEffect, useRef } from "react"
// import * as wordsAPI from "../utilities/words-api"
// import { Link, useNavigate } from "react-router-dom"
// import CategoryList from "../components/CategoryList"
// import WordList from "../components/WordList"
// import UserLogOut from "../components/UserLogout"

// export default function WordListPage({ user, setUser }) {
//     const [wordItems, setWords] = useState([])
//     const [activeCat, setActiveCat] = useState("")
//     const categoriesRef = useRef([])
//     const navigate = useNavigate()

//     useEffect(function() {
//         async function getWords(){
//             const words = await wordsAPI.getAll()
//             categoriesRef.current = words.reduce((cats,word) => {
//                 const cat = word.category.name
//                 return cats.include(cat) ? cats : [...cats,cat]
//             }, [])
//             setWords(words)
//             setActiveCat(categoriesRef.current[0])
//         }
//         getWords()
//     },[])
//     return(
//         <main>
//             <aside>
//                 <CategoryList 
//                     categories={categoriesRef.current}
//                     setActiveCat={setActiveCat}
//                 />  
//             </aside>
//             <WordList
//                 wordItems={wordItems.filter(word => word.category.name === activeCat)}
//             />
//         </main>
//     )
// }

