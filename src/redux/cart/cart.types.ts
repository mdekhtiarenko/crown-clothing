export interface CartAction {
    type: CartActionType,
    payload?: CartItem
}

export enum CartActionType {
    TOGGLE_CART_DROPDOWN_HIDDEN = "TOGGLE_CART_DROPDOWN_HIDDEN",
    ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
    REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
    DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY",
    CLEAR_CART = "CLEAR_CART"
}

export interface Cart {
    cartDropdownIsHidden: boolean;
    cartItems: CartItem[];
}

export interface CartItem {
    price: number;
    id: number;
    imageUrl: string;
    name: string;
    quantity: number;
}
