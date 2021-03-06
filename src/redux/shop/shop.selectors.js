import {createSelector} from 'reselect';


const selectShop = state => state.shop;             /* takes in state and returns shop */

export const selectCollections = createSelector(       /* selectCollections function get selectShop arry  */
    [selectShop],
    shop => shop.collections        /* returns collections from shop */
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ?  Object.keys(collections).map(key => collections[key]) : [] /* if collections exists call Object.keys. Object.keys gets all the keys in array format object and map the keys and get the value of the collectios object at that key  */
);

export const selectCollection = collectionUrlParam =>  /* collectionUrlParam is a string value  */
    createSelector(
        [selectCollections],  
             collections => 
                collections => (collections ? collections[collectionUrlParam] : null ) /*  if collections exists return collections if not return null*/
            );

    
    
