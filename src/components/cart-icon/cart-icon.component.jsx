import React from 'react';
import {connect} from 'react-redux';

import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {ToggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon=({ToggleCartHidden})=>(
    <div className='cart-icon' >
        <ShoppingIcon className='shopping-icon' onClick={ToggleCartHidden} />
        <span className='item-count' >0</span>
    </div>
);

const mapDispatchtoProps=dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
})

export default connect(null,mapDispatchtoProps)(CartIcon);

