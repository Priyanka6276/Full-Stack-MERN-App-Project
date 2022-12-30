export default function AddNewWord() {
    return (
        <div>
            <fieldset>
                <legend>Create A New Word</legend>
                <label>Word: <input type="text" name="language" placeholder="enter word" /></label>
                <label>Defintion: <input type="text" name="language" placeholder="enter defintion" /></label>
                <label>Category: <input type="text" name="category" placeholder="enter category name" /></label>
            </fieldset>
            <input type="submit"/>
        </div>
    )
}