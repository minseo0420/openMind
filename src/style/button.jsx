import { css } from "styled-components";

const BoxShadow1 = css`
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(140, 140, 140, 0.25);
`;

const BoxShadow2 = css`
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
`;

const BoxShadow3 = css`
  box-shadow: 0rem 1.6rem 2rem 0rem rgba(48, 48, 48, 0.62);
`;

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BUTTON_STYLE = {
  fill: {
    defaultColor: "var(--Grayscale-10)",
    backgroundColor: (props) => `${props.theme.colors.colorBrownButton}`,
    activeBackgroundColor: (props) => `${props.theme.colors.colorBrownActiveButton}`,
    activeBoxShadowColor: (props) => `${props.theme.colors.colorBrownActiveButton}`,
    hover: (props) => `${props.theme.colors.colorBrownActiveButton}`,
    disabledColor: "var(--Grayscale-10)",
    disabledBackgroundColor: (props) => `${props.theme.colors.colorBrownDisableButton}`,
    disabledBoxShadow: "var(--Brown-30)",
  },
  outline: {
    defaultColor: (props) => `${props.theme.colors.colorTextButton}`,
    backgroundColor: (props) => `${props.theme.colors.colorBrownOutlineButton}`,
    activeBackgroundColor: (props) => `${props.theme.colors.colorBrownOutlineActiveButton}`,
    activeBoxShadowColor: (props) => `${props.theme.colors.colorBrownActiveButton}`,
    hover: (props) => `${props.theme.colors.colorBrownActiveButton}`,
    disabledColor: "var(--Brown-30)",
    disabledBackgroundColor: "var(--Brown-10)",
    disabledBoxShadow: "var(--Brown-30)",
  },
};

export { BoxShadow1, BoxShadow2, BoxShadow3, FlexCenter, BUTTON_STYLE };
