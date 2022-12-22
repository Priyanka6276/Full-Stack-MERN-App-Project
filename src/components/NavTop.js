import { Link } from "react-router-dom"

export default function NavTop () {
    return(
       <nav>
        <Link to="/user/signup">Sign Up</Link>
        &nbsp;
        <Link to="/user/login">Login</Link>
       </nav>

    )
}