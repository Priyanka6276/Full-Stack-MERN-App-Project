import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import http from "../../lib/http"
import formatDate from "../../lib/formatDate"
import styles from "./NotebookList.module.css"


export default function NotebookList(props) {
    const [pages, setPages] = useState([""])
    useEffect(() => {
        async function fetchData() {
            const { data } = await http.get("/api/pages/notebook")
            setPages(data)
        }
        fetchData()
    }, [])

    const filteredData = pages.filter((page) => {
        if (props.input === "") {
            return page
        } else {
            return page.title.toLowerCase().includes(props.input) || page.tags.includes(props.input) 
        }
    })

    return (
        <div className={styles.WordListPage}>
            <div className={styles.vocabcontainer}>
                <ol className={styles.table}>
                    <div className={styles.word}>
                        <h2>Page</h2>
                        {
                            filteredData.map((page) => {
                                return (
                                    <Link to={`/notebook/${page._id}`} className={styles.link}>

                                        <h3>{page.title}</h3>

                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={styles.category}>
                        <h2>Tags</h2>
                        {
                            filteredData.map((page) => {
                                return (

                                    <h3> {page.tags} </h3>

                                )
                            })
                        }
                    </div>
                    <div className={styles.english}>
                        <h2>Date</h2>
                        {
                            filteredData.map((page) => {
                                return (

                                    <h3>{formatDate(page.created)}</h3>

                                )
                            })
                        }
                    </div>
                </ol>
            </div>
        </div>


    )
}