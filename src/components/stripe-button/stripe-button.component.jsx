import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_hNVidEWZRxloqa8xbsezQ5Re00uGfIFOsK";

    const onToken = token => {
        console.log(token);
        alert("Payment successful!");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Closing"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLable="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeButton;