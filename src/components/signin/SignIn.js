import React from 'react'
import SignInOut from '../../pages/sign-in-sign-up/SignInOut'
import FormInput from "../form-input/FormInput"
import "./signin.style.scss"
import Button from "../custom-button/Button"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email: "",
            password: ""
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const { email, password }= this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: "",
            password: ""
            })
        }catch(error){
            console.log(error);
        }

    }

    handleChange = event =>{
        const { value, name } = event.target
        this.setState({ [name]:value })
    }


    render(){
        return(
            <div className="sign-in">
                <h2 className="title"> I already have an account</h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required={true} handleChange={this.handleChange} label="email"/>

                    <FormInput name="password" type="password" value={this.state.password} required={true} handleChange={this.handleChange} label="password"/>
                    <div className="buttons">
                        <Button type="submit"> Sign in </Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn >Google</Button>
                    </div>
                    
                </form>

            </div>
        )
    }
}


export default SignIn;