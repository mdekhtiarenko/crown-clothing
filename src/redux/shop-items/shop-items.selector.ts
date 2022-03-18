import {createSelector} from "reselect";
import {Collection, ShopItems} from "./shop-items.types";
import {State} from "../store.types";

const selectShopItems = (state: State): ShopItems => state.shopItems;

export const selectShopCollections = createSelector(
    [selectShopItems],
    (selectShop: ShopItems): Collection[] => selectShop.collections!
);

export const selectCollection = (collectionName: string) => createSelector(
    [selectShopCollections],
    (collections: Collection[]): Collection | undefined => collections && collections.find(collection => collection.routeName === collectionName)
);

export const selectIsShopItemsFetching = createSelector(
    [selectShopItems],
    (shopItems: ShopItems): boolean => shopItems.isFetching
);

export const selectIsShopItemsLoaded = createSelector(
    [selectShopItems],
    (shopItems: ShopItems): boolean => !!shopItems.collections
);

