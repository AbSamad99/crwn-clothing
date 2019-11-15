import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.styles.scss';

import {ClearCartItem,AddCartItem,RemoveCartItem} from '../../redux/cart/cart.actions';

const CheckoutItem=({cartItem,ClearCartItem,AddCartItem,RemoveCartItem})=>{
    const {name,price,quantity,imageUrl}=cartItem;
    return(
    <div className='checkout-item' >
        <div className='image-container' >
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name' >{name}</span>
        <span className='quantity' >
            <div className='arrow' onClick={()=>RemoveCartItem(cartItem)} >&#10094;</div>
            <span className='value' >{quantity}</span>
            <div className='arrow' onClick={()=>AddCartItem(cartItem)} >&#10095;</div>
        </span>
        <span className='price' >${price}</span>
        <div className='remove-button' onClick={()=>ClearCartItem(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps=dispatch=>({
    ClearCartItem:item=>dispatch(ClearCartItem(item)),
    AddCartItem:item=>dispatch(AddCartItem(item)),
    RemoveCartItem:item=>dispatch(RemoveCartItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);