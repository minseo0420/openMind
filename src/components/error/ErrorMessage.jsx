import styled from "styled-components";

function ErrorMessage({ error }) {
  return <StyledError>{error}</StyledError>;
}
export default ErrorMessage;

const StyledError = styled.p`
  color: var(--Red-50);
  font-size: small;
`;
