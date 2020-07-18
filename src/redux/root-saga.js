import {all, call} from "@redux-saga/core/effects";
import registerShopItemsSagas from "./shop-items/shop-items.sagas";
import registerUserSagas from "./user/user.sagas";
import registerCartSagas from "./cart/cart.sagas";

export default function* rootSaga() {
    yield all([
        call(registerShopItemsSagas), call(registerUserSagas), call(registerCartSagas)
    ])
}