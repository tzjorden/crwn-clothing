import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header =  ({currentUser, hidden}) => (
    <div className = 'header'>
        <Link className = 'logo-container' to = "/">    {/*Takes the user back to homepage when the logo is clicked  */}
            <Logo className = 'logo'/>
        </Link>

        <div className = 'options'>
         <Link className = 'option' to = '/shop'>
            SHOP
         </Link>
         <Link className = 'option' to = '/shop'>
            CONTACT
         </Link>
            {
            currentUser ? ( /* if currentUser is an object it will be true therefore it will render div */
                <div className = 'option' onClick = {() => auth.signOut()}> SIGN OUT </div>  /* onClick is a functional callback which call auth.signout */
             ) : (
                <Link className = 'option' to = '/signin'> SIGN IN </Link> /* if it is false or null then it will render link */
             )}
        <CartIcon />
    </div>
        {hidden ? null : <CartDropdown />}  {/* if hidden is true render null else render CartDropdown  */}
     </div>   
)

    /* function that gives access to state object with the state being the root-reducer */
const mapStateToProps = createStructuredSelector ({     
    currentUser : selectCurrentUser,                        /* Passes in currentUser property whose value is action.played or null*/
    hidden : selectCartHidden

});


export default connect(mapStateToProps)(Header);