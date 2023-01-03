import './App.css'
import { useState } from "react"
import AuthPage from './pages/AuthPage/AuthPage'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/Home/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage/LoginPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import { Routes, Route } from "react-router-dom"
import { getUser } from "./utilities/users-service"
import WordListPage from './pages/WordListPage'
import CreateWordPage from './pages/CreateWordPage'
import ShowWordPage from './pages/ShowWordPage'
import EditWordPage from './pages/EditWordPage'
import NotebookListPage from './pages/NotebookListPage/NotebookListPage'
import CreateNotebookPage from './pages/CreateNotebookPage/CreateNotebookPage'
import EditNotebookPage from './pages/EditNotebookPage/EditNotebookPage'
import ShowNotebookPage from './pages/ShowNotebookPage/ShowNotebookPage'


function App() {
  const [user, setUser] = useState(getUser())


  return (
    <main className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/signup" element={<SignUpPage setUser={setUser}/>} />
        <Route path="/user/login" element={<LoginPage setUser={setUser}/>} />6
      </Routes>
      {
        user ? //if user is logged in go to New Order Page otherwise go to Auth Page
          <>
            <NavBar name= { user.name } setUser={setUser}/>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage user={user} setUser={setUser} />} />
              <Route path="/vocab-list" element={<WordListPage user={user} setUser={setUser} />} />
              <Route path="/vocab-list/create-word" element={<CreateWordPage user={user} setUser={setUser} />} />
              <Route path="/vocab-list/:id" element={<ShowWordPage user={user} setUser={setUser} />} />
              <Route path="/vocab-list/:id/edit" element={<EditWordPage user={user} setUser={setUser} />} />
              <Route path="/notebook" element={<NotebookListPage user={user} setUser={setUser} />} />
              <Route path="/notebook/new-page" element={<CreateNotebookPage user={user} setUser={setUser} />} />
              <Route path="/notebook/:id/edit" element={<EditNotebookPage user={user} setUser={setUser} />} />
              <Route path="/notebook/:id" element={<ShowNotebookPage user={user} setUser={setUser} />} />
            </Routes>
          </>
          :
          <>
          <Routes>
            <Route path="/user/auth" element={<AuthPage setUser={setUser}/>} />
          </Routes>
          </>
      }
    </main>
  );
}

export default App;

