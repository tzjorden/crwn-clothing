import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../component/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({collection}) => { 
    const {title, items} = collection;
    return(
    <div className = 'collection-page'>
        <h2 className = 'title'> {title}</h2>
        <div className = 'items'>
            {items.map(item =>( 
              <CollectionItem key = {item.id} item = {item}/>  
            ))}
        </div>
    </div>
    )
};

const mapStateToProps = (state, ownProps) => ({         /* ownProps gives all the props from CollectionPage  */
    collection : selectCollection(ownProps.match.params.collectionId)(state)  /* CollectionPage gives access to the match object which i wrapped in Route in Shop.component   */
})   /* pull params value from match and get collectionId. Since selectCollection is a function that returns a function I pass in the state to wire everything together. This gives access to collection */


export default connect(mapStateToProps)(CollectionPage);