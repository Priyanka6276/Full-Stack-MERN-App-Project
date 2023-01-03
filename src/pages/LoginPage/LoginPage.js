import LoginForm from "../../components/Login/LoginForm"

export default function LoginPage ({setUser}){
    return(
        <div>
            
             <LoginForm setUser={setUser}/>
        </div>
    )
}