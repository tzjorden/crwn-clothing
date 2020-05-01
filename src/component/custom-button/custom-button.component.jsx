import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIN, inverted , ...otherProps}) => ( /* Pull the children from props thats gets passed onto CustomButton and destructure otherprops */
    <button 
        className = {`${inverted ? 'inverted' : ''}  ${       /* if inverted is true then add inverted class */
                   isGoogleSignIN ? 'google-sign-in' : ''    /*Conditionally render using string interpolate isGoogleSignIn the class google-sign-in otherwise empty string '' */
                    } custom-button `} 
        {...otherProps}>  
        {children}

    </button>
)

export default CustomButton;