import {Cart} from "./cart/cart.types";
import {Directory} from "./directory/directory.types";
import {ShopItems} from "./shop-items/shop-items.types";

export interface State {
    cart: Cart;
    directory: Directory;
    shopItems: ShopItems;
}
