import './App.css'
import { useState } from "react"
import NewOrderPage from './pages/NewOrderPage'
import AuthPage from './pages/AuthPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import { Routes, Route } from "react-router-dom"
import { getUser } from "./utilities/users-service"

function App() {
  const [user, setUser] = useState(getUser())


  return (
    <main className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/login" element={<LoginPage />} />
      </Routes>
      {
        user ? //if user is logged in go to New Order Page otherwise go to Auth Page
          <>
            <NavBar name= { user.name } setUser={setUser}/>
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;

