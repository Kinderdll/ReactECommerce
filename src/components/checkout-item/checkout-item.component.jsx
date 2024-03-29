import React from 'react'
import {connect} from 'react-redux'
import './checkout-item.styles.scss';
import {clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem =({cartItem,clearItem,addItem,removeItem}) =>{
    const {name,quantity,imageUrl,price} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='checkout-item'></img>        
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow'onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    clearItem : (cartItem) =>dispatch(clearItem(cartItem)),
    addItem:(cartItem)=>dispatch(addItem(cartItem)),
    removeItem:(cartItem)=>dispatch(removeItem(cartItem))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)