import {CartActionTypes} from "./cart.types";

export const toggleShowCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN_HIDDEN
});

export const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});