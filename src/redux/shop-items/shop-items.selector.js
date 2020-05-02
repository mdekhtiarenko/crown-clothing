import {createSelector} from "reselect";

const selectShop = state => state.shopItems;

export const selectShopCollections = createSelector(
    [selectShop],
    (selectShop) => selectShop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (shopItemsMap) => shopItemsMap ? Object.keys(shopItemsMap).map(key => shopItemsMap[key]) : []
);


export const selectCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    (shopItems) => (shopItems ? shopItems[collectionUrlParam] : null)
);

