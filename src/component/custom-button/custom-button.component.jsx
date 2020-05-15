import React, { Children } from 'react';

import {CustomButtonContainer} from './custom-button.styles';


const CustomButton = ({children, ...props}) => (        /* Destructure the children and spread the props  */
    <CustomButtonContainer  {...props}>{children}       {/* spread in props */}
    </CustomButtonContainer> 
     
);

export default CustomButton;