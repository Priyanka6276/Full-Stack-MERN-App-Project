import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from "./LoginForm.module.css"
import * as usersService from "../../utilities/users-service"

export default function LoginForm({ setUser }) {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      const user = await usersService.login(credentials)
      setUser(user)
      navigate("/")

    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <div className={styles.form} onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <div className={styles.wordContainer}>
            <label>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required /> <br />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required /> <br />
          </div>
          <button type="submit" className={styles.publish}>LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}