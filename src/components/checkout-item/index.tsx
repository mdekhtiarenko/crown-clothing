import React from "react";
import "./checkout-item.styles.scss";
import {addItemToCart, decreaseItemQuantity, removeItemFromCart} from "../../redux/cart/cart.actions";
import {useDispatch} from "react-redux";
import {CartItem} from "../../redux/cart/cart.types";


interface IProps {
    item: CartItem
}

export default function CheckoutItem({item}: IProps) {
    const dispatch = useDispatch();

    return (
        <div className="checkout-item">
            <div className="item-block image-container">
                <img className="item-image" src={item.imageUrl} alt=""/>
            </div>

            <span className="item-block">
                {item.name}
            </span>

            <span className="item-block">
                <span className="arrow" onClick={() => dispatch(decreaseItemQuantity(item))}>&#10094;</span>
                {item.quantity}
                <span className="arrow" onClick={() => dispatch(addItemToCart(item))}>&#10095;</span>
            </span>

            <div className="item-block">
                ${item.price * item.quantity}
            </div>

            <div className="item-block" onClick={() => dispatch(removeItemFromCart(item))}>
                &#x2715;
            </div>
        </div>
    )
}
