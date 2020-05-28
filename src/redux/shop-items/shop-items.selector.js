import {createSelector} from "reselect";

const selectShop = state => state.shopItems;

export const selectShopCollections = createSelector(
    [selectShop],
    (selectShop) => selectShop.shopItems
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (shopItemsMap) => shopItemsMap ? Object.keys(shopItemsMap).map(key => shopItemsMap[key]) : []
);


export const selectCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    (shopItems) => (shopItems ? shopItems[collectionUrlParam] : null)
);

export const selectIsShopItemsFetching = createSelector(
    [selectShop],
    (shopItems) => shopItems.isFetching
);

export const selectIsShopItemsLoaded = createSelector(
    [selectShop],
    (shopItems) => !!shopItems.shopItems
);

