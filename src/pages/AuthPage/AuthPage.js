import SignUpForm from "../../components/SignUp/SignUpForm"
import LoginForm from "../../components/Login/LoginForm"
import styles from "./AuthPage.module.css"

export default function AuthPage({ setUser }){
    return(
        <main className={styles.form}>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
        </main>
    )
}