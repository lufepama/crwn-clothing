import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer'

//middlewares just take the actions and pass them to rootReducer

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store;