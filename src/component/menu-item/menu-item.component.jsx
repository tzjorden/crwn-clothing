import React from 'react';

import {withRouter} from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.styles';

/*By doing {title} we pull the title value off the props so 
we can use the title and component whenever we want 
opposed to having to create one function for every prop} */


const MenuItem = ({ title,imageUrl,size, history, linkUrl, match}) => (  /* use const because we dont need our component to hold any state */
    <MenuItemContainer 
        size={size}                     
        onClick={() => history.push(`${match.url}${linkUrl}`)}          /* navigates user to correct url*/
        >  
        <BackgroundImageContainer    
            className = 'background-image' 
            imageUrl={imageUrl} /* This allows us to dynamically makes styles on our component. So if imgurl changes then css value changes too */
            />
            
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem); /* This passes menuitem into withRouter */
