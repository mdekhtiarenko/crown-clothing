import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)``;

export const OptionsContainer = styled.div`
    display: flex;
`;


export const OptionLink = styled(Link)`
    margin: 0px 10px;
    font-size: 18px;
    cursor: pointer;
`;
