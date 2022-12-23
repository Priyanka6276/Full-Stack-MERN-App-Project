import { useEffect, useState } from "react"
import  { Navigate } from "react-router-dom"


// export default function DashboardPage (props){
//     const [authenticated, setauthenticated] = useState(null)
//     useEffect(() => {
//         const loggedInUser = localStorage.getItem("authenticated")
//         if(loggedInUser) {
//             setauthenticated(loggedInUser)
//         }
//     }, [])
//     if(!authenticated){
//         return <Navigate replace to="/user/login" />
//     } else {
//         return(
//             <div>Dashboard</div>
//         )
//     }
    
// }

export default function DashboardPage (props) {
    return (
        <div>
            Dashboard
        </div>
    )
}