import {createSelector} from 'reselect';

const selectCart=state=>state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.cartItems
)

export const cartItemsCount=createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((accumilator,currentItem)=>accumilator+currentItem.quantity,0)
)

export const selectHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)

export const selectCartTotal=createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((accumilator,currentItem)=>accumilator+currentItem.quantity*currentItem.price,0)
)
 