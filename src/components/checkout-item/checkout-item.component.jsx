import React from "react";
import "./checkout-item.styles.scss";
import {addItemToCart, removeItemFromCart, decreaseItemQuantity} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckoutItem = ({item, removeFromCart, addItemToCart, decreaseItemQuantity}) => (
    <div className="checkout-item">
        <div className="item-block image-container">
            <img className="item-image" src={item.imageUrl} alt=""/>
        </div>

        <span className="item-block">
                {item.name}
        </span>

        <span className="item-block">
            <span className="arrow" onClick={() => decreaseItemQuantity(item)}>&#10094;</span> {item.quantity} <span className="arrow" onClick={() => addItemToCart(item)}>&#10095;</span>
        </span>

        <div className="item-block">
            ${item.price * item.quantity}
        </div>

        <div className="item-block" onClick={() => removeFromCart(item)}>
            &#x2715;
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    removeFromCart: item => dispatch(removeItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);