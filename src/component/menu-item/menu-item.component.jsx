import React from 'react';

import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

/*By doing {title} we pull the title value off the props so 
we can use the title and component whenever we want 
opposed to having to create one function for every prop} */


const MenuItem = ({ title,imageUrl,size, history, linkUrl, match}) => (  /* we use const because we dont need our component to hold any state */
     <div  
        className = {`${size} menu-item`}                        /*Creates menu */
        onClick={() => history.push(`${match.url}${linkUrl}`)}          /* navigates user to correct url*/
        >  
            
        <div className = 'background-image' style={{  /*Style takes an obj with prop values equal to CSS values and applies it to the element */
            backgroundImage : `url(${imageUrl})` }} /* This allows us to dynamically makes styles on our component. So if imgurl changes then css value changes too */
            />
            
        <div className = 'content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>   {/* Uppercases the text in title */}
            <span className = 'subtitle'>SHOP NOW </span>
           
        </div>
     
     </div>
);

export default withRouter(MenuItem); /* This passes menuitem into withRouter */
