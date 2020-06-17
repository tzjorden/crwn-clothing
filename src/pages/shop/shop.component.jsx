import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../../component/with-spinner/with-spinner.component'; 

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'; 

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
    state = {
        loading : true
    }; 
    unsubscribeFromSnapshot = null;

    componentDidMount() { 
        const {updateCollections} = this.props; 
        const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {    
        const collectionsMap = convertCollectionSnapshotToMap(snapshot); 
        updateCollections(collectionsMap); 
        this.setState({loading: false});
        });
    }


    render (){
        const {match} =  this.props;
        return (
          /* Since shoppage is nested in Route(which is declared in App.js) it gives access to match object to our components as props */
          <div className = 'shop-page'>
          <Route exact path = {`${match.path}`} render = {(props) =><CollectionsOverviewWithSpinner isLoading = {loading}{...props} /> } />    {/* displays match.path  */}
          <Route 
            path = {`${match.path}/:collectionId`} 
            render = {(props) => <CollectionsOverviewWithSpinner isLoading = {loading}{...props}/> }/> {/* allows access to category.Id as a parameter on the match object in CategoryPage  */}
      </div>
        );
    }
}        

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps) (ShopPage);