

export default function ShowWord ({word}){
    return(
        <div>
            <article>
                <h3>{word.language}</h3>
                <h4>{word.english}</h4>
                <h4>{word.category}</h4>
            </article>
        </div>

    )
}