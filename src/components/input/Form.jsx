import styled from "styled-components";
import { BoxShadow1 } from "../../style/button";

const Form = styled.form`
  ${BoxShadow1}
  display: flex;
  justify-content: center;
  width: 32.7rem;
  padding: 2.4rem;
  flex-direction: column;
  border-radius: 2.4rem;
  background: ${(props) => props.theme.colors.colorCard};
  gap: 1rem;

  &:focus {
    border-color: ${(props) => props.theme.colors.colorBrown_40};
  }

  @media (min-width: 768px) {
    width: 61.2rem;
    padding: 3.2rem;
  }
`;

export default Form;
