import {cartActionTypes} from './cart.types';

export const ToggleCartHidden=()=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN
});

export const AddCartItem=(item)=>({
    type:cartActionTypes.ADD_CART_ITEM,
    payload:item
});