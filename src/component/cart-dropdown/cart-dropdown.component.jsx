import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      
      {
        cartItems.length ? (                               /* if cartItems.lengths is equal to zero/false */
          cartItems.map(cartItem => (                   /* if not this will render the cart items */
           <CartItem key={cartItem.id} item={cartItem} /> 
      ))
      ): (
      <span className = 'empty-message'>Your Cart Is Empty</span>           /*if false render this message  */
      )
      }
      
    </div>
      <CustomButton onClick = {() => history.push('/checkout')}> GO TO CHECKOUT </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  cartItems :  selectCartItems                                    /*Saves the cartItems in the cart */
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); /* higher order components can return and take components. Here withRouter is taking the component returned from connect call as its argument */