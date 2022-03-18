import {ShopItems, ShopItemsAction, ShopItemsTypes} from "./shop-items.types";

const INITIAL_STATE = {
    isFetching: false,
};

const shopItemsReducer = (state: ShopItems = INITIAL_STATE, action: ShopItemsAction): ShopItems => {
    switch (action.type) {
        case ShopItemsTypes.FETCH_SHOP_ITEMS_START_CALL:
            return {
                ...state,
                isFetching: true
            };
        case ShopItemsTypes.FETCH_SHOP_ITEMS_SUCCESS_CALL:
            return {
                ...state,
                collections: action.collections,
                isFetching: false
            };
        case ShopItemsTypes.FETCH_SHOP_ITEMS_FAILURE_CALL:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.errorMessage
            };
        default:
            return state;

    }
};

export default shopItemsReducer;
