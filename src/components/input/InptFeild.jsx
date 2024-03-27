import styled, { css } from "styled-components";
import Input from "./Input";
import person from "../../assets/svg/icons/person.svg";

const InputField = styled(Input)`
  background-image: url("${person}");
  background-position: 1.6rem 50%;
  background-repeat: no-repeat;
  background-size: 2rem;
  padding-left: 4rem;
  background-color: ${(props) => props.theme.colors.colorInputField};
  color: ${(props) => props.theme.colors.colorMainFont};
  &::placeholder {
    color: ${(props) => props.theme.colors.colorMainFont};
  }
  ${(props) =>
    props.hasError &&
    css`
      border-color: var(--Red-50);
    `}
`;

export default InputField;
