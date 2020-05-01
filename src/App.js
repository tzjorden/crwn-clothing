import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from './component/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
 

class App extends React.Component  {  /* class component to have access to state */
    unsubscribeFromAuth = null;

    componentDidMount() {                   /* If a user signs in */
      const {setCurrentUser} = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { /* asysnc to make potential API request */
        if(userAuth) {                                                  /* if userAuth exists  */
          const userRef = await createUserProfileDocument(userAuth); /* userRef is obtained cuz i return userRef; in createUserProfileDocument */

          userRef.onSnapshot(snapShot  => {       /* checks if database has been updated with new data ie if snapshot has been changed */
             setCurrentUser({                            /* onSnapshot returns the snapshot object representing the data when the code runs it */
                 id : snapShot.id,
                 ...snapShot.data()
               })
            });
        }
        setCurrentUser(userAuth); /* updates with userAuth object */
      });
    }

    componentWillUnmount (){ 
      this.unsubscribeFromAuth();  /* closes off the subscription */
    }

    render(){
    return ( 
    <div>
      <Header /> 
      <Switch>
        <Route exact path='/' component= {HomePage} />  {   /* path ='/' means when the url is at the base(homepage) , component is the comp we want to render */}
        <Route path='/shop' component={ShopPage} /> 
        <Route path='/checkout' component={CheckOutPage} />
        
        <Route 
          exact 
          path = '/signin' 
          render = {() =>          /* render is an invocation that determines what component to return  */
            this.props.currentUser ? (
              <Redirect to = '/' /> 
                ) : (                     /* if not it will render SignInAndSignUp*/
              <SignInAndSignUp />
                )}  
              />

      </Switch>
    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ /* Gets current user from redux state */
  currentUser : selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user)) /* dispatches the user object */

});

export default connect( mapStateToProps, mapDispatchToProps)(App);