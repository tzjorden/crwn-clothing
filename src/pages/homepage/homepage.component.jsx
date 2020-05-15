import React from 'react';

import Directory from '../../component/directory/directory.component';

import {HomePageContainer} from './homepage.styles';
 
const HomePage = () => (
    <HomePageContainer> {/* Creates the homepage */}
        <Directory />   {/* Imports from directory  */}
    </HomePageContainer>             
);

export default HomePage;  
