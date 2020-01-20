import UserActionTypes from './user.types';

export const emailSignInStart=(emailAndPassword)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
}) 

export const googleSignInStart=()=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signUpStart=(userDetails)=>({
    type:UserActionTypes.SIGN_UP_START,
    payload:userDetails
})

export const signUpSuccess=({user,additionalData})=>({
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload:{user,additionalData}
})

export const signUpFailure=(errorMessage)=>({
    type:UserActionTypes.SIGN_UP_FAILURE,
    payload:errorMessage
})

export const signInSuccess=(user)=>({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const signInFailure=(errorMessage)=>({
    type:UserActionTypes.SIGN_IN_FAILURE,
    payload:errorMessage
})

export const checkUserSession=()=>({
    type:UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart=()=>({
    type:UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess=()=>({
    type:UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure=(errorMessage)=>({
    type:UserActionTypes.SIGN_OUT_FAILURE,
    payload:errorMessage
})
