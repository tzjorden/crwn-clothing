import {createSelector} from 'reselect';
import { stat } from 'fs';

const selectCart = state => state.cart;   /* returns cart object from state */

export const selectCartItems = createSelector(         
    [selectCart],                           /* referene selectCart */
    (cart) => cart.cartItems            /* returns cart items needed from cart object */

);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector (
    [selectCartItems],                  /* reference selectCartItems */
    cartItems => 
        cartItems.reduce(
                (accumulatedQuantity, cartItem) => 
                    accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector (
    [selectCartItems],                  /* reference selectCartItems */
    cartItems =>  
        cartItems.reduce(   /* Similar to above ^ but now I calculate quantity * price  */
                (accumulatedQuantity, cartItem) => 
                    accumulatedQuantity + cartItem.quantity * cartItem.price, 
            0
        )

)