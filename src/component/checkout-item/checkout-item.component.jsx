import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'; 
import './checkout-item.styles.scss';


const CheckOutItem = ({cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
    <div className = 'checkout-item'>
        <div className = 'image-container'>                 {/* image container makes it easier to control the size of img */}
            <img src = {imageUrl} alt = 'item'/>
        </div>
        <span className = 'name'></span>
        <span className = 'quantity'>
           <div className = 'arrow' onClick = {() => removeItem(cartItem)}> &#10094; </div> {/* &#10094 is left arrow */}
            <span className = 'value'> {quantity} </span>   
           <div className = 'arrow' onClick = {() => addItem(cartItem)}> &#10095; </div>  {/* &#10095 is right arrow */}
        </span>
        <span className = 'price'></span>
        <div className = 'remove-button' onClick = {() => clearItem(cartItem)}>     {/* calls the clearItem function and passes cartItem. Removes item from checkout */}
            &#10005;</div>         {/* &#10005 is the UTF value for a X/remove sign */}
    </div>
    );
};

const mapDispatchToProps = dispatch => ({                   /* removes item from cart */
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);