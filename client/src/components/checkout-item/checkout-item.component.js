import React from 'react';
import {connect} from 'react-redux';

import {CheckoutItemContainer,ValueContainer,ImageContainer,ImgContainer,ArrowContainer,QuantityContainer,NameAndPriceContainer,RemoveButtonContainer} from './checkout-item.styles'

import {ClearCartItem,AddCartItem,RemoveCartItem} from '../../redux/cart/cart.actions';

const CheckoutItem=({cartItem,ClearCartItem,AddCartItem,RemoveCartItem})=>{
    const {name,price,quantity,imageUrl}=cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <ImgContainer alt='item' src={imageUrl}/>
        </ImageContainer>
        <NameAndPriceContainer>{name}</NameAndPriceContainer>
        <QuantityContainer>
            <ArrowContainer onClick={()=>RemoveCartItem(cartItem)} >&#10094;</ArrowContainer>
            <ValueContainer>{quantity}</ValueContainer>
            <ArrowContainer onClick={()=>AddCartItem(cartItem)} >&#10095;</ArrowContainer>
        </QuantityContainer>
        <NameAndPriceContainer>${price}</NameAndPriceContainer>
        <RemoveButtonContainer onClick={()=>ClearCartItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)}

const mapDispatchToProps=dispatch=>({
    ClearCartItem:item=>dispatch(ClearCartItem(item)),
    AddCartItem:item=>dispatch(AddCartItem(item)),
    RemoveCartItem:item=>dispatch(RemoveCartItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);