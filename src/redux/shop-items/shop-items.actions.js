import {ShopItemsTypes} from "./shop-items.types";
import {convertShopItemsToMap, firestore} from "../../firebase/firebase.utils";

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

export const fetchShopItemsStartAsync = () => {
    return dispatch => {
        const collectionsRef = firestore.collection("collections");
        dispatch(fetchShopItemsStart());

        collectionsRef.get()
            .then(shopItemsSnapshot => {
                const shopItems = convertShopItemsToMap(shopItemsSnapshot);
                dispatch(fetchShopItemsSuccess(shopItems));
            })
            .catch(error => dispatch(fetchShopItemsFailure(error.message)));
    }
};
