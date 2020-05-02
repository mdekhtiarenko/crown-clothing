import {ShopItemsTypes} from "./shop-items.types";

const INITIAL_STATE = {
    collections: null
};

const shopItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopItemsTypes.INITIALIZE_ITEMS:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;

    }
};

export default shopItemsReducer;
