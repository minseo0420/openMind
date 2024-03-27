import styled from "styled-components";

const InputTextArea = styled.textarea`
  font-family: "Pretendard";
  padding: 1.6rem;
  font-size: 1.6rem;
  outline: none;
  height: 32.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid transparent;
  background: ${(props) => props.theme.colors.colorInput};
  color: ${(props) => props.theme.colors.colorMainFont};
  &::placeholder {
    color: ${(props) => props.theme.colors.colorMainFont};
  }
  &:focus {
    border: 0.1rem solid ${(props) => props.theme.colors.colorBrown_40};
  }
`;

export default InputTextArea;
