import { Component } from "react"
import { Link } from "react-router-dom"

export default class NotebookCard extends Component() {
    render(){
        const { page } = this.props
        return(
            <div>
                <h2>
                    <Link to={`/notebook/${page._id}`}>{page.title}</Link>
                </h2>
            </div>
        )


    }
}