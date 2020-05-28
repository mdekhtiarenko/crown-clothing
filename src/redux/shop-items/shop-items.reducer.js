import {ShopItemsTypes} from "./shop-items.types";

const INITIAL_STATE = {
    shopItems: null,
    isFetching: false,
    errorMessage: null,
};

const shopItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopItemsTypes.FETCH_SHOP_ITEMS_START_CALL:
            return {
                ...state,
                isFetching: true
            };
        case ShopItemsTypes.FETCH_SHOP_ITEMS_SUCCESS_CALL:
            return {
                ...state,
                shopItems: action.payload,
                isFetching: false
            };
        case ShopItemsTypes.FETCH_SHOP_ITEMS_FAILURE_CALL:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;

    }
};

export default shopItemsReducer;
