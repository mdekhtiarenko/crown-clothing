import React from "react";
import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import {toggleShowCartDropdown} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleShowCartDropdown, itemsCount}) => (
    <div className="cart-icon" onClick={toggleShowCartDropdown}>
        <ShoppingCartIcon className="shopping-icon"/>
        <span className="items-count">{itemsCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleShowCartDropdown: () => dispatch(toggleShowCartDropdown())
});

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);