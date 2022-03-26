import {CartAction, CartActionType, CartItem} from "./cart.types";
import {Item} from "../shop-items/shop-items.types";

export const toggleShowCartDropdown = (): CartAction => ({
    type: CartActionType.TOGGLE_CART_DROPDOWN_HIDDEN
});

export const addItemToCart = (item: Item): CartAction => ({
    type: CartActionType.ADD_ITEM_TO_CART,
    itemToAdd: item
});

export const removeItemFromCart = (item: CartItem): CartAction => ({
    type: CartActionType.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const decreaseItemQuantity = (item: CartItem): CartAction => ({
    type: CartActionType.DECREASE_ITEM_QUANTITY,
    payload: item
});

export const clearCart = (): CartAction => ({
    type: CartActionType.CLEAR_CART
});
