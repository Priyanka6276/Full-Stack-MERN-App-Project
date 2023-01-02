import { useState } from "react"
import axios from "axios"

export default function UpdateWord({ _id, handleClose, handleEdited }){
    const [data, setData] = useState({language:"", english:"", category:""})

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ _id }, { data });

        axios
            .put(`http://localhost:3001/api/words/${_id}`, data)
            .then((res) => {
                setData({ language:"", english:"", category:"" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Failed to update todo");
                console.log(err.message);
            });
    }
    
    return(
        <form
            onSubmit={(e) => {
                handleSubmit(e)
                handleEdited()
                handleClose()
            }}
        >
            <label htmlFor="language">Word</label>
            <input
                type="text"
                name="language"
                onChange={handleChange}
            />
            <label htmlFor="english">Defintion</label>
            <input
                type="text"
                name="english"
                onChange={handleChange}
            />
            <label htmlFor="category">Category</label>
            <input
                type="text"
                name="category"
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}