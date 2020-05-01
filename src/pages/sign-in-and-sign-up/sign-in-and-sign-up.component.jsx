import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';

/* I use functional component and not state class because everything is gonna be stored in SignInAndSignUp component */

const SignInAndSignUp = () => (  
    <div className = 'sign-in and sign-up'>
           <SignIn />
          <SignUp />
    </div>

);

export default SignInAndSignUp;