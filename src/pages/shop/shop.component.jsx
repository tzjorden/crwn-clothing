import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => (         /* Since shoppage is nested in Route(which is declared in App.js) it gives access to match object to our components as props */
        <div className = 'shop-page'>
            <Route exact path = {`${match.path}`} component ={CollectionsOverview}/>    {/* displays match.path  */}
            <Route path = {`${match.path}/:collectionId`} component = {CollectionPage}/> {/* allows access to category.Id as a parameter on the match object in CategoryPage  */}
        </div>
);


export default ShopPage;