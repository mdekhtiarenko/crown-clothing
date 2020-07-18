import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ShopItemsTypes} from "./shop-items.types";
import {convertShopItemsToMap, firestore} from "../../firebase/firebase.utils";
import {fetchShopItemsFailure, fetchShopItemsSuccess} from "./shop-items.actions";

export function* onFetchCollectionStart() {
    yield takeLatest(ShopItemsTypes.FETCH_SHOP_ITEMS_START_CALL, fetchCollectionAsync)
}

function* fetchCollectionAsync() {
    try {
        const collectionsRef = firestore.collection("collections");
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertShopItemsToMap, snapshot);
        yield put(fetchShopItemsSuccess(collectionsMap));
    } catch (e) {
        yield put(fetchShopItemsFailure(e));
    }
}

export default function* registerShopItemsSagas() {
    yield all([call(onFetchCollectionStart)])
}