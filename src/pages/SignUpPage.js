import SignUpForm from "../components/SignUp/SignUpForm"

export default function SignUpPage({setUser}) {
    return(
        <div>
             <SignUpForm setUser={setUser}/>
        </div>
    )
}