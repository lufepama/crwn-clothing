//This will combines all the slice states!!!
//We will first the user reducer.

import { combineReducers } from 'redux'
import userReducer from './user/userReducer'

export default combineReducers({

    user: userReducer

})