export default function VocabListPage (props) {
    const { vocab } = this.props
    return(
        <div>
            <a href="/vocab/new"><button>Create New Word</button></a>
            {
                vocab.map((voc) => {
                    return(
                        <div>
                            <a href={`/vocab/${voc.id}`}><h3>{voc.language}</h3></a>
                            <h4>Defintion: {voc.english}</h4>
                            <h4>Category: {voc.category}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}