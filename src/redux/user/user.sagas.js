import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {UserActionTypes} from "./user.types";
import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess
} from "./user.actions";
import {
    auth,
    checkIfUserSessionIsActive,
    createUserProfileInFirebase,
    googleAuthProvider
} from "../../firebase/firebase.utils";

export function* onSignInWithGoogleStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
}

export function* onSignInWithEmailStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_WITH_EMAIL_START, signInWithEmail)
}

export function* onCheckUserSessionIsActive() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION_IS_ACTIVE, checkUserIsAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleAuthProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(signInFailure(e));
    }

}

function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (e) {
        yield put(signInFailure(e));
    }
}

function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(createUserProfileInFirebase, user)
        const userSnapshop = yield userRef.get();
        yield put(signInSuccess({id: userSnapshop.id, ...userSnapshop.data()}))
    } catch (e) {
        yield put(signInFailure(e));
    }
}

function* checkUserIsAuthenticated() {
    try {
        const user = yield checkIfUserSessionIsActive();
        if (!user) return;
        yield getSnapshotFromUserAuth(user)
    } catch (e) {
        yield put(signInFailure(e))
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (e) {
        yield put(signOutFailure(e));
    }
}

function* signUp({payload: {email, password, displayName, successfulSignUp}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield call(createUserProfileInFirebase, user, {displayName});
        successfulSignUp();
        yield put(signUpSuccess())
    } catch (e) {
        yield put(signUpFailure(e));
    }
}

export default function* registerUserSagas() {
    yield all([call(onSignInWithGoogleStart), call(onSignInWithEmailStart), call(onCheckUserSessionIsActive),
        call(onSignOutStart), call(onSignUpStart)
    ])
}
