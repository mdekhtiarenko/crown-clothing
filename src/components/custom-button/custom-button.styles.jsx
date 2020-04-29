import styled, {css} from "styled-components";

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignIn;
    } else if (props.inverted) {
        return invertedButtonStyles;
    } else {
        console.log(props);
        return regularButtonStyles;
    }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  margin: 10px 0;
  padding: 0px 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  ${getButtonStyles}
`;

const regularButtonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid black;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    width: 100%;
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
`;

const googleSignIn = css`
    background-color: #4285f4;
    border: 1px solid #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: 1px solid #357ae8;
    }
`;
