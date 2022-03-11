import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import {connect, useDispatch} from "react-redux";
import {CartItemComponent} from "../cart-item";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {toggleShowCartDropdown} from "../../redux/cart/cart.actions";
import {CartItem} from "../../domain";
import {useNavigate} from "react-router-dom";

interface IProps {
    cartItems: CartItem[],
    history: History,
}

const CartDropdown = ({cartItems}: IProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

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
)};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
