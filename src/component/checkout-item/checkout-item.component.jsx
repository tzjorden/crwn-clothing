import React from 'react';
import {connect} from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem
  } from '../../redux/cart/cart.actions';

  import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './checkout-item.styles';


const CheckOutItem = ({cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <CheckoutItemContainer>
        <ImageContainer>            {/* image container makes it easier to control the size of img */}
            <img src = {imageUrl} alt = 'item'/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
           <div onClick = {() => removeItem(cartItem)}> &#10094; </div> {/* &#10094 is left arrow */}
            <span> {quantity} </span>   
           <div onClick = {() => addItem(cartItem)}> &#10095; </div>  {/* &#10095 is right arrow */}
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick = {() => clearItem(cartItem)}>     {/* calls the clearItem function and passes cartItem. Removes item from checkout */}
            &#10005;        {/* &#10005 is the UTF value for a X/remove sign */}
        </RemoveButtonContainer>
    </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({                   /* removes item from cart */
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);