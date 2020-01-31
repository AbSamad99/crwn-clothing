import React from 'react';

import {CartItemContainer,ItemDetailsContainer,NameContainer,ImageContainer} from './cart-item.styles'

const CartItem=({item:{imageUrl,price,name,quantity}})=>(
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameContainer className='name' >{name}</NameContainer>
            <span className='price' >{quantity}x{price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);