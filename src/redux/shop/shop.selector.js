import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (selectShop) => selectShop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collection) => Object.keys(collection).map(key => collection[key])
);


export const selectCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    (selectShopCollections) => selectShopCollections[collectionUrlParam]
);

