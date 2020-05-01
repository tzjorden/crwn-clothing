import {UserActionTypes} from './user.types';

/* Creates the action to trigger the correct case inside userReducer in the user.reducer.js  */
export  const setCurrentUser = user => ({    /*setCurrentUser takes in the parameter user object which is either auth or snapshot or its null  */
    type : UserActionTypes.SET_CURRENT_USER,              /* user returns an object with type : 'SET_CURRENT_USER'(the one created in user.reducer.js)  */
    payload : user                  /* the user is then set as a payload */
});