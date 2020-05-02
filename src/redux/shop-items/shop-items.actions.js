import {ShopItemsTypes} from "./shop-items.types";

export const initShopItems = shopItemsMap => ({
    type: ShopItemsTypes.INITIALIZE_ITEMS,
    payload: shopItemsMap
});
