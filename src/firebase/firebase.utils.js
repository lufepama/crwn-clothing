import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBz9xhVpRr2t__MTRp2YNGzbdPZtwZMvFA",
    authDomain: "crwn-db-d73cb.firebaseapp.com",
    databaseURL: "https://crwn-db-d73cb.firebaseio.com",
    projectId: "crwn-db-d73cb",
    storageBucket: "crwn-db-d73cb.appspot.com",
    messagingSenderId: "963552553853",
    appId: "1:963552553853:web:6a912f2b701788fb897a14",
    measurementId: "G-Z4K8YX9YM4"
};


//We only want to store the user to database when user is not null 
export const createUserProfileDocument = async(userAuth,additionalData) => {
    
        if (!userAuth) return;

        const userRef = firestore.doc(`user/${userAuth.uid}`)

        const snapShot = await userRef.get();

        console.log(snapShot);
        // Any operation as delete, update, set, and get will be done by using documentRef object
        // in this case ==> userRef
        if (!snapShot.exists){
            //We have to set, what properties we need to store
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }catch(error){
                console.log('error creating user', error.message);
            }
        }
        return userRef;
};





firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //Allow pop up the google authentication when is used

 export function signInWithGoogle() {
    return(
        auth.signInWithPopup(provider)   //There are a variety of types of pop ups... google,facebook,twitter ...etc
                                        // By using "provider" we are declaring we are using googles one.
    )
}



export default firebase;
