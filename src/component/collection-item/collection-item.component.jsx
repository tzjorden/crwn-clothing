import React from 'react';
import {connect} from 'react-redux'; 

import {addItem} from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-styles.styles';


const CollectionItem = ({item,addItem}) => {
    const {name, price, imageUrl} = item; /* destructures these props off item */
    
    return (
    <CollectionItemContainer>     
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>   
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>  {/* onClick function that will fire addItem passing item in */}
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) /* creating prop addItem and receive item as the property then pass it to addItem where payload is item. will then dispatch into store and go thru redux flow */
});

export default connect(null,mapDispatchToProps)(CollectionItem);