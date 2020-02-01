import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`
                ${isGoogleSignIn ? "google-sign-in" : ""} 
                ${inverted ? "inverted" : ""} 
                custom-button col-6`}{...otherProps}>
        {children}
    </button>
);

export default CustomButton;