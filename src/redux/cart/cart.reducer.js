import {CartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    cartDropdownIsHidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN_HIDDEN:
            return {
                ...state,
                cartDropdownIsHidden: !state.cartDropdownIsHidden
            };
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(action.payload, state.cartItems)
            };
        default:
            return state;

    }
};

export default cartReducer;