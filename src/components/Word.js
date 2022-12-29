export default function Word({ word }){
    return(
        <div>
            <h3>{word.language}</h3>
            <h4>{word.english}</h4>
            <h4>{word.category}</h4>
        </div>
    )
}