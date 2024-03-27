import styled from "styled-components";

const Input = styled.input`
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  outline: none;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--Grayscale-40, #818181);
  background: var(--Grayscale-10, #fff);

  &:focus {
    border-color: var(--Brown-40, #542f1a);
  }
`;

export default Input;
