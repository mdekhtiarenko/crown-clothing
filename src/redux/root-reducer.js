import {combineReducers} from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import localStorage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";
import directoryReducer from "./directory/directory.reducer";
import shopItemsReducer from "./shop-items/shop-items.reducer";


const persistConfig = {
    key: 'root',
    storage: localStorage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shopItems: shopItemsReducer,
});

export default persistReducer(persistConfig, rootReducer);
