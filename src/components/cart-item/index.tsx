import React from "react";

import "./cart-item.styles.css.styles.scss"
import {CartItem} from "../../domain";

interface IProps {
    item: CartItem
}

export const CartItemComponent = ({item}: IProps) => {
    const {imageUrl, price, name, quantity} = item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price}$</span>
            </div>
        </div>
    )
};
