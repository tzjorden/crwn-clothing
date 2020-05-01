import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';
import { clearItemFromCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = { /* This ensure cartdropdown is hidden at first */
    hidden : true,
    cartItems: []
}; 

const cartReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:        /* listens for the case TOGGLE_CART_HIDDEN created in cart.actions  */
            return {
                ...state,                               /* spread the state */
                hidden : !state.hidden    /* ! converts the boolean value to its opposite. So if True convert to false vice versa  */
            };
        case CartActionTypes.ADD_ITEM:           /* listens for the case ADD_ITEM created in cart.actions  */
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)  /* action.payload is the item i want to add */
            };
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{                         /* returns new arr with the unwanted item filtered out */
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id != action.payload.id) /* if cartItem.id doesnt match the item I want to filter then return true/keep item */
            };
        default:
            return state;
    }
};

export default cartReducer;