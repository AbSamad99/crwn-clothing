import {takeLatest,put,call,all} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import {ClearCart} from './cart.actions';

export function* clearCart(){
    yield put(ClearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCart)
}

export function* cartSaga(){
    yield all([
        call(onSignOutSuccess)
    ])
}