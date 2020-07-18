import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import UserActionTypes from "../user/user.types";
import {clearCart} from "./cart.actions";


export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, onSignOutClearCart);
}

function* onSignOutClearCart() {
    yield put(clearCart())
}

export default function* registerCartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}