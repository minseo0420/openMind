import styled from "styled-components";
import { BUTTON_STYLE } from "../../style/button";

function Button({ variant = "fill", children, rightIcon, disabled, ...rest }) {
  return (
    <StyledButton variant={variant} $rightIcon={rightIcon} disabled={disabled} {...rest}>
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  display: flex;
  padding: ${(props) => (props.variant === "outline" ? "0.8rem 1.2rem" : "1.2rem 2.4rem")};
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  color: ${(props) => BUTTON_STYLE[props.variant].defaultColor};
  font-size: 1.4rem;
  border-radius: 0.8rem;
  box-shadow: inset 0 0 0 0.1rem ${(props) => props.theme.colors.colorBrown_40};
  background-color: ${(props) => BUTTON_STYLE[props.variant].backgroundColor};
  box-sizing: border-box;
  border: none;
  outline: none;

  &:active {
    box-shadow: inset 0 0 0 0.2rem ${(props) => BUTTON_STYLE[props.variant].activeBoxShadowColor};
    background-color: ${(props) => BUTTON_STYLE[props.variant].activeBackgroundColor};
  }

  &:hover {
    box-shadow: inset 0 0 0 0.2rem ${(props) => BUTTON_STYLE[props.variant].hover};
  }

  &:disabled {
    color: ${(props) => BUTTON_STYLE[props.variant].disabledColor};
    background-color: ${(props) => BUTTON_STYLE[props.variant].disabledBackgroundColor};
    box-shadow: inset 0 0 0 0.1rem ${(props) => BUTTON_STYLE[props.variant].disabledBoxShadow};
  }

  @media (min-width: 768px) {
    padding: 1.2rem 2.4rem;
    gap: 0.8rem;
    font-size: 1.6rem;
  }
`;
