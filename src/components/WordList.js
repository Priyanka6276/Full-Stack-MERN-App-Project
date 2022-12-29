import Word from "./Word"

export default function WordList({ wordItems }) {
    const words = wordItems.map(word => 
        <Word 
            key={word._id}
            wordItem = {word}
        />    
    )
    return (
        <main>
            {words}
        </main>
    )
}