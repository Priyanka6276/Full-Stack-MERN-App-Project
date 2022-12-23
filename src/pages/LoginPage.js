import LoginForm from "../components/LoginForm"

export default function LoginPage ({setUser}){
    return(
        <div>
            <h1>Login</h1>
             <LoginForm setUser={setUser}/>
        </div>
    )
}