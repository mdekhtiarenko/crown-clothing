import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {Collection, ShopItemsTypes} from "./shop-items.types";
import {firestore} from "../../firebase/firebase.utils";
import {fetchShopItemsFailure, fetchShopItemsSuccess} from "./shop-items.actions";
import {QuerySnapshot} from "@firebase/firestore-types";

export function* onFetchCollectionStart() {
    yield takeLatest(ShopItemsTypes.FETCH_SHOP_ITEMS_START_CALL, fetchCollectionAsync)
}

function* fetchCollectionAsync() {
    try {
        const collectionsRef = firestore.collection("collections");
        const snapshot:Promise<QuerySnapshot> = yield collectionsRef.get();
        const collectionsMap:Collection[] = yield call(convertShopItemsToMap, snapshot);
        yield put(fetchShopItemsSuccess(collectionsMap));
    } catch (e) {
        yield put(fetchShopItemsFailure("Failed to fetch collections"));
    }
}

export default function* registerShopItemsSagas() {
    yield all([call(onFetchCollectionStart)])
}

const convertShopItemsToMap = (collectionSnapshot:any): Collection[] => {
    console.log(collectionSnapshot);
    return collectionSnapshot.docs
        .map((docSnapshot: any) => {
            const {title, items} = docSnapshot.data();
            return {
                id: docSnapshot.id,
                routeName: encodeURI(title.toLowerCase()),
                title,
                items
            }
        });
};
