import firebase from "firebase/app"
import "firebase/firestore"

const firestore = firebase.firestore();

//To access to the data related to a user we need to query as follows

//This is the first way to access to data named as lather jacket in our trial db created.
firestore.collection('users').doc('YBVFyLrocVfgou9CRE5A').collection('cartitems').doc('AIW6p0NR79Q73ZHFXrOX')
//This is the second way to do so
firestore.doc('/users/YBVFyLrocVfgou9CRE5A/cartitems/AIW6p0NR79Q73ZHFXrOX')
// in case we need to acces to collections instead of doc we need to tap the next code
firestore.collection('/users/YBVFyLrocVfgou9CRE5A/cartitems')