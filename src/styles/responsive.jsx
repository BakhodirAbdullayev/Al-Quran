import { css } from "styled-components";

export const first = (p) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${p}
    }
  `;
};
export const mobile = (p) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${p}
    }
  `;
};
