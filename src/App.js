import './App.css'
import { useState } from "react"
import AuthPage from './pages/AuthPage'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import VocabListPage from "./pages/VocabListPage"
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
        <Route path="/user/auth" element={<AuthPage />} />
      </Routes>
      {
        user ? //if user is logged in go to New Order Page otherwise go to Auth Page
          <>
            <NavBar name= { user.name } setUser={setUser}/>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/vocab-list" element={<VocabListPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;

