import {createSelector} from "reselect";
import {State} from "../store.types";
import {Cart, CartItem} from "./cart.types";

const selectCart = (state: State) => state.cart;

export const selectCartDropdownIsHidden = createSelector(
    [selectCart],
    (cart: Cart): boolean => cart.cartDropdownIsHidden
);

export const selectCartItems = createSelector(
    [selectCart],
    (cart: Cart): CartItem[] => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems: CartItem[]): number =>
        cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
);

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems: CartItem[]): number =>
        cartItems.reduce((accumulator, cartItem) => accumulator + (cartItem.price * cartItem.quantity), 0)
);
