import React from 'react'
import "./signinout.style.scss"
import SignIn from "../../components/signin/SignIn"
import SignUp from "../../components/sign-up/SingUp"

function SignInUp() {
    return(
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}


export default SignInUp;