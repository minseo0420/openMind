import styled from "styled-components";
import { ReactComponent as NextArrow } from "../../assets/svg/icons/arrow-right2.svg";
import { BUTTON_STYLE } from "../../style/button"
import Button from "../buttons/Button";

function ArrowIconButton({ hasIcon, variant = "fill", children, disabled = false, ...rest }) {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      rightIcon={hasIcon && <StyledNextArrow variant={variant} disabled={disabled} />}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default ArrowIconButton;

const StyledNextArrow = styled(NextArrow)`
  fill: ${(props) =>
    props.disabled
      ? BUTTON_STYLE[props.variant].disabledColor
      : BUTTON_STYLE[props.variant].defaultColor};
  width: 1.8rem;
  height: 1.8rem;
`;
