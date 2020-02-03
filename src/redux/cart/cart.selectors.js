import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartDropdownIsHidden = createSelector(
    [selectCart],
    (cart) => cart.cartDropdownIsHidden
);

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
);