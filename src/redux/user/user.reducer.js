import {UserActionTypes} from './user.types';

const INITIAL_STATE = {             /* object that represent the inital state of the reducer*/

    currentUser : null
}

const userReducer = (state = INITIAL_STATE, action) => {                /* Reducer takes in state and action will update it */
    switch(action.type){                             /* Switch checks if the case of action.type = 'SET_CURRENT_USER */
        case 'SET_CURRENT_USER': 
            return{                         /* Whenever SET_CURRENT_USER is the action.type that gets fired it returns an object */
                ...state,                                   /* everything else on the state */
                currentUser: action.payload                 /* value to be set is currentUser  */
            }

        default:                            /* if case doesnt match actiontype then it just default */
            return state;
    }
} 

export default userReducer;