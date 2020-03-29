import React from 'react';

import './homepage.style.scss';

const HomePage = () => (
    <div className = 'homepage'> {/* Creates the homepage */}
        <div className = 'directory-menu'>   {/* Creates the menu container */}
            <div className = 'menu-item'>  {/*Creates menu */}
                <div className = 'content'>
                    <h1 className = 'title'>HATS</h1>
                    <span className = 'subtitle'>SHOP NOW </span>
                </div>
            </div>
            <div className = 'menu-item'>  {/*Creates menu */}
                <div className = 'content'>
                    <h1 className = 'title'>Jackets</h1>
                    <span className = 'subtitle'>SHOP NOW </span>
                </div>
            </div>
            <div className = 'menu-item'>  {/*Creates menu */}
                <div className = 'content'>
                    <h1 className = 'title'>Sneakers</h1>
                    <span className = 'subtitle'>SHOP NOW </span>
                </div>
            </div>
            <div className = 'menu-item'>  {/*Creates menu */}
                <div className = 'content'>
                    <h1 className = 'title'>Mens</h1>
                    <span className = 'subtitle'>SHOP NOW </span>
                </div>
            </div>
            <div className = 'menu-item'>  {/*Creates menu */}
                <div className = 'content'>
                    <h1 className = 'title'>Womens</h1>
                    <span className = 'subtitle'>SHOP NOW </span>
                </div>
            </div>
            </div> 
        </div>             
);
export default HomePage;  
