import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

const Header =  ({currentUser, hidden}) => (

        <HeaderContainer>
        <LogoContainer  to = "/">    {/*Takes the user back to homepage when the logo is clicked  */}
            <Logo className = 'logo'/>
        </LogoContainer>

        <OptionsContainer>
         <OptionLink to = '/shop'>
            SHOP
         </OptionLink>
         <OptionLink to = '/shop'>
            CONTACT
         </OptionLink>
            {
            currentUser ? ( /* if currentUser is an object it will be true therefore it will render div */
                <OptionLink as = 'div' onClick = {() => auth.signOut()}> SIGN OUT </OptionLink>  /* onClick is a functional callback which call auth.signout */
             ) : (
                <OptionLink to = '/signin'> SIGN IN </OptionLink> /* if it is false or null then it will render link */
             )}
        <CartIcon />
    </OptionsContainer>
        {hidden ? null : <CartDropdown />}  {/* if hidden is true render null else render CartDropdown  */}
     </HeaderContainer>   
);

    /* function that gives access to state object with the state being the root-reducer */
const mapStateToProps = createStructuredSelector ({     
    currentUser : selectCurrentUser,                        /* Passes in currentUser property whose value is action.played or null*/
    hidden : selectCartHidden

});


export default connect(mapStateToProps)(Header);