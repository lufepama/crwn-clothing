import React from 'react'
import FormInput from "../form-input/FormInput"
import Button from "../custom-button/Button"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import "./signup.style.scss"

class SingUp extends React.Component{
    constructor(){
        super()
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const { displayName, email, password, confirmPassword  }= this.state
        
        //First thing we need to validate is if passwords match!
        //If they dont match, que just return
        if (password !== confirmPassword){
            alert("Passwords don't match")
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName} );

            //Delete all values of state
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        }catch(error){
            alert('The email is already registered')
        }
    }   

    handleChange = event =>{
        const { name, value } = event.target
        this.setState({ [name]:value })
    }


    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <div className="sign-up">
                <h2> I dont have an account</h2>
                <span> Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display name"
                    required
                    />
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="confirmPassword"
                    required
                    />
                    <Button type="submit">Sign up</Button>
                </form>
            </div>

            
        )
    }
}

export default SingUp;