import React from "react";
import "./checkout-page.styles.scss";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item";
import StripeButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className="checkout-page col-7">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)
        }

        <div className="total">
            <span>TOTAL: {totalPrice}$</span>
        </div>

        <StripeButton/>

    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);

