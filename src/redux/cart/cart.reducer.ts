import {Cart, CartAction, CartActionType} from "./cart.types";
import {addItemToCart, decreaseItemCount} from "./cart.utils";

const INITIAL_STATE: Cart = {
    cartDropdownIsHidden: true,
    cartItems: []
};

const cartReducer = (state: Cart = INITIAL_STATE, action: CartAction): Cart => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_DROPDOWN_HIDDEN:
            return {
                ...state,
                cartDropdownIsHidden: !state.cartDropdownIsHidden
            };
        case CartActionType.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(action.payload!, state.cartItems)
            };
        case CartActionType.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.id !== action.payload!.id)
            };
        case CartActionType.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseItemCount(action.payload!, state.cartItems)
            };
        case CartActionType.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;

    }
};

export default cartReducer;
