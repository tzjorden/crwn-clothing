import React from 'react';

import './homepage.style.scss';

import Directory from '../../component/directory/directory.component';

const HomePage = () => (
    <div className = 'homepage'> {/* Creates the homepage */}
        <Directory />   {/* Imports from directory  */}
        </div>             
);

export default HomePage;  
