import {cartActionTypes} from './cart.types';

export const ToggleCartHidden=()=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN
});

export const AddCartItem=(item)=>({
    type:cartActionTypes.ADD_CART_ITEM,
    payload:item
});

export const RemoveCartItem=(item)=>({
    type:cartActionTypes.REMOVE_CART_ITEM,
    payload:item
});

export const ClearCartItem=(item)=>({
    type:cartActionTypes.CLEAR_CART_ITEM,
    payload:item
});