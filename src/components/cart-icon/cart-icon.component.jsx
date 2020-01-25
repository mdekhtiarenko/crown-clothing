import React from "react";
import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import {toggleShowCartDropdown} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CartIcon = ({toggleShowCartDropdown}) => (
    <div className="cart-icon" onClick={toggleShowCartDropdown}>
        <ShoppingCartIcon className="shopping-icon"/>
        <span className="items-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleShowCartDropdown: () => dispatch(toggleShowCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);