import React from 'react';
import {connect} from 'react-redux'; 

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item,addItem}) => {
    const {name, price, imageUrl} = item; /* destructures these props off item */
    return (
    <div className = 'collection-item'>
        <div
            className = 'image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
        />
    <div className = 'collection-footer'>    
        <span className = 'name'>{name}</span>
        <span className = 'price'>{price}</span>

    </div>
    <CustomButton onClick = {() => addItem(item) } inverted>  {/* onClick function that will fire addItem passing item in */}
         Add to Cart 
     </CustomButton>
</div>

)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) /* creating prop addItem and receive item as the property then pass it to addItem where payload is item. will then dispatch into store and go thru redux flow */

})

export default connect(null,mapDispatchToProps)(CollectionItem);