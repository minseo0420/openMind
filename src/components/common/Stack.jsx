import styled from "styled-components";
import { FlexCenter } from "../../style/button";

function Stack({ className, gap, children }) {
  return (
    <StyledStack className={className} $gap={gap}>
      {children}
    </StyledStack>
  );
}
export default Stack;

const StyledStack = styled.div`
  position: relative;
  ${FlexCenter}
  flex-direction: column;
  gap: ${(props) => props.$gap * 0.1}rem;
`;
