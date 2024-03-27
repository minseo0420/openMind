import { css, styled } from "styled-components";

function ThemeModeButton({ toggleTheme, themeMode }) {
  return (
    <StyledThemeModeButton onClick={toggleTheme}>
      {themeMode === "lightTheme" ? "🌞" : "🌚"}
    </StyledThemeModeButton>
  );
}

const StyledThemeModeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: 8rem;
  height: 5rem;
  margin: 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 3rem;
  background-color: ${(props) => props.theme.colors.colorGray_20};

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorMain};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
      color: ${theme.textColor};
    `;
  }}
`;

export default ThemeModeButton;
