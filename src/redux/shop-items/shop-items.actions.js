import {ShopItemsTypes} from "./shop-items.types";

export const fetchShopItemsStart = () => ({
    type: ShopItemsTypes.FETCH_SHOP_ITEMS_START_CALL,
});

export const fetchShopItemsSuccess = shopItems => ({
    type: ShopItemsTypes.FETCH_SHOP_ITEMS_SUCCESS_CALL,
    payload: shopItems
});

export const fetchShopItemsFailure = errorMessage => ({
    type: ShopItemsTypes.FETCH_SHOP_ITEMS_FAILURE_CALL,
    payload: errorMessage
});
