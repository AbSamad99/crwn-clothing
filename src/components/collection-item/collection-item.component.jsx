import React from 'react';
import {connect} from 'react-redux';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import {AddCartItem} from '../../redux/cart/cart.actions';

const CollectionItem=({item,AddCartItem})=>{
    const{name,imageUrl,price}=item;
    return(
    <div className='collection-item' >
        <div className='item-image' style={{backgroundImage:`url(${imageUrl})`}} />
        <div className='collection-footer' >
            <span className='name' >{name}</span>
            <span className='price' >{price}</span>
        </div>
        <CustomButton onClick={()=>AddCartItem(item)} className='custom-button' inverted >Add to cart</CustomButton>
    </div>
)};

const mapDispatchToProps=dispatch=>({
    AddCartItem:(item)=>dispatch(AddCartItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
