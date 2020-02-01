import React from "react";
import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import {toggleShowCartDropdown} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CartIcon = ({toggleShowCartDropdown, itemsCount}) => (
    <div className="cart-icon" onClick={toggleShowCartDropdown}>
        <ShoppingCartIcon className="shopping-icon"/>
        <span className="items-count">{itemsCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleShowCartDropdown: () => dispatch(toggleShowCartDropdown())
});

const mapStateToProps = state => ({
    itemsCount: state.cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);