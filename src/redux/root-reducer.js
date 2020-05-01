 /* Root-reducer file represents all the reducer  */
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';    /* imports local storage for browser.  */

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {             /* setting config for persist storage */
    key : 'root',                /* In the Reducer object to start storing from the root */
    storage,                    /* pass in storage I imported from redux-presist ^ */
    whitelist: ['cart']          /*whitelist is a property that is an arr containing the string names of reducers I wanna store  */
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shop : shopReducer
}); 

export default persistReducer(persistConfig,rootReducer);