import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import {useDispatch, useSelector} from "react-redux";
import {CartItemComponent} from "../cart-item";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleShowCartDropdown} from "../../redux/cart/cart.actions";
import {useNavigate} from "react-router-dom";

export default function CartDropdown() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems);


    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItemComponent key={cartItem.id} item={cartItem}/>) :
                        <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                dispatch(toggleShowCartDropdown());
                navigate("/checkout")
            }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

