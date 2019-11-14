import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {ToggleCartHidden} from '../../redux/cart/cart.actions';
import {cartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon=({ToggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={ToggleCartHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' >{itemCount}</span>
    </div>
);

const mapStateToProps=createStructuredSelector({
    itemCount:cartItemsCount
})

const mapDispatchtoProps=dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchtoProps)(CartIcon);

