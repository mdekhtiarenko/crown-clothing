import {Collection, ShopItemsAction, ShopItemsTypes} from "./shop-items.types";

export const fetchShopItemsStart = (): ShopItemsAction => ({
    type: ShopItemsTypes.FETCH_SHOP_ITEMS_START_CALL,
});

export const fetchShopItemsSuccess = (collections: Collection[]): ShopItemsAction => ({
    type: ShopItemsTypes.FETCH_SHOP_ITEMS_SUCCESS_CALL,
    collections: collections
});

export const fetchShopItemsFailure = (errorMessage: string): ShopItemsAction => ({
    type: ShopItemsTypes.FETCH_SHOP_ITEMS_FAILURE_CALL,
    errorMessage: errorMessage
});
