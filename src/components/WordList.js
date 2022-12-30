import { Link } from "react-router-dom"
import ShowWord from "./ShowWord"

export default function WordList ({vocabWord}){
    
    return(
        <div>
            {vocabWord.map(word => {
                return (
                    <ShowWord word={word} />
                )
            })}
        </div>
    )
}