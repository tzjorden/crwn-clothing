
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(        /* function checks if item is already in cart. find() returns the value of the first element in an array that pass a test  */
        cartItem => cartItem.id === cartItemToAdd.id  /* gets car */
        );
        
        if (existingCartItem) {                      /* if existingCartItem exists */
            return cartItems.map(cartItem =>        /* cartItems.map will return new array. Passes in cartItem */
                cartItem.id === cartItemToAdd.id        /* if cartItem.id = cartItemToAdd.id*/
                ? {...cartItem , quantity : cartItem.quantity + 1}          /*then create new object and add 1 to cartItem.quantity*/
                : cartItem                                      /* return cartItem if it doesnt match */
            );
        }      
    
    return [...cartItems, {...cartItemToAdd, quantity: 1}]; /* if cartItem isnt in array return new array with all existing carItems and also cartItemToAdd with base quantity 1  */
                                                            /* quantity is 1 so that any subsequent cartItems can reference it */
    
    };
 
export const removeItemFromCart = (cartItems,cartItemToRemove) => { /* pass cartItems to check if cartItemToRemove is in it */
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id             /* check if cartItem.id is = to cartItemToRemove.id */
    )

    if(existingCartItem.quantity === 1){                /* if existingCartItem.quantity is 1  */
        return cartItems.filter(cartItem => cartItem.id ===! cartItemToRemove.id)   /* if cartItem.id ===! cartItemToRemove.id then keep it, if it is then remove  */
    }

    return cartItems.map(                                       /* if cartItems != 1 */
        cartItem => 
        cartItem.id === cartItemToRemove.id ?
        {...cartItem,quantity : cartItem.quantity -1}           /* spread cartItem. quantity removes 1 from cartItem.quantity */
        : cartItem                                                  /* otherwise return cartItem */
    );
}