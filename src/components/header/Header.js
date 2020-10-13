import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/crown.svg'
import "./header.style.scss"
import { auth } from "../../firebase/firebase.utils"
import { connect } from 'react-redux';

function Header({ currentUser }) {
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop"> Shop</Link>
                <Link className="option"  to="/shop"> Contact</Link>
                {
                    currentUser?
                    <div className="option" onClick={() => auth.signOut()}> Sign out</div>
                    :
                    <Link className="option" to="/signin"> Sign in </Link>
                }
            </div>
        </div>
    )
}
//Here we are recivieving the current user value from userReducer
const mapSateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapSateToProps)(Header);
//With this, we can delete the currentUser prop given to Header component in App.js
