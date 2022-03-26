import {SpinnerContainer, SpinnerOverlay} from "./loader.styles";
import React, {ComponentType} from "react";

interface IProps {
    isLoading: boolean,
    component: ComponentType
}

export function Loader({isLoading, component: Component}: IProps) {
    return (
        isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <Component/>
        )
    )
}
