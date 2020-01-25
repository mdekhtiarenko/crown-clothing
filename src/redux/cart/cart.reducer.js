import {CartActionTypes} from "./cart.types";

const INITIAL_STATE = {
    cartDropdownIsHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN_HIDDEN:
            return {
                ...state,
                cartDropdownIsHidden: !state.cartDropdownIsHidden
            };
        default:
            return state;

    }
};

export default cartReducer;