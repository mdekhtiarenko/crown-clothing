import {combineReducers} from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import localStorage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";


const persistConfig = {
    key: 'root',
    storage: localStorage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);