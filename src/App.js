import './App.css'
import { useState } from "react"
import AuthPage from './pages/AuthPage/AuthPage'
import NavBar from './components/NavBar/NavBar'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import { Routes, Route } from "react-router-dom"
import { getUser } from "./utilities/users-service"
import WordListPage from './pages/WordListPage/WordListPage'
import CreateWordPage from './pages/CreateWordPage/CreateWordPage'
import ShowWordPage from './pages//ShowWordPage/ShowWordPage'
import EditWordPage from './pages/EditWordPage/EditWordPage'
import NotebookListPage from './pages/NotebookListPage/NotebookListPage'
import CreateNotebookPage from './pages/CreateNotebookPage/CreateNotebookPage'
import EditNotebookPage from './pages/EditNotebookPage/EditNotebookPage'
import ShowNotebookPage from './pages/ShowNotebookPage/ShowNotebookPage'
import TranslationPage from './pages/TranslationPage'
import FlashCardPage from './pages/FlashCardPage'


function App() {
  const [user, setUser] = useState(getUser())


  return (
    <main className='App'>
      {
        user ? //if user is logged in go to New Order Page otherwise go to Auth Page
          <>
            <NavBar name= { user.name } setUser={setUser}/>
            <Routes>
              <Route path="/" element={<DashboardPage user={user} setUser={setUser} />} />
              //==============Vocabulary List==============
              <Route path="/vocab-list" element={<WordListPage user={user} setUser={setUser} />} />
              <Route path="/vocab-list/create-word" element={<CreateWordPage user={user} setUser={setUser} />} />
              <Route path="/vocab-list/:id" element={<ShowWordPage user={user} setUser={setUser} />} />
              <Route path="/vocab-list/:id/edit" element={<EditWordPage user={user} setUser={setUser} />} />
              //==============NOTEBOOK==============
              <Route path="/notebook" element={<NotebookListPage user={user} setUser={setUser} />} />
              <Route path="/notebook/new-page" element={<CreateNotebookPage user={user} setUser={setUser} />} />
              <Route path="/notebook/:id/edit" element={<EditNotebookPage user={user} setUser={setUser} />} />
              <Route path="/notebook/:id" element={<ShowNotebookPage user={user} setUser={setUser} />} />

              <Route path="/translate" element={<TranslationPage user={user} setUser={setUser} />} />
              <Route path="/flashcards" element={<FlashCardPage user={user} setUser={setUser} />} />
            </Routes>
          </>
          :
          <>
          <Routes>
            <Route path="/" element={<AuthPage setUser={setUser}/>} />
          </Routes>
          </>
      }
    </main>
  );
}

export default App;

