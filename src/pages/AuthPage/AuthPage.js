import SignUpForm from "../../components/SignUp/SignUpForm"
import LoginForm from "../../components/Login/LoginForm"

export default function AuthPage({ setUser }){
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
        </main>
    )
}