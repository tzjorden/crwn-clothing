import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';

/* Class component cuz we have to store what user types  */

class SignIn extends React.Component{
    constructor(props) {
        super(props);

    this.state = {          /* state is gonna store empty string of email and password */
        email : '',
        password : ''
    };
}

handleSubmit = async event => {
    event.preventDefault();   /* prevents the default submit action from firing */

    const {email, password} = this.state; /* destructure email and password off state */

    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email : '', password : ''}); /* clears email and password */
    } catch(error){
      console.log(error);
    }
};

handleChange = event => {     /* this function pulls value and name from event.target */
    const {value, name} = event.target;

    this.setState({[name] : value })

};

render () {
    return (
        <SignInContainer>
             <SignInTitle>I already have an account</SignInTitle>
             <span> Sign in with email and password</span>

            <form onSubmit = {this.handleSubmit}> {/* onSubmit func calls the method handleSubmit */}
                <FormInput 
                name = "email" 
                type = "email" 
                handleChange = {this.handleChange} 
                value = {this.state.email} 
                required 
                /> 
                <FormInput 
                name = "password" 
                type = "password" 
                value = {this.state.password} 
                handleChange = {this.handleChange} 
                required 
                />
                
                <ButtonsBarContainer>
                    <CustomButton type = 'submit'> Sign In </CustomButton>
                    <CustomButton onClick = {signInWithGoogle} isGoogleSignIN> Sign In With Google </CustomButton>
                </ButtonsBarContainer>
                

            </form>
        </SignInContainer>
        );
    }   

}

export default SignIn;