import styled from "styled-components";
import Button from "./Button";
import { BoxShadow2 } from "../../style/button";

function FloatingButton({ className, children, ...rest }) {
  return (
    <StyledButton className={className} variant="fill" {...rest}>
      {children}
    </StyledButton>
  );
}

export default FloatingButton;

// styled
const StyledButton = styled(Button)`
  ${BoxShadow2}
  border-radius: 20rem;
`;
