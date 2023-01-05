import { Component } from "react"
import { signUp } from '../../utilities/users-service'
import styles from "./SignUpForm.module.css"

export default class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: "",
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ""
        })
    }

    handleSubmit = async (evt) => {
        // Prevent form from being submitted to the server
        evt.preventDefault()
        try {
            // We don't want to send the 'error' or 'confirm' property,
            // so let's make a copy of the state object, then delete them
            const formData = { ...this.state }
            delete formData.error
            delete formData.confirm

            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData)
            this.props.setUser(user)
        } catch {
            this.setState({ error: "Sign Up Failed - Try Again" })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm
        return (
            <div className={styles.login}>
                <h1>Sign Up</h1>
                <div className={styles.form}>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className={styles.wordContainer}>
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                            <label>Email</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                            <label>Confirm</label>
                            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        </div>

                        <button type="submit" disabled={disable} className={styles.publish}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        )
    }
}