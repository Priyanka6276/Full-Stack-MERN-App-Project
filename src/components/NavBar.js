import { Link } from "react-router-dom"
import * as userService from "../utilities/users-service"

export default function NavBar({ name, setUser }) {
    // Add the following function
    function handleLogout() {
        // Delegate to the users-service
        userService.logOut()
        // Update state will also cause a re-render
        setUser(null)
    }
    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            &nbsp; | &nbsp;
            <Link to="/vocab-list">Vocab List</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogout}>Log Out</Link>
            &nbsp; | &nbsp;
            <h2>Welcome {name} </h2>
        </nav>
    )
}