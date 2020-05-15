import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer} from './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
  <CartItemsContainer>
      {
        cartItems.length ? (                               /* if cartItems.lengths is equal to zero/false */
          cartItems.map(cartItem => (                       /* if not this will render the cart items */
           <CartItem key={cartItem.id} item={cartItem} /> 
      ))
      ): (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>           /*if false render this message  */
      )}
  </CartItemsContainer>
  <CartDropdownButton  
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
    >
        GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector ({
  cartItems :  selectCartItems                                    /*Saves the cartItems in the cart */
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); /* higher order components can return and take components. Here withRouter is taking the component returned from connect call as its argument */