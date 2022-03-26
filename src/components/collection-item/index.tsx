import React from 'react';
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../redux/cart/cart.actions";
import {Item} from "../../redux/shop-items/shop-items.types";

interface IProps {
    item: Item
}

export default function CollectionItem({item}: IProps) {
    const dispatch = useDispatch();
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${item.imageUrl})`}}/>
            <div className='collection-item-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>${item.price}</span>
            </div>
            <CustomButton isGoogleSignIn={false} inverted onClick={() => dispatch(addItemToCart(item))}>Add to cart</CustomButton>
        </div>
    )
};
