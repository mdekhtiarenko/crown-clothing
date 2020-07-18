import UserActionTypes from "./user.types";

export const startSignInWithGoogle = () => ({
    type: UserActionTypes.SIGN_IN_WITH_GOOGLE_START
})

export const startSignInWithEmail = (email, password) => ({
    type: UserActionTypes.SIGN_IN_WITH_EMAIL_START,
    payload: {email, password}
})

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSessionIsActive = () => ({
    type: UserActionTypes.CHECK_USER_SESSION_IS_ACTIVE
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const singUpStart = (email, password, displayName, successfulSignUp) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: {email, password, displayName, successfulSignUp}
})

export const signUpSuccess = () => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
})

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})
