import SignUpForm from "../components/SignUpForm"

export default function SignUpPage({setUser}) {
    return(
        <div>
             <SignUpForm setUser={setUser}/>
        </div>
    )
}