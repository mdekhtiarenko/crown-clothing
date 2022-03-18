import React from "react";
import "./cart-icon.styles.scss"
import ShoppingCartIcon from "../../assets/shopping-bag.svg";

import {toggleShowCartDropdown} from "../../redux/cart/cart.actions";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";


export default function CartIcon() {
    const dispatch = useDispatch();
    const itemsCount = useSelector(selectCartItemsCount)
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleShowCartDropdown())}>
            <img src={ShoppingCartIcon} alt="Shopping Cart Icon" className="shopping-icon"/>
            <span className="items-count">{itemsCount}</span>
        </div>
    );
}

