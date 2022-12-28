export default function NewVocabPage(props){
    return(
        <div>
            <form action="/vocab" method="POST">
                <fieldset>
                    <legend>Create New Word</legend>
                    <label>Word:<input type="text" name="language" placeholder="enter word" /></label>
                    <label>Defintion:<input type="text" name="english" placeholder="enter defintion"/></label>
                    <label>Category:<input type="text" name="category" placeholder="enter category name"/></label>
                </fieldset>
                <input type="submit" value="Create New Word" />
            </form>
        </div>
    )
}