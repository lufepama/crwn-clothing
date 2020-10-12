import React from 'react';
import Homepage from "./pages/homepage/Homepage"
import './app.style.css'
import { Route, Switch } from 'react-router-dom';
import Shoppage from "./pages/shoppage/Shoppage";
import Header from "./components/header/Header"
import SignInUp from "./pages/sign-in-sign-up/SignInOut"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// To work with auth, we need to pass through the components parameters: state!
// because of that, we need to convert App component to a class type component


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
      this.setState({ currentUser:userAuth })
    } );
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    
  }
  
  render(){
    return (
      <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shoppage}  />
            <Route path="/signin" component={SignInUp}  />
          </Switch>
      </div>
    );
  }
  
}

export default App;
