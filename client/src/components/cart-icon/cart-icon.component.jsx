import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {CartIconContainer,ItemCountContainer,ShoppingIconContainer} from './cart-icon.styles'

import {ToggleCartHidden} from '../../redux/cart/cart.actions';
import {cartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon=({ToggleCartHidden,itemCount})=>(
    <CartIconContainer onClick={ToggleCartHidden}>
        <ShoppingIconContainer/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapStateToProps=createStructuredSelector({
    itemCount:cartItemsCount
})

const mapDispatchtoProps=dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchtoProps)(CartIcon);

