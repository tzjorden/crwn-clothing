import {createStore, applyMiddleware} from 'redux'; /* MIDDLEWARE is a function that receive action and console logs it and pass it on.*/
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';     /* allows browser to cache my store depending on configurations i set */

import rootReducer from './root-reducer';

const middlewares = [];       /* Setting up middleware as an array. Logger is the imported function which will be in array */

if(process.env.NODE_ENV == 'developement'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); /* createStore is a function that receives a rootReducer and return value of applyMiddleWare. */
                                                                       /* middlewares will be spread inside applyMiddleWare. That way the store function is more scallable */
export const persistor = persistStore(store);       /* presistor obejct calls presistStore which then calls store  */

export default {store,persistor};