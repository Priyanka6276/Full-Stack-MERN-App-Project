import NavTop from '../components/NavTop'
import { useState } from "react"
import NewOrderPage from './NewOrderPage'
import AuthPage from './AuthPage'
import OrderHistoryPage from './OrderHistoryPage'
import NavBar from '../components/NavBar'
import SignUpPage from './SignUpPage'
import LoginPage from './LoginPage'
import DashboardPage from '../pages/DashboardPage'
import { Routes, Route } from "react-router-dom"
import { getUser } from "../utilities/users-service"


export default function HomePage(props) {
    const [user, setUser] = useState(getUser())
    return (
        <div>
            <NavTop />
            <h1>Home Page</h1>
            {
                user ? //if user is logged in go to New Order Page otherwise go to Auth Page
                    <>
                        <NavBar name={user.name} setUser={setUser} />
                        <Routes>
                            <Route path="/orders/new" element={<NewOrderPage />} />
                            <Route path="/orders" element={<OrderHistoryPage />} />
                            <Route path="/dashboard" element={<DashboardPage />} />
                        </Routes>
                    </>
                    :
                    // <AuthPage setUser={setUser}/>
                    <Routes>
                        <Route path="/user/login" element={<LoginPage />} />
                    </Routes>
            }
        </div>

    )
}